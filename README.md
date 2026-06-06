# 🌿 Las 5 Heridas · Vibrando en Dorado

App web del **test de la herida de la infancia**, creada para **Viviana Blasco** — terapeuta en Bioneuroemoción, PNL, Hipnosis y Constelaciones Sistémicas.

La persona responde un cuestionario, descubre cuál es su herida emocional predominante (Rechazo, Abandono, Humillación, Traición o Injusticia), lee su descripción, la máscara que crea y sus fortalezas ocultas, y termina con dos prácticas de contención. Además puede dejar un mensaje de contacto y seguir las redes de Vibrando en Dorado.

> Inspirada en *«Las 5 heridas que impiden ser uno mismo»* de Lise Bourbeau.

---

## ✨ Qué incluye

- **Inicio** — presentación cálida con el logo mandala dorado de la marca.
- **Test** — 50 afirmaciones (10 por herida) que se responden de a una, con barra de progreso y auto-avance.
- **Resultado** — herida predominante, gráfico comparativo de las 5, descripción, la máscara que se crea y las fortalezas ocultas.
- **Dos prácticas** — una **respiración guiada** interactiva (círculo que respira contigo) y un **abrazo de contención** para el niño interior.
- **Las 5 heridas** — sección breve que explica cada una.
- **Contacto** — formulario (nombre + comentario) que llega al email, e íconos a Instagram, Facebook, WhatsApp y TikTok.
- **PWA** — incluye `manifest.webmanifest` e íconos para poder instalarse como app.

---

## 📁 Estructura del proyecto

```
.
├── index.html              # Punto de entrada
├── styles.css              # Estilos (paleta cálida arena + dorado)
├── app.jsx                 # Interfaz y lógica (React, vía Babel en el navegador)
├── data.js                 # Preguntas, contenido de las heridas y datos de contacto
├── manifest.webmanifest    # Datos para instalar como app (PWA)
├── sw.js                   # Service worker (funcionamiento sin conexión)
├── privacidad.html         # Política de privacidad
├── assets/
│   ├── mandala.png         # Logo / mandala dorado (transparente)
│   ├── icon-192.png        # Ícono de la app
│   ├── icon-512.png        # Ícono de la app (alta resolución)
│   └── src-viviana.png     # Foto de Viviana
└── store/                  # Material para la ficha de Google Play
    ├── textos-playstore.md # Título, descripciones y datos de los formularios
    ├── grafico-destacado.png   # Gráfico destacado 1024×500
    └── captura-1..4-*.png      # Capturas de pantalla 1080×1920
```

---

## ▶️ Cómo verla localmente

Abrí `index.html` en cualquier navegador moderno.
La app carga React y Babel desde un CDN, así que **la primera vez necesita conexión a internet**. Después, gracias al service worker (`sw.js`), queda guardada y **funciona sin conexión**.

> Para abrirla con un servidor local (recomendado): `npx serve` en la carpeta del proyecto, y entrá a la URL que muestre.
> El service worker solo se activa sobre **HTTPS** (como GitHub Pages) o en `localhost`.

---

## 📱 Subir a Google Play

1. Publicá la app con GitHub Pages (ver abajo).
2. Entrá a **[PWABuilder.com](https://www.pwabuilder.com)**, pegá la URL pública y generá el paquete **Android (.aab)**.
3. En **Google Play Console** (cuenta de desarrollador, pago único de US$25) creá la app y subí el `.aab`.
4. Completá la ficha con el material de la carpeta `store/` (textos, gráfico destacado y capturas) y el ícono `assets/icon-512.png`.
5. Pegá la URL de la política de privacidad: `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/privacidad.html`

---

## 🚀 Publicar gratis con GitHub Pages

1. Subí todos los archivos a la **raíz** del repositorio (que `index.html` quede en la raíz, no dentro de una subcarpeta).
2. En el repo: **Settings → Pages**.
3. En **Source**, elegí la rama `main` y carpeta `/ (root)`. Guardá.
4. En 1–2 minutos tu app estará en:
   `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`

---

## 📧 Recibir los comentarios en tu email

El formulario usa **[Web3Forms](https://web3forms.com)** (gratis, sin crear cuenta).

1. Entrá a https://web3forms.com y escribí tu email: `biovibconsultorio@gmail.com`
2. Te llega una **Access Key** por correo.
3. Abrí `data.js` y pegala en:
   ```js
   web3formsKey: "TU-CLAVE-ACÁ",
   ```
4. Guardá y subí el cambio. ¡Listo! Los mensajes te llegarán al mail.

> Si dejás `web3formsKey` vacío, el botón funciona en **modo respaldo**: abre la app de correo del visitante con el mensaje listo para enviar.

---

## 🔗 Enlaces y contacto

Todos los datos están centralizados en `data.js` (`window.CONTACTO`), fáciles de editar:

- **Email:** biovibconsultorio@gmail.com
- **WhatsApp:** +54 9 2664 588715
- **Instagram:** [@vibrandoendorado](https://www.instagram.com/vibrandoendorado/)
- **Facebook:** [Vibrando en Dorado](https://www.facebook.com/profile.php?id=61566475604495)
- **TikTok:** [@vibrando_en_dorado](https://www.tiktok.com/@vibrando_en_dorado)

---

## ✏️ Personalizar

| Querés cambiar… | Editá… |
|---|---|
| Las preguntas del test | `window.PREGUNTAS` en `data.js` |
| Los textos de cada herida | `window.HERIDAS` en `data.js` |
| Email, teléfono y redes | `window.CONTACTO` en `data.js` |
| Colores y tipografías | variables `:root` al inicio de `styles.css` |

---

## 📱 Sobre Play Store

Para empaquetarla como app de Play Store conviene dejarla **autocontenida** (fuentes y librerías embebidas, para que funcione sin internet). Es un paso aparte que se puede preparar cuando la app esté aprobada.

---

*Creación de **Viviana Blasco** · Vibrando en Dorado* 🌿
