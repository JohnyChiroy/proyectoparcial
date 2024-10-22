/**
-----------Ejercicio - Sirviendo más de un contenido estático-----------
* Este ejercicio se enfoca en validar contenido estático a servir en el PATH 
* de la carpeta public
*/

const express = require('express');
const app = express();
const port = 8080;

// Servir contenido estático, de la página principal http://localhost:8080
app.use(express.static('public'));

// Para servir en la ruta http://localhost:8080/hola-mundo
app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo en su respectiva ruta');
});

// Para servir en cualquier ruta inválida http://localhost:8080/invalida
// __dirname + path completo o absoluto del recurso a desplegar
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

// Método callback para habilitar el servidor web en el puerto 8080
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

/**
* Al ejecutar esta aplicación es necesario darse cuenta de lo que ha 
* cambiado en el despliegue de recursos según su ruta
*
* Por ejemplo para la petición HTTP del http://localhost:8080 
* el webserver busca en el Middleware enfocado en public y busca automáticamente 
* el archivo index.html
*
* ¿Qué hace el web server con las peticiones http://localhost:8080/hola-mundo y 
* http://localhost:8080/invalida? ¿qué tipo de recurso se responde?
*/
