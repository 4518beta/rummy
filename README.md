# Rummy Mendocino

Rummy como se juega en Mendoza. App Android (APK) con mesa familiar por WiFi.

## 0. La forma fácil

Hacé doble clic en `Jugar Rummy.bat` (necesita [Node.js](https://nodejs.org) instalado). Muestra una dirección como `http://192.168.1.20:3000`: abrila en el navegador de cada celular conectado al mismo WiFi y ya se juega. En Chrome, menú de tres puntos > Agregar a pantalla de inicio, y queda con ícono.

## 1. Servidor (una compu de la casa)

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
2. En la app: nombre y dirección del servidor (solo `192.168.1.20:3000`).
3. Jugar > Local (familia). Uno crea el grupo, los demás se unen, uno abre la mesa, todos tocan Sentarme y se reparte.

El punto verde arriba a la derecha indica que hay conexión. "Jugar sin conexión" permite jugar contra bots sin servidor.

## Notas

- El APK es de depuración (firmado con la clave de debug). Sirve para instalar en familia.
- Los datos de la mesa se guardan en `server/data.json`.
- Las cartas son el mazo CC0 de AustinGabriel.
