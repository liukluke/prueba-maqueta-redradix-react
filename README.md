# Prueba de maquetación

## Requisitos técnicos

* node > 6 y npm > 3 (https://nodejs.org/en/download/)

¿Cómo sé que versión de node tengo? En consola:

`which node` (para ver si tienes node)

`node -v` (versión de Nodejs)

`npm -v` (Versión de npm)

## Instalación

0.  Para instalar dependencias se puede usar `npm` o bien `yarn`. Para instalar `yarn`:

`npm i -g yarn`

1.  Clonar el repositorio
2.  Instalar dependencias con `npm install`, o solo `yarn` si lo has instalado en el punto 0. Ponte un café. Espera pacientemente. Roma no se construyó en un día.
3.  Ejecutar en consola `npm start` (o `yarn start`), para dejar el SASS en modo watch y levantar el servidor de desarrollo

Importante: los archivos .css dentro de `/styles` están ignorados por git. Si hace falta un CSS estático, meterlo en `public`.

## Notas

Puedes empezar a construir tus componentes en el directorio `src/ui`, o donde tú consideres más adecuado.

En el directorio `src/styles` puedes incluir tus archivos de Sass e importarlos desde `src/styles/styles.scss`. La app recargará automáticamente los cambios que realices en los archivos de Sass.
