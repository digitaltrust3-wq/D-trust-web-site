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

const leadStatusLabels = {
  new: "Nuevo",
  contacted: "Contactado",
  proposal: "En propuesta",
  won: "Ganado",
  lost: "Perdido"
};

const editableContentKeys = [
  { key: "heroEyebrow", label: "Inicio - frase superior" },
  { key: "heroTitle", label: "Inicio - titulo principal" },
  { key: "heroText", label: "Inicio - texto principal" },
  { key: "heroPrimary", label: "Inicio - boton principal" },
  { key: "heroSecondary", label: "Inicio - boton secundario" },
  { key: "servicesTitle", label: "Servicios - titulo" },
  { key: "servicesText", label: "Servicios - descripción" },
  { key: "solutionsTitle", label: "Soluciones - titulo" },
  { key: "diffTitle", label: "Diferenciales - titulo" },
  { key: "processTitle", label: "Proceso - titulo" },
  { key: "techTitle", label: "Tecnología - titulo" },
  { key: "plansTitle", label: "Planes - titulo" },
  { key: "caseTitle", label: "Caso de uso - titulo" },
  { key: "faqTitle", label: "FAQ - titulo" },
  { key: "contactTitle", label: "Contacto - titulo" },
  { key: "contactText", label: "Contacto - descripción" },
  { key: "footerText", label: "Footer - texto final" }
];

const supabaseClient = config.SUPABASE_URL && config.SUPABASE_ANON_KEY
  ? window.supabase?.createClient(config.SUPABASE_URL, config.SUPABASE_ANON_KEY)
  : null;

let currentUser = null;
let currentLeads = [];
let currentMessages = [];
let currentAssets = [];

if (!config.SUPABASE_URL || !config.SUPABASE_ANON_KEY) {
  loginStatus.textContent = "Configura SUPABASE_URL y SUPABASE_ANON_KEY en config.js.";
}

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

const formatDate = (value) => value ? new Date(value).toLocaleString("es-CO") : "";

const friendlyKey = (key) => editableContentKeys.find((item) => item.key === key)?.label || key;

const requireConfiguredSupabase = () => {
  if (!supabaseClient || !config.SUPABASE_URL || !config.SUPABASE_ANON_KEY) {
    throw new Error("Supabase no esta configurado.");
  }
};

const updateHealth = (key, text, state = "neutral") => {
  const element = document.querySelector(`[data-health="${key}"]`);
  if (!element) return;
  element.textContent = text;
  element.dataset.state = state;
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
    .map((item) => `<option value="${item.key}">${item.label}</option>`)
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
    : `<tr><td colspan="10">${emptyMessage}</td></tr>`;
};

const renderBarChart = (selector, items, emptyMessage) => {
  const container = document.querySelector(selector);
  if (!container) return;
  if (!items.length) {
    container.innerHTML = `<p>${emptyMessage}</p>`;
    return;
  }

  const max = Math.max(...items.map((item) => item.count), 1);
  container.innerHTML = items.map((item) => {
    const width = Math.max((item.count / max) * 100, 8);
    return `
      <div class="chart-row">
        <span>${escapeHtml(item.label)}</span>
        <div class="chart-track"><i style="width:${width}%"></i></div>
        <strong>${item.count}</strong>
      </div>
    `;
  }).join("");
};

