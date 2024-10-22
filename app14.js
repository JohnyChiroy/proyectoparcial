// ----------------Ejercicio - Usando parciales (partials) en HBS----------------
// Este ejercicio está enfocado en la reutilización de código por medio de
// parciales. En el ejercicio anterior por ejemplo no son funcionales las partes
// de 'generic' y 'elements'.
// 
// -------Pasos para realizar este ejercicio-------
// 1.- crear una carpeta llamada partials dentro de views
// 2.- agregar al código con hbs.RegisterPartials el registro de la carpeta partials
// 3.- dentro del partial llamado header cortar el código del home.hbs
// 4.- cortar el código de home2.hbs de la parte del header y pegarlos en header.hbs
// nota: como modificamos el código de home2.hbs se verá reflejado en home3.hbs
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = 8080

// Utilización de Handlebars hbs para el renderizado de la página web
app.set('view engine', 'hbs')

// Uso de parciales "código que se repite en más de un lugar o páginas web"
hbs.registerPartials(__dirname + '/views/partials')

// Servir contenido estático public3 donde está el templated
app.use(express.static('public3'))
// Enviando objeto a home3.hbs, página renderizada res.render
// Esta página tiene aplicada partials
app.get('/', (req, res) => {
    res.render('home3', {
        nombre: 'Johny Chiroy',
        titulo: 'Curso de Node'
    })
})

// Enviado objeto a generic.hbs, página renderizada res.render
// Esta página tiene aplicada partials
app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Johny Chiroy',
        titulo: 'Curso de Node'
    })
})

// Enviado objeto a elements.hbs, página renderizada res.render
// Esta página tiene aplicada partials
app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Johny Chiroy',
        titulo: 'Curso de Node'
    })
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
