/**
 * ------------------Ejercicio Reponse y Request Parte 1-----------
 * Este ejercicio esta enfocado en analizar el tipo de contenido de respuesta
 */
const http = require('http')


//REQUIRE - Todo lo que el usuario solicita  
//RESPONSE - Todo lo que el usuario responde
http.createServer((req,res) => {

    console.log(req); //cada vez que accedamos al puerto 8080 va imprimir en consola el request
    /**
     * Para analizar todo lo que es el REQUEST si se examina la consola integrada
     * se recibe mucha información pero nos podemos enfocar en lo siguiente por ejemplo:
     * rawHeaders: {} tiene información de lugar de donde se estas llamando la petición
     * en connection: 'keep-alive' esta esperando que alla un response una repuesta y
     * mantien la cominicación abierta hasta que nuestro backend envie un respuesta.
     * otra información que podemos encontrar es la url y el method que este caso es
     * una petición GET, saber el tipo de petición es muy importante y se tratarán
     * más adelante.
     * 
     * Analizar el navegador esta dirección URL  http://127.0.0.1:8080/hola-mundo
     * 
     */

    res.writeHead(200, {'Content-Type': 'application/json'})
    /**
     * En esta parte estoy enviado una respuesta 200, que significa que todo esta bien
     * se puede envar una respueta 404 para una petición fallida
     * res.writeHead(404)
     * res.write('404 | Page not found');
     * res.end();
     * 
     * Recargar la página y visiar las herramientas de desarrollador, ir a Network y 
     * evaluar los Headers
     */

    const persona = {
        id: 1,
        nombre: 'Johny'
    }


    res.write(JSON.stringify(persona)); 
    /**
     * Se envia un objeto tipo JSON porque sin formato da error 
     * a esto se le llama serializar el objeto con un formato tipo JSON
     * Para poder visualizar de mejor forma en el navegador se puede instalar 
     * la extensión de Chrome buscar "JSON Viewer Pro"
     */
    res.end();
})
.listen(8080)

console.log('Escuchando el puerto', 8080);

/**
 * Para este ejercicio instalar POSTMAN y pegar la url o tambien puede utilziar 
 * Thunder Client en Visual Studio Code para hacer sus pruebas 
 * Ir en su herramienta de pruebas de rutas ir agregar en headers lo siguiente: 
 * en la key: hola      value: mundo
 * y examinar la impresión del response en consola. estos envíos son importantes
 * porque podemos enviar por ejemplo tokens y el backend los recibe y luego 
 * los puede procesar. 
 * 
 */