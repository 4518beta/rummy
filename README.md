# Rummy Mendocino

Rummy como se juega en Mendoza. App Android (APK) con mesa familiar por WiFi.

## 0. La forma fácil

Hacé doble clic en `Jugar Rummy.bat` (necesita [Node.js](https://nodejs.org) instalado). Muestra una dirección como `http://192.168.1.20:3000`: abrila en el navegador de cada celular conectado al mismo WiFi y ya se juega. En Chrome, menú de tres puntos > Agregar a pantalla de inicio, y queda con ícono.

## Sin compu ni servidor: un celular hace de anfitrión

El juego es un solo archivo, `www/index.html`. Se puede subir a cualquier hosting gratis de páginas estáticas, o instalar como APK, y no necesita servidor:

1. Uno abre el juego, escribe su nombre y toca **Crear mesa nueva**. Aparece un código de 5 letras (también está en Jugar > Local, con el botón Compartir).
2. Los demás abren el mismo juego, escriben su nombre, ponen el código y tocan **Unirme**. Si usan el link que arma el botón Compartir, entran solos.
3. Funciona desde casas distintas, con WiFi o datos. Es conexión directa entre celulares (WebRTC con PeerJS), no hace falta ninguna cuenta.

Lo que hay que saber:
- El anfitrión tiene que dejar el juego abierto y la pantalla prendida. Si cierra la app, la mesa se corta. Si vuelve a entrar y toca Crear mesa, recupera el mismo código y la partida guardada.
- Hace falta internet para conectarse (el primer contacto pasa por el servicio gratuito de PeerJS).
- Si una red muy restringida bloquea la conexión directa, probar con datos móviles.

### Dónde subir el archivo (gratis)

- **Netlify**: app.netlify.com/drop, arrastrás `index.html` y te da un link https.
- **Cloudflare Pages**: Workers & Pages > Create > Pages > Upload assets.
- **GitHub Pages**: Settings > Pages del repositorio. En cuentas gratis el repositorio tiene que ser público.
- Los "website builders" tipo Wix o Google Sites solo sirven si permiten pegar código HTML completo; muchas veces lo meten en un recuadro que limita funciones. Netlify o Cloudflare son más simples.

## Opcional: servidor propio en la casa

Necesita Node 18 o más nuevo.

    cd server
    npm install
    node server.js

Te muestra las direcciones, por ejemplo `http://192.168.1.20:3000`. Si abrís esa dirección en el navegador de cualquier celular de la casa, ya se puede jugar sin instalar nada.
En Windows, si el firewall pregunta, permití el acceso en redes privadas.

## 2. Compilar el APK (lo hace GitHub)

1. El flujo de compilación ya está en `.github/workflows/android.yml`.

   Este repositorio ya está subido. Para actualizarlo:

        git init
        git add .
        git commit -m "Rummy Mendocino"
        git branch -M main
        git remote add origin https://github.com/TU_USUARIO/rummy-mendocino.git
        git push -u origin main

2. En GitHub entrá a **Actions**, elegí "Compilar APK" y esperá unos 5 minutos.
3. Abrí la ejecución terminada y bajá el archivo `rummy-mendocino-apk` (viene en un zip con `app-debug.apk`).
4. Pasalo al celular e instalalo (hay que permitir "instalar apps desconocidas").

## 3. Jugar en familia

1. Todos en el mismo WiFi que la compu del servidor.
2. En la app: nombre y, abajo, "Usar un servidor propio" con la dirección (solo `192.168.1.20:3000`).
3. Jugar > Local (familia). Uno crea el grupo, los demás se unen, uno abre la mesa, todos tocan Sentarme y se reparte.

El punto verde arriba a la derecha indica que hay conexión. "Jugar sin conexión" permite jugar contra bots sin servidor.

## Notas

- El APK es de depuración (firmado con la clave de debug). Sirve para instalar en familia.
- Los datos de la mesa se guardan en `server/data.json`.
- Las cartas son el mazo CC0 de AustinGabriel.
