# Publicar la pagina Digital Trust Solutions

Para que cualquier persona pueda abrir la pagina desde otro ordenador, debes subir estos archivos a un servicio de hosting:

- `index.html`
- `styles.css`
- `script.js`
- `logo-digital-trust-solutions.png`
- `hero-technology.png`

## Opcion rapida: Netlify

1. Entra a https://www.netlify.com/
2. Crea una cuenta o inicia sesion.
3. Ve a `Sites`.
4. Elige `Add new site` > `Deploy manually`.
5. Arrastra la carpeta `outputs` completa o el archivo `digital-trust-solutions-site.zip`.
6. Netlify te dara una URL publica como:

```text
https://nombre-del-sitio.netlify.app
```

## Opcion con dominio propio

Si tienes un dominio, puedes conectarlo desde Netlify, Vercel, GitHub Pages o tu hosting. Normalmente debes cambiar los DNS o crear registros `A` / `CNAME`.

## Opcion hosting tradicional o cPanel

1. Entra al panel de tu hosting.
2. Abre `File Manager`.
3. Ve a la carpeta `public_html` o `www`.
4. Sube los archivos de esta carpeta.
5. Asegurate de que `index.html` quede directamente dentro de `public_html`.

Cuando el dominio apunte al hosting, la pagina abrira desde cualquier ordenador.