const groupCount = (rows, key, fallback = "Sin definir") => {
  const map = new Map();
  rows.forEach((row) => {
    const label = row[key] || fallback;
    map.set(label, (map.get(label) || 0) + 1);
  });
  return [...map.entries()]
    .map(([label, count]) => ({ label: leadStatusLabels[label] || label, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);
};

const loadConnectionStatus = async () => {
  updateHealth("supabase", config.SUPABASE_URL ? "Configurado" : "Falta URL", config.SUPABASE_URL ? "ok" : "error");
  updateHealth("database", "Probando...", "neutral");
  updateHealth("user", currentUser?.email || "Sin sesión", currentUser ? "ok" : "neutral");

  try {
    await countTable("leads");
    updateHealth("database", "Conectada", "ok");
  } catch (error) {
    updateHealth("database", "Revisar SQL/RLS", "error");
  }
};

const loadOverview = async () => {
  await loadConnectionStatus();

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

  const { data: leadData } = await supabaseClient
    .from("leads")
    .select("status,service")
    .order("created_at", { ascending: false })
    .limit(300);

  renderBarChart("[data-service-chart]", groupCount(leadData || [], "service"), "Todavía no hay servicios solicitados.");
  renderBarChart("[data-status-chart]", groupCount(leadData || [], "status"), "Todavía no hay estados para mostrar.");

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

const applyLeadFilters = () => {
  const query = document.querySelector("[data-lead-search]")?.value.trim().toLowerCase() || "";
  const status = document.querySelector("[data-lead-status-filter]")?.value || "";
  const service = document.querySelector("[data-lead-service-filter]")?.value.trim().toLowerCase() || "";
  const fromDate = document.querySelector("[data-lead-date-from]")?.value || "";

  const rows = currentLeads.filter((lead) => {
    const haystack = [lead.email, lead.phone, lead.message, lead.service, lead.budget, lead.urgency, lead.notes]
      .join(" ")
      .toLowerCase();
    const created = lead.created_at ? lead.created_at.slice(0, 10) : "";
    return (!query || haystack.includes(query))
      && (!status || lead.status === status)
      && (!service || String(lead.service || "").toLowerCase().includes(service))
      && (!fromDate || created >= fromDate);
  });

  renderRows("[data-leads]", rows, (lead) => `
    <tr>
      <td>${formatDate(lead.created_at)}</td>
      <td>
        <select class="inline-select" data-lead-status data-lead-id="${lead.id}">
          ${Object.entries(leadStatusLabels).map(([value, label]) =>
            `<option value="${value}"${lead.status === value ? " selected" : ""}>${label}</option>`
          ).join("")}
        </select>
      </td>
      <td>${escapeHtml(lead.service || "")}<br><small>${escapeHtml(lead.budget || "")} ${escapeHtml(lead.urgency || "")}</small></td>
      <td>${escapeHtml(lead.email || "")}</td>
      <td>${escapeHtml(lead.phone || "")}</td>
      <td class="message-cell">${escapeHtml(lead.message || "")}</td>
      <td>
        <textarea class="notes-input" rows="3" data-lead-notes data-lead-id="${lead.id}" placeholder="Nota interna">${escapeHtml(lead.notes || "")}</textarea>
        <button class="mini-button" type="button" data-save-lead-notes data-lead-id="${lead.id}">Guardar</button>
      </td>
    </tr>
  `);
};

const loadLeads = async () => {
  let { data, error } = await supabaseClient
    .from("leads")
    .select("id,created_at,updated_at,status,service,email,phone,message,budget,urgency,notes,session_id")
    .order("created_at", { ascending: false })
    .limit(300);

  if (error && String(error.message || "").includes("notes")) {
    const fallback = await supabaseClient
      .from("leads")
      .select("id,created_at,updated_at,status,service,email,phone,message,budget,urgency,session_id")
      .order("created_at", { ascending: false })
      .limit(300);
    data = (fallback.data || []).map((lead) => ({ ...lead, notes: "" }));
    error = fallback.error;
  }

  if (error) throw error;

  currentLeads = data || [];
  applyLeadFilters();
};

const applyMessageFilters = () => {
  const query = document.querySelector("[data-message-search]")?.value.trim().toLowerCase() || "";
  const sender = document.querySelector("[data-message-sender-filter]")?.value || "";

  const rows = currentMessages.filter((message) => {
    const haystack = [message.session_id, message.sender, message.message].join(" ").toLowerCase();
    return (!query || haystack.includes(query)) && (!sender || message.sender === sender);
  });

  renderRows("[data-messages]", rows, (message) => `
    <tr>
      <td>${formatDate(message.created_at)}</td>
      <td>${escapeHtml(message.session_id)}</td>
      <td>${escapeHtml(message.sender)}</td>
      <td class="message-cell">${escapeHtml(message.message)}</td>
    </tr>
  `);
};

const loadMessages = async () => {
  const { data, error } = await supabaseClient
    .from("chat_messages")
    .select("session_id,created_at,sender,message")
    .order("created_at", { ascending: false })
    .limit(300);
  if (error) throw error;

  currentMessages = data || [];
  applyMessageFilters();
};

const loadContent = async () => {
  const { data, error } = await supabaseClient
    .from("site_content")
    .select("content_key,language,value,is_published")
    .order("content_key", { ascending: true });
  if (error) throw error;

  renderRows("[data-content-list]", data || [], (row) => `
    <tr>
      <td>${escapeHtml(friendlyKey(row.content_key))}<br><small>${escapeHtml(row.content_key)}</small></td>
      <td>${escapeHtml(row.language)}</td>
      <td>${escapeHtml(row.value)}</td>
      <td>${row.is_published ? "Si" : "No"}</td>
    </tr>
  `);
};

const loadAssets = async () => {
  const { data, error } = await supabaseClient
    .from("site_assets")
    .select("id,asset_slot,title,file_url,alt_text,is_active,created_at")
    .order("created_at", { ascending: false });
  if (error) throw error;

  currentAssets = data || [];
  const container = document.querySelector("[data-asset-list]");
  if (!container) return;
  container.innerHTML = currentAssets.length
    ? currentAssets.map((asset) => `
      <article class="asset-item">
        <img src="${escapeHtml(asset.file_url)}" alt="${escapeHtml(asset.alt_text || asset.title || "")}">
        <div>
          <strong>${escapeHtml(asset.asset_slot)}</strong>
          <p>${escapeHtml(asset.title || "")}</p>
          <small class="${asset.is_active ? "status-ok" : ""}">${asset.is_active ? "Activo" : "Inactivo"}</small>
          <div class="asset-actions">
            <button class="mini-button" type="button" data-activate-asset="${asset.id}" data-asset-slot="${escapeHtml(asset.asset_slot)}">Activar</button>
            <button class="mini-button muted" type="button" data-disable-asset="${asset.id}">Desactivar</button>
          </div>
        </div>
      </article>
    `).join("")
    : "<p>Sin imágenes registradas.</p>";
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

const toCsv = (rows, columns) => {
  const header = columns.map((column) => column.label).join(",");
  const body = rows.map((row) => columns.map((column) => {
    const value = column.value(row) ?? "";
    return `"${String(value).replaceAll('"', '""')}"`;
  }).join(","));
  return [header, ...body].join("\n");
};

const downloadCsv = (filename, csv) => {
  const blob = new Blob([`\ufeff${csv}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
};

const saveLeadChange = async (leadId, changes) => {
  const { error } = await supabaseClient
    .from("leads")
    .update({ ...changes, updated_at: new Date().toISOString() })
    .eq("id", leadId);
  if (error) throw error;

  await supabaseClient.from("admin_audit_log").insert({
    admin_user_id: currentUser.id,
    action: "update_lead",
    target_table: "leads",
    target_id: String(leadId),
    payload: changes
  });
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

document.querySelector("[data-lead-search]")?.addEventListener("input", applyLeadFilters);
document.querySelector("[data-lead-status-filter]")?.addEventListener("change", applyLeadFilters);
document.querySelector("[data-lead-service-filter]")?.addEventListener("input", applyLeadFilters);
document.querySelector("[data-lead-date-from]")?.addEventListener("change", applyLeadFilters);
document.querySelector("[data-message-search]")?.addEventListener("input", applyMessageFilters);
document.querySelector("[data-message-sender-filter]")?.addEventListener("change", applyMessageFilters);

document.querySelector("[data-export-leads]")?.addEventListener("click", () => {
  const csv = toCsv(currentLeads, [
    { label: "Fecha", value: (row) => formatDate(row.created_at) },
    { label: "Estado", value: (row) => leadStatusLabels[row.status] || row.status },
    { label: "Servicio", value: (row) => row.service },
    { label: "Email", value: (row) => row.email },
    { label: "Teléfono", value: (row) => row.phone },
    { label: "Presupuesto", value: (row) => row.budget },
    { label: "Urgencia", value: (row) => row.urgency },
    { label: "Mensaje", value: (row) => row.message },
    { label: "Notas", value: (row) => row.notes }
  ]);
  downloadCsv(`leads-digital-trust-${new Date().toISOString().slice(0, 10)}.csv`, csv);
});

document.querySelector("[data-export-messages]")?.addEventListener("click", () => {
  const csv = toCsv(currentMessages, [
    { label: "Fecha", value: (row) => formatDate(row.created_at) },
    { label: "Sesión", value: (row) => row.session_id },
    { label: "Autor", value: (row) => row.sender },
    { label: "Mensaje", value: (row) => row.message }
  ]);
  downloadCsv(`chat-digital-trust-${new Date().toISOString().slice(0, 10)}.csv`, csv);
});

document.addEventListener("change", async (event) => {
  const select = event.target.closest("[data-lead-status]");
  if (!select) return;
  try {
    await saveLeadChange(select.dataset.leadId, { status: select.value });
    const lead = currentLeads.find((item) => String(item.id) === String(select.dataset.leadId));
    if (lead) lead.status = select.value;
    await loadOverview();
  } catch (error) {
    alert(`No se pudo actualizar el estado: ${error.message}`);
  }
});

document.addEventListener("click", async (event) => {
  const notesButton = event.target.closest("[data-save-lead-notes]");
  const activateButton = event.target.closest("[data-activate-asset]");
  const disableButton = event.target.closest("[data-disable-asset]");

  try {
    if (notesButton) {
      const input = document.querySelector(`[data-lead-notes][data-lead-id="${notesButton.dataset.leadId}"]`);
      await saveLeadChange(notesButton.dataset.leadId, { notes: input?.value || "" });
      const lead = currentLeads.find((item) => String(item.id) === String(notesButton.dataset.leadId));
      if (lead) lead.notes = input?.value || "";
      notesButton.textContent = "Guardado";
      setTimeout(() => { notesButton.textContent = "Guardar"; }, 1400);
    }

    if (activateButton) {
      const slot = activateButton.dataset.assetSlot;
      await supabaseClient.from("site_assets").update({ is_active: false }).eq("asset_slot", slot);
      const { error } = await supabaseClient.from("site_assets").update({ is_active: true }).eq("id", activateButton.dataset.activateAsset);
      if (error) throw error;
      await loadAssets();
    }

    if (disableButton) {
      const { error } = await supabaseClient.from("site_assets").update({ is_active: false }).eq("id", disableButton.dataset.disableAsset);
      if (error) throw error;
      await loadAssets();
    }
  } catch (error) {
    alert(`No se pudo completar la acción: ${error.message}`);
  }
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
      label: friendlyKey(form.get("content_key")),
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
    const assetSlot = form.get("asset_slot");

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

    await supabaseClient.from("site_assets").update({ is_active: false }).eq("asset_slot", assetSlot);

    const payload = {
      asset_slot: assetSlot,
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

    setStatus("[data-asset-status]", "Imagen guardada y activada.");
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

