/**
-----------Ejercicio - Mejorando el código-----------
* Se agregó un callback para que agregará el mensaje en consola de escuchando puerto 
* para eso se agregó la variable port = 8080
* Se cambiaron las funciones de las rutas, por funciones tipo flecha.
*/

const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo en su respectiva ruta');
});

app.get('*', (req, res) => {
    res.send('404 | Page not found');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

/**
* Al ejecutar esta aplicación probar las siguientes rutas válidas 
* http://localhost:8080
* http://localhost:8080/hola-mundo
*
* Luego probar una ruta inválida por ejemplo 
* http://localhost:8080/nueva-ruta
*/
