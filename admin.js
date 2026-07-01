const config = window.DTS_CONFIG || {};
const loginView = document.querySelector("[data-login-view]");
const dashboardView = document.querySelector("[data-dashboard-view]");
const loginForm = document.querySelector("[data-login-form]");
const loginStatus = document.querySelector("[data-login-status]");
const logoutButton = document.querySelector("[data-logout]");
const refreshButton = document.querySelector("[data-refresh]");
const panelTitle = document.querySelector("[data-panel-title]");
const tabButtons = document.querySelectorAll("[data-panel-tab]");
const panels = document.querySelectorAll("[data-panel]");

const contentForm = document.querySelector("[data-content-form]");
const assetForm = document.querySelector("[data-asset-form]");
const userForm = document.querySelector("[data-user-form]");

const editableContentKeys = [
  "heroEyebrow",
  "heroTitle",
  "heroText",
  "heroPrimary",
  "heroSecondary",
  "servicesTitle",
  "servicesText",
  "solutionsTitle",
  "diffTitle",
  "processTitle",
  "techTitle",
  "plansTitle",
  "caseTitle",
  "faqTitle",
  "contactTitle",
  "contactText",
  "footerText"
];

if (!config.SUPABASE_URL || !config.SUPABASE_ANON_KEY) {
  loginStatus.textContent = "Configura SUPABASE_URL y SUPABASE_ANON_KEY en config.js.";
}

const supabaseClient = config.SUPABASE_URL && config.SUPABASE_ANON_KEY
  ? window.supabase?.createClient(config.SUPABASE_URL, config.SUPABASE_ANON_KEY)
  : null;
let currentUser = null;

const setStatus = (selector, text) => {
  const element = document.querySelector(selector);
  if (element) element.textContent = text;
};

const escapeHtml = (value = "") =>
  String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));

const formatDate = (value) => value ? new Date(value).toLocaleString() : "";

const requireConfiguredSupabase = () => {
  if (!supabaseClient || !config.SUPABASE_URL || !config.SUPABASE_ANON_KEY) {
    throw new Error("Supabase no esta configurado.");
  }
};

const checkAdminAccess = async (user) => {
  const { data, error } = await supabaseClient
    .from("admin_profiles")
    .select("user_id,email,is_active")
    .eq("user_id", user.id)
    .eq("is_active", true)
    .maybeSingle();

  if (error || !data) {
    await supabaseClient.auth.signOut();
    throw new Error("Tu usuario no esta autorizado para este panel.");
  }

  return data;
};

const showDashboard = async (user) => {
  currentUser = user;
  await checkAdminAccess(user);
  loginView.hidden = true;
  dashboardView.hidden = false;
  populateContentKeys();
  await loadAll();
};

const populateContentKeys = () => {
  const select = document.querySelector("[data-content-key]");
  if (!select || select.children.length) return;
  select.innerHTML = editableContentKeys
    .map((key) => `<option value="${key}">${key}</option>`)
    .join("");
};

const countTable = async (table) => {
  const { count, error } = await supabaseClient
    .from(table)
    .select("*", { count: "exact", head: true });
  if (error) throw error;
  return count || 0;
};

const renderRows = (selector, rows, renderer, emptyMessage = "Sin datos") => {
  const tbody = document.querySelector(selector);
  if (!tbody) return;
  tbody.innerHTML = rows.length
    ? rows.map(renderer).join("")
    : `<tr><td colspan="8">${emptyMessage}</td></tr>`;
};

const loadOverview = async () => {
  const [leads, contacts, messages, sessions] = await Promise.all([
    countTable("leads"),
    countTable("contact_requests"),
    countTable("chat_messages"),
    countTable("chat_sessions")
  ]);

  document.querySelector('[data-count="leads"]').textContent = leads;
  document.querySelector('[data-count="contacts"]').textContent = contacts;
  document.querySelector('[data-count="messages"]').textContent = messages;
  document.querySelector('[data-count="sessions"]').textContent = sessions;

  const { data } = await supabaseClient
    .from("session_timeline")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(20);

  renderRows("[data-recent-events]", data || [], (row) => `
    <tr>
      <td>${formatDate(row.created_at)}</td>
      <td>${escapeHtml(row.activity_type)}</td>
      <td>${escapeHtml(row.detail)}</td>
    </tr>
  `);
};

