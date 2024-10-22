/**
-----------Ejercicio - Servir un sitio web completo - Parte 2-----------
* Una vez implementada nuestra plantilla, analizamos varias cosas que suceden 
* en este ejemplo una de ellas es que al momento de ejecutar la aplicación y visitar 
* sitio web sí se despliega pero al momento de ver las otras opciones como 
* http://localhost:8080/generic o http://localhost:8080/elements el webserver 
* no encuentra el recurso para esto hay que configurar cada ruta.
*/

const express = require('express');
const app = express();
const port = 8080;

// Servir contenido estático public2 donde está el templated
app.use(express.static('public2')) // No hay necesidad de configurar el homepage

// Habilitamos la ruta generic http://localhost:8080/generic
app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public2/generic.html');
});

// Habilitamos la ruta elements http://localhost:8080/elements
app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public2/elements.html');
});

// Habilitamos cualquier ruta inválida para que despliegue una página de error
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

/**
* Ejecutar esta aplicación con      node app11.js
* Acá es necesario probar todas las rutas válidas y una ruta inválida 
* http://localhost:8080
* http://localhost:8080/generic
* http://localhost:8080/elements
*
* ¿Cómo es la estructura de estas rutas cuando visitas la homepage y luego desde 
allí visitas las opciones y regresas a la homepage, dar un recorrido completo por 
todo el sitio, analiza técnicamente qué está pasando?
*/
