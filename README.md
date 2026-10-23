# Cuyum Rummy

Juego de cartas Rummy para jugar contra 1, 2 o 3 bots desde el celular. Un mazo de póker con 2 jokers, mezclado en cada mano. Gana el primero que llega a 1000 puntos.

## Cómo abrirlo

Se abre con un link, sin instalar nada ni crear cuentas:

1. Abrí el link del juego en Chrome (o Safari en iPhone).
2. Tocá **Jugar** y elegí contra cuántos rivales.
3. Para tenerlo como app: en Chrome, menú de tres puntos > **Agregar a pantalla de inicio**. En iPhone, botón Compartir > **Agregar a inicio**.

Las reglas completas, con los puntos de cada carta y cómo se suman las manos, están en el botón **Reglas** del menú.

## Resumen de reglas

- Cada uno recibe 11 cartas. En tu turno robás del mazo o te llevás todo el pozo, y después tirás una carta.
- Juegos: pierna (mismo número, palos distintos, 3 o 4 cartas) o escalera (mismo palo, seguidas).
- Los 2 y los jokers son monos: reemplazan cualquier carta. Hacen falta 2 cartas naturales y no más monos que naturales.
- Solo se puede sumar cartas a tus propios juegos bajados.
- Cortar de abajo da +25. Cortar de arriba da +100: no bajaste nada antes, así que tenés que tener todos tus grupos armados y válidos y bajarlos juntos en el mismo turno, con la última carta cortando.

## Para quien publica el juego

El juego es un solo archivo.

- **GitHub Pages:** Settings > Pages > rama `main`, carpeta `/docs`. En cuentas gratis el repositorio tiene que ser público.
- **Netlify:** app.netlify.com/drop, arrastrar `www/index.html`.
- **Cloudflare Pages:** Create > Pages > Upload assets.

Si se cambia el juego, hay que copiar `www/index.html` a `docs/index.html`.

El APK de Android se compila con la Action `.github/workflows/android.yml` (pestaña **Actions** > "Compilar APK"). Hay que permitir "instalar apps desconocidas" para instalarlo.

## El nombre

Cuyum toma su nombre de una palabra que algunos estudiosos atribuyen a los huarpes, pueblo originario de Cuyo, y que suele traducirse como tierra arenosa. Su origen exacto se discute.

## Créditos

Las cartas son el mazo de dominio público (CC0) de AustinGabriel. Las fuentes son Press Start 2P y VT323 (SIL Open Font License). La mezcla usa Fisher-Yates con números aleatorios del navegador.