const loadLeads = async () => {
  const { data, error } = await supabaseClient
    .from("leads")
    .select("id,created_at,status,service,email,phone,message,budget,urgency")
    .order("created_at", { ascending: false })
    .limit(100);
  if (error) throw error;

  renderRows("[data-leads]", data || [], (lead) => `
    <tr>
      <td>${formatDate(lead.created_at)}</td>
      <td>${escapeHtml(lead.status)}</td>
      <td>${escapeHtml(lead.service || "")}<br><small>${escapeHtml(lead.budget || "")} ${escapeHtml(lead.urgency || "")}</small></td>
      <td>${escapeHtml(lead.email || "")}</td>
      <td>${escapeHtml(lead.phone || "")}</td>
      <td>${escapeHtml(lead.message || "")}</td>
    </tr>
  `);
};

const loadMessages = async () => {
  const { data, error } = await supabaseClient
    .from("chat_messages")
    .select("session_id,created_at,sender,message")
    .order("created_at", { ascending: false })
    .limit(150);
  if (error) throw error;

  renderRows("[data-messages]", data || [], (message) => `
    <tr>
      <td>${formatDate(message.created_at)}</td>
      <td>${escapeHtml(message.session_id)}</td>
      <td>${escapeHtml(message.sender)}</td>
      <td>${escapeHtml(message.message)}</td>
    </tr>
  `);
};

const loadContent = async () => {
  const { data, error } = await supabaseClient
    .from("site_content")
    .select("content_key,language,value,is_published")
    .order("content_key", { ascending: true });
  if (error) throw error;

  renderRows("[data-content-list]", data || [], (row) => `
    <tr>
      <td>${escapeHtml(row.content_key)}</td>
      <td>${escapeHtml(row.language)}</td>
      <td>${escapeHtml(row.value)}</td>
      <td>${row.is_published ? "Si" : "No"}</td>
    </tr>
  `);
};

const loadAssets = async () => {
  const { data, error } = await supabaseClient
    .from("site_assets")
    .select("asset_slot,title,file_url,alt_text,is_active,created_at")
    .order("created_at", { ascending: false });
  if (error) throw error;

  const container = document.querySelector("[data-asset-list]");
  if (!container) return;
  container.innerHTML = (data || []).length
    ? data.map((asset) => `
      <article class="asset-item">
        <img src="${escapeHtml(asset.file_url)}" alt="${escapeHtml(asset.alt_text || asset.title || "")}">
        <div>
          <strong>${escapeHtml(asset.asset_slot)}</strong>
          <p>${escapeHtml(asset.title || "")}</p>
          <small>${asset.is_active ? "Activo" : "Inactivo"}</small>
        </div>
      </article>
    `).join("")
    : "<p>Sin imagenes registradas.</p>";
};

const loadUsers = async () => {
  const { data, error } = await supabaseClient
    .from("admin_profiles")
    .select("email,full_name,is_active,created_at")
    .order("created_at", { ascending: true });
  if (error) throw error;

  renderRows("[data-users]", data || [], (user) => `
    <tr>
      <td>${escapeHtml(user.email)}</td>
      <td>${escapeHtml(user.full_name || "")}</td>
      <td>${user.is_active ? "Si" : "No"}</td>
      <td>${formatDate(user.created_at)}</td>
    </tr>
  `);
};

const loadAll = async () => {
  try {
    await Promise.all([
      loadOverview(),
      loadLeads(),
      loadMessages(),
      loadContent(),
      loadAssets(),
      loadUsers()
    ]);
  } catch (error) {
    console.error(error);
    alert(`No se pudieron cargar los datos: ${error.message}`);
  }
};

loginForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  loginStatus.textContent = "Validando acceso...";

  try {
    requireConfiguredSupabase();
    const form = new FormData(loginForm);
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email: form.get("email"),
      password: form.get("password")
    });
    if (error) throw error;
    await showDashboard(data.user);
    loginStatus.textContent = "";
  } catch (error) {
    loginStatus.textContent = error.message;
  }
});

logoutButton?.addEventListener("click", async () => {
  await supabaseClient.auth.signOut();
  dashboardView.hidden = true;
  loginView.hidden = false;
});

refreshButton?.addEventListener("click", loadAll);

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((item) => item.classList.remove("is-active"));
    panels.forEach((panel) => panel.classList.remove("is-active"));
    button.classList.add("is-active");
    document.querySelector(`[data-panel="${button.dataset.panelTab}"]`)?.classList.add("is-active");
    panelTitle.textContent = button.textContent;
  });
});

contentForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  setStatus("[data-content-status]", "Guardando...");

  try {
    const form = new FormData(contentForm);
    const payload = {
      content_key: form.get("content_key"),
      language: form.get("language"),
      value: form.get("value"),
      label: form.get("content_key"),
      is_published: true,
      updated_by: currentUser.id
    };

    const { error } = await supabaseClient
      .from("site_content")
      .upsert(payload, { onConflict: "content_key,language" });
    if (error) throw error;

    await supabaseClient.from("admin_audit_log").insert({
      admin_user_id: currentUser.id,
      action: "update_content",
      target_table: "site_content",
      target_id: `${payload.content_key}:${payload.language}`,
      payload
    });

    setStatus("[data-content-status]", "Texto guardado.");
    contentForm.reset();
    await loadContent();
  } catch (error) {
    setStatus("[data-content-status]", error.message);
  }
});

assetForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  setStatus("[data-asset-status]", "Guardando...");

  try {
    const form = new FormData(assetForm);
    const file = form.get("file");
    let fileUrl = form.get("file_url");

    if (file && file.size) {
      const path = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;
      const { error: uploadError } = await supabaseClient.storage
        .from("site-assets")
        .upload(path, file, { upsert: true });
      if (uploadError) throw uploadError;
      const { data } = supabaseClient.storage.from("site-assets").getPublicUrl(path);
      fileUrl = data.publicUrl;
    }

    if (!fileUrl) throw new Error("Agrega una URL o sube un archivo.");

    const payload = {
      asset_slot: form.get("asset_slot"),
      title: form.get("title"),
      file_url: fileUrl,
      alt_text: form.get("alt_text"),
      is_active: true,
      uploaded_by: currentUser.id
    };

    const { error } = await supabaseClient.from("site_assets").insert(payload);
    if (error) throw error;

    await supabaseClient.from("admin_audit_log").insert({
      admin_user_id: currentUser.id,
      action: "add_asset",
      target_table: "site_assets",
      payload
    });

    setStatus("[data-asset-status]", "Imagen guardada.");
    assetForm.reset();
    await loadAssets();
  } catch (error) {
    setStatus("[data-asset-status]", error.message);
  }
});

userForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  setStatus("[data-user-status]", "Guardando usuario...");

  try {
    const form = new FormData(userForm);
    const payload = {
      user_id: form.get("user_id"),
      email: form.get("email"),
      full_name: form.get("full_name"),
      role: "admin",
      is_active: true
    };

    const { error } = await supabaseClient.from("admin_profiles").upsert(payload, { onConflict: "user_id" });
    if (error) throw error;

    setStatus("[data-user-status]", "Usuario autorizado.");
    userForm.reset();
    await loadUsers();
  } catch (error) {
    setStatus("[data-user-status]", error.message);
  }
});

supabaseClient?.auth.getSession().then(async ({ data }) => {
  if (data.session?.user) {
    try {
      await showDashboard(data.session.user);
    } catch (error) {
      loginStatus.textContent = error.message;
    }
  }
});
