# Base de datos para interacciones del chatbot

El sitio ya guarda interacciones en dos niveles:

1. Respaldo local en el navegador con `localStorage`.
2. Base de datos central con Supabase cuando configures las credenciales.

## Crear la base en Supabase

1. Entra a https://supabase.com/
2. Crea un proyecto.
3. Abre `SQL Editor`.
4. Copia y ejecuta el contenido de `database-schema.sql`.
5. Ve a `Project Settings` > `API`.
6. Copia:
   - `Project URL`
   - `anon public key`
7. Abre `script.js` y reemplaza:

```js
const SUPABASE_URL = "";
const SUPABASE_ANON_KEY = "";
```

por tus valores reales.

## Que se guarda

- Mensajes del cliente.
- Respuestas del bot.
- Servicio detectado.
- Presupuesto si el cliente lo menciona.
- Email o telefono si el cliente lo escribe.
- Pagina donde ocurrio la conversacion.
- Idioma.
- Fecha y hora.

## Correo de cliente interesado

Cuando el chatbot detecta frases como:

- "quiero cotizar"
- "necesito una pagina web"
- "estoy interesado"
- "cuanto cuesta"
- "quiero contratar"

envia un correo usando EmailJS con el resumen de la solicitud y la transcripcion del chat.

Para que el correo funcione, revisa en EmailJS que la plantilla `template_x8m5dos` incluya estas variables:

```text
{{name}}
{{email}}
{{phone}}
{{service}}
{{budget}}
{{message}}
```

