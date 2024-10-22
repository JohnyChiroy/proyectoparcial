// ----------------Ejercicio - enviando argumentos desde el controlador
// ----------------Instrucciones para realizar este ejercicio
// 1.- crear una copia de home.hbs para home2.hbs
// 2.- en el controlador de la página principal, crear un objeto con las
// propiedades que queremos mostrar, ejemplo: {nombre: "Antonio Escobar", titulo: "Curso de Node"}
// 3.- en el hbs sustituir {{}} las propiedades que queremos desplegar el
// home2.hbs examinarlas en el código

const express = require('express')
const app = express()
const port = 8080

// Utilización de hbs para el renderizado de la página web
app.set('view engine', 'hbs')

// Servir contenido estático public3 donde está el templated
app.use(express.static('public3'))

// Enviando argumentos desde el controlador al template home2 (página renderizada)
app.get('/', (req, res) => {
    res.render('home2', {
        nombre: 'Johny Chiroy',
        titulo: 'Curso de Node'
    })
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
 * Para ejecutar este programa utilizar el comando    node app13.js
 * visitar en el navegador la dirección http://localhost:8080
 * ¿Se desplegó el sitio web con alguna modificación?
 */
