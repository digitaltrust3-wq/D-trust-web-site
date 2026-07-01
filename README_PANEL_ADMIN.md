# Panel de control

Archivo principal:

```text
admin.html
```

El panel permite:

- Ver resumen de leads, formularios, mensajes y sesiones.
- Ver conversaciones del chatbot.
- Ver personas interesadas.
- Editar textos de la pagina.
- Registrar o subir imagenes.
- Ver una previsualizacion completa del sitio.
- Autorizar hasta 5 usuarios administradores.

## Requisitos

1. Crear proyecto en Supabase.
2. Ejecutar `database-schema.sql`.
3. Pegar credenciales en `config.js`.
4. Crear usuarios en Supabase Auth.
5. Autorizar esos usuarios en `admin_profiles`.

## Configurar Supabase

En `config.js` reemplaza:

```js
window.DTS_CONFIG = {
  SUPABASE_URL: "",
  SUPABASE_ANON_KEY: ""
};
```

por:

```js
window.DTS_CONFIG = {
  SUPABASE_URL: "https://TU-PROYECTO.supabase.co",
  SUPABASE_ANON_KEY: "TU_ANON_PUBLIC_KEY"
};
```

## Crear el primer administrador

1. En Supabase ve a `Authentication` > `Users`.
2. Crea el primer usuario con email y contraseña.
3. Copia su `User UID`.
4. Ejecuta esto en SQL Editor:

```sql
insert into public.admin_profiles (user_id, email, full_name, role, is_active)
values (
  'PEGA_AQUI_EL_USER_UID',
  'tu-correo@ejemplo.com',
  'Administrador principal',
  'owner',
  true
);
```

Despues de eso ya puedes entrar a:

```text
admin.html
```

## Limite de usuarios

La base de datos tiene un trigger que impide tener mas de 5 administradores activos en `admin_profiles`.

## Subir imagenes

Para subir archivos desde el panel:

1. En Supabase ve a `Storage`.
2. Crea un bucket llamado:

```text
site-assets
```

3. Marca el bucket como publico o configura politicas de lectura publica.
4. Desde el panel podras subir imagenes o registrar una URL externa.

## Seguridad

El panel usa Supabase Auth. No uses una contraseña escrita en JavaScript, porque cualquier persona podria verla inspeccionando el codigo. La seguridad real queda en:

- Supabase Auth.
- Tabla `admin_profiles`.
- RLS policies.
- Limite de 5 administradores activos.
