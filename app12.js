// ----------------Ejercicio - Utilizar Hadebars----------------
// El sitio web con el que se encuentra actualmente es totalmente estático, es decir que
// si queremos modificar ciertas cosas, nosotros tenemos que modificar directamente
// el código del HTML. Si queremos volver este sitio web semidinámico se puede aplicar
// el paquete llamado HANDLEBARS un paquete de terceros en NPM y una librería que sirve para
// poder renderizar el sitio web y enviárselo de esa forma al cliente.
// Te recomiendo utilizar Handlebars para sitios webs sencillos, para sitios 
// complejos se recomienda utilizar Frameworks completos como Angular, Vue, React

// Buscan en la página de NPM el paquete handlebars o visitar el sitio
// https://www.npmjs.com/package/handlebars
// Para instalar el paquete utilizas o tienes que buscar la instalación hbs
// específicamente para express verificar el código en GITHUB

// npm install hbs
// 
// Mi objetivo es que me pre-rendericen las páginas con hbs y enviárselas al cliente
// un sitio web totalmente renderizado, esto me ayuda a poder por ejemplo
// utilizar código como por ejemplo el de la barra de opciones y otras 
// partes de las páginas web a nivel de vistas
//
// Tenemos que tener en cuenta cosas que no vamos a renderizar como por ejemplo
// los assets como CSS, fonts, y JS y las imágenes.
// El objetivo de hbs es también separar el modelo, la vista y el controlador
// que decimos aplicar el famoso MVC
const express = require('express')
const app = express()
const port = 8080
/**
 * -------Instrucciones para crear todo este ejercicio--------
 * 1.- Crear carpeta public3 en la raíz, crear una subcarpeta llamada template
 * 2.- Cortar todo lo que escribas del sitio web y pasarlos a la carpeta template
 * como backup del sitio, se necesitarán para tomar el código HTML
 * 3.- Utilizar en este código el template engine que es agregar al código de esta
 * app la línea app.set('view engine', 'hbs')
 * 4.- Crear en la raíz la carpeta views, dentro de esta carpeta crear home.hbs
 * 5.- Copiar todo el contenido del index.html y pegarlo en home.hbs, con esto ya
 * poseen la capacidad de reutilizar el código como los headers, el menu (nav)
 * o el footer
 * 6.- Modificar el home.hbs en sus links principales para no utilizar .html
 */

// Utilización de hbs para el renderizado de la página web
app.set('view engine', 'hbs')

/**
 * Este archivo necesita crear la carpeta public3, todos los archivos del template
 * se trasladarán a la carpeta de template para hacer un backup
 * //Al momento de compilar el trabajo de hbs (handlebars) para renderizar el sitio semi estático
 * //El hbs me da la capacidad de reutilizar código
 */

// Servir contenido estático public3 donde está el templated
app.use(express.static('public3'))

// Controlador de la ruta principal
app.get('/', (req, res) => {
    res.render('home')
})
app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public3/generic.html')
})

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public3/elements.html')
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})

/**
 * Para ejecutar esta aplicación se tiene que utilizar    node app12.js
 * En este momento ya tenemos renderizado la homepage pero aún no hemos
 * renderizado las demás partes de la página es decir sus opciones de
 * elementos y generic.
 * Visitar el sitio web http://localhost:8080
 * El beneficio en este punto, es que ya podemos tener la capacidad de
 * reutilizar código.
 */
