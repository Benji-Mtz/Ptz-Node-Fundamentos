# Bases Nodejs

## Event loop

Es un proceso con un bucle que gestiona, de forma asíncrona, todolo los eventos de la aplicación.

![Descripción de la imagen](https://media.geeksforgeeks.org/wp-content/uploads/20200224050909/nodejs2.png)

Node permite ejecutar tareas de manera paralela o asincrona creando un hilo nuevo por cada tarea del Pool.

## Variables de entorno

```js

let nombre = process.env.NOMBRE || "No hay nombre";

console.log(`Hola ${nombre}`);
```
En este caso necesitariamos por ejemplo escribir en el terminal algo como esto en linux:

``NOMBRE=Benji node 02-entorno.js``

o `set NOMBRE=Benji` en windows

Por buenas practicas se suele usar la variable de entorno en mayuscula o snake_case por ejemplo

`NOMBRE` o `DB_NAME`

## Algunas herramientas de node

Demon: Proceso en caliente para obervar cambios por ejemplo `nodemon` se instala como dependencia de desarrollo como:

`npm install -D nodemon` o `npm install --save-dev nodemon`

previamente se puede crear un `package.json` para crear un script de ejecución con:

`npm init --yes`

y Podemos crear el comando de ejecución el el archivo `package.json`

```json

{
  "name": "01-basesnode",
  "version": "1.0.0",
  "description": "Es un proceso con un bucle que gestiona, de forma asíncrona, todolo los eventos de la aplicación.",
  "main": "01-monohilo.js",
  "scripts": {
    "dev": "nodemon 02-entorno.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

Ejecutamos ahora en terminal `npm run dev`

PM2: Es un manejador de procesos en node sobre todo para aplicaciones en producción y lo instalamos como:

`npm install pm2@latest -g`

Lo ejecutamos como `PM2 start 02-entorno.js`

Para ver el status `PM2 status`

Para ver los logs `PM2 logs`

Para detener la app puede ser con `PM2 stop id` es decir `PM2 stop 0`