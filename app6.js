/*
--- Ejercicio manejo de rutas inválidas
*/

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Home Page')
})

app.get('/hola-mundo', function (req, res) {
  res.send('Hola mundo en su respectiva ruta')
})

//Validación para cualquier ruta que no esté definina
//localhost:8080/ruta-no-definida
app.get('*', function (req, res) {
    res.send('404 | Page not found')
    })
    app.listen(8080);
    /*
    * Al ejecutar esta aplicación probar las siguientes rutas válidas
    http://localhost:8080
    http://localhost:8080/hola-mundo
    Luego probar una ruta inválida por ejemplo
    http://localhost:8080/nueva-ruta
    */