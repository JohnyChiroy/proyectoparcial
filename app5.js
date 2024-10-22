/**
-----------Ejercicio - Introducción a EXPRESS Parte 2-----------
* Acá se valida la ruta http://localhost/hola-mundo
*/

const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Home Page');
    /*
    * Acá se está enviando un mensaje directo, pero podríamos enviar 
    * un sitio web, una opción del Sistema, etc.
    */
});

app.get('/hola-mundo', function (req, res) {
    res.send('Hola mundo en su respectiva ruta');
});

app.listen(8080);

/**
* Al ejecutar esta aplicación comprobar las siguientes rutas en el navegador
* ¿Qué mensajes despliega y por qué?
* Comprobar una ruta no válida y analizar.
*/
