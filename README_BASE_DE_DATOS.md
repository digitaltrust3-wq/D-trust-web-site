# Base de datos y trazabilidad de clientes

El sitio ya esta preparado para guardar interacciones con trazabilidad completa usando Supabase.

## Que se guarda

Cuando Supabase este configurado, se almacenara:

- Sesion del visitante.
- Cada mensaje enviado por el cliente.
- Cada respuesta del chatbot.
- Eventos importantes del sitio.
- Formularios enviados.
- Leads detectados desde el chatbot.
- Servicio solicitado.
- Presupuesto mencionado.
- Email o telefono si el cliente lo escribe.
- Transcripcion del chat.
- Idioma, pagina, fecha, hora y navegador.

## Tablas incluidas

El archivo `database-schema.sql` crea estas tablas:

- `chat_sessions`: identifica cada visitante/sesion.
- `chat_messages`: guarda todos los mensajes del chat.
- `leads`: guarda personas interesadas y su solicitud.
- `contact_requests`: guarda formularios enviados.
- `interaction_events`: guarda eventos generales para auditoria.
- `admin_profiles`: usuarios autorizados para entrar al panel.
- `site_content`: textos editables de la pagina.
- `site_assets`: imagenes administrables.
- `admin_audit_log`: cambios hechos desde el panel.
- `lead_summary`: vista resumida de leads con conteo de mensajes.
- `session_timeline`: vista cronologica de cada sesion.

## Crear la base en Supabase

1. Entra a https://supabase.com/
2. Crea un proyecto.
3. Abre `SQL Editor`.
4. Copia y ejecuta todo el contenido de `database-schema.sql`.
5. Ve a `Project Settings` > `API`.
6. Copia estos valores:
   - `Project URL`
   - `anon public key`
7. Abre `script.js` y reemplaza:

```js
const SUPABASE_URL = "";
const SUPABASE_ANON_KEY = "";
```

por tus valores reales:

```js
const SUPABASE_URL = "https://TU-PROYECTO.supabase.co";
const SUPABASE_ANON_KEY = "TU_ANON_PUBLIC_KEY";
```

## Donde ver la informacion

En Supabase:

1. Abre tu proyecto.
2. Ve a `Table Editor`.
3. Revisa:
   - `leads` para ver personas interesadas.
   - `contact_requests` para formularios.
   - `chat_messages` para conversaciones.
   - `chat_sessions` para sesiones.
   - `interaction_events` para auditoria general.
   - `lead_summary` para ver oportunidades comerciales resumidas.
   - `session_timeline` para ver la historia completa de cada visitante.

## Panel administrativo

El panel esta en:

```text
admin.html
```

Lee tambien:

```text
README_PANEL_ADMIN.md
```

## Correo de cliente interesado

El chatbot envia un correo por EmailJS cuando detecta frases como:

- "quiero cotizar"
- "necesito una pagina web"
- "estoy interesado"
- "cuanto cuesta"
- "quiero contratar"

El correo incluye:

- Servicio detectado.
- Presupuesto, si el cliente lo menciona.
- Telefono o email, si el cliente lo escribe.
- Urgencia.
- Resumen.
- Transcripcion completa del chat.

## Nota de seguridad

La `anon public key` de Supabase se puede usar en frontend si las politicas RLS estan bien configuradas. Este esquema permite insertar datos publicamente, pero solo usuarios autenticados dentro de Supabase pueden leerlos.
