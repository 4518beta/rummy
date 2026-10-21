# Rummy Mendocino

Rummy como se juega en Mendoza, para jugar en familia desde el celular. Un mazo de póker con 2 jokers, mezclado en cada mano. Gana el primero que llega a 1000 puntos.

## Cómo abrirlo

Se abre con un link, sin instalar nada. En el celular:

1. Abrí el link del juego en Chrome (o Safari en iPhone).
2. Para tenerlo como app: en Chrome, menú de tres puntos > **Agregar a pantalla de inicio**. En iPhone, botón Compartir > **Agregar a inicio**.
3. Tocá el ícono y listo. No hay cuentas ni contraseñas.

## Jugar solo contra bots

**Jugar** > elegí **1, 2 o 3 rivales**. En la pantalla de conexión que aparece al abrir, tocá **Jugar sin conexión**.

## Jugar en familia

1. Uno toca **Crear mesa nueva** y escribe su nombre. Aparece un código de 5 letras. Ese celular es el anfitrión y tiene que dejar el juego abierto con la pantalla prendida.
2. Los demás abren el mismo link, escriben su nombre, ponen el código y tocan **Unirme**. También sirve el botón **Compartir** que está en Jugar > Local: arma un link que entra directo.
3. Entre todos: **Jugar** > **Local (familia)**. Uno crea el grupo, los demás tocan **Unirme al grupo**.
4. Uno abre la mesa, los demás tocan **Sentarme**, y se reparte con **Repartir**. Hasta 4 jugadores, se pueden sumar bots.

Funciona con WiFi o datos, desde casas distintas. Si el anfitrión cierra el juego, la mesa se corta. Al volver a entrar y tocar **Crear mesa nueva** recupera el mismo código y la partida.

## Cómo se juega

- Cada uno recibe 11 cartas. En tu turno robás del mazo o te llevás todo el pozo, y después tirás una carta.
- Juegos: pierna (mismo número, palos distintos, 3 o 4 cartas) o escalera (mismo palo, seguidas).
- Los 2 y los jokers son monos: reemplazan cualquier carta. Hacen falta 2 cartas naturales y no más monos que naturales.
- Solo se puede sumar cartas a tus propios juegos bajados. Los de los demás se ven tocándolos.
- Cortar de abajo da +25 y cortar de arriba (sin haber bajado nada antes) da +100.
- Las reglas completas están en el botón **Reglas** del menú.

## Para quien publica el juego

El juego es un solo archivo.

- **GitHub Pages:** en el repositorio, Settings > Pages > rama `main`, carpeta `/docs`. El repositorio tiene que ser público en cuentas gratis.
- **Netlify:** app.netlify.com/drop, arrastrar `www/index.html`.
- **Cloudflare Pages:** Create > Pages > Upload assets.

Si se cambia el juego, hay que copiar `www/index.html` a `docs/index.html`.

### Opcional: servidor propio en la casa

Una compu con [Node.js](https://nodejs.org) 18 o más nuevo:

    cd server
    npm install
    node server.js

En Windows alcanza con doble clic en `Jugar Rummy.bat`. Muestra una dirección como `http://192.168.1.20:3000`. En el juego, al abrir, tocá **Usar un servidor propio** y escribí esa dirección. Los datos se guardan en `server/data.json`.

### Opcional: APK de Android

La Action `.github/workflows/android.yml` compila un APK de depuración con Capacitor. En la pestaña **Actions** del repositorio, ejecutá "Compilar APK" y bajá `rummy-mendocino-apk`. Para instalarlo hay que permitir "instalar apps desconocidas".

## Créditos

Las cartas son el mazo de dominio público (CC0) de AustinGabriel. Las fuentes son Press Start 2P y VT323 (SIL Open Font License). La mezcla usa Fisher-Yates con números aleatorios del navegador.
