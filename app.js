/**
 * -------Ejercicio de inicio del proyecto - Webserver----------
 */
const http = require('http') //Paquete interno HTTP

/**
 * Este módulo va enfocado en crear nuestro primer Web server, que van enfocados
 * en manterner contenido en HTML, JAVASCRIPT, CSS u otros recursos.
 * Acá realizaremos un despliegue semi dinámico donde desplegaremos un 
 * renderizado de un página web al cliente por medio del BackEnd
 * esta aplicación tendrá rutas, despligue del sistio web, subir esta aplicación 
 * en producción para que sea visible en cualquier sitio. 
 * El sertivdor Web nos va a mostrar contenido por mediod el protocolo HTTP
 * Con este módulo se puede obtener el producto final de Angular, Viu etc, y
 * colocarlo acá en este WebServer y desplegarlo en cualquier sitio de producción.
 * Primero utilizaremos el paquete interno HTTP de node y luego se utilizará
 * un FrameWork llamado EXPRESS que es de los más potentes actualmente en el
 * mercado.
 * 
 */

/**
 * Pasos iniciales para este PROYECTO
 * 1) Crear el directorio para el proyecto en este caso para ustedes será el 
 * 05-webserver.
 * 2) Abrir la carpeta desde VS Code, y abrir la terminal de la consola
 * 3) Estar ubicado en la consola en la carpeta 05-webserver
 * 4) Escribir el comando    npm init -y   para iniciar el proyecto
 * 5)¿Qué hay de nuevo en su direcctorio, pregunta para responder en el video?
 * 
 * 
 */


/**
 * ----------------REQUEST Y REPONSE--------------------
 * La creación del servidor web se hace teniendo habilitado el paquete interno de 
 * NodeJS llamado HTTP, una vez halitado se crea una objeto tipo HTTP y se utiliza 
 * el métdodo createServer, que acepta dos pará metros que son tracionalmente llamados 
 * request y response (req, res)
 * REQUEST Siver para obtener todos los requerimientos del cliente (solicitud al webserver)
 * REPONSE Sirve para manejar todas las respuestas que le daremos al cliente
 *
 *
 */
http.createServer((req,res) => {

    res.write('Hola Mundo'); //Escibe una respuesta en la página web de respuesta
    res.end(); //Se le indica al servidor que finalizo el enviar la respuesta
})
.listen(8080) //La aplicación correrá en el puerto 8080.  http://127.0.0.1:8080
//localhost:8080

console.log('Escuchando el puerto', 8080);

/**
 * Para ejecutar la aplicación utilizar nodemon app o node app , luego se abre el
 * navegador para verificar con la dirección localhost:8080
 * Evaluar las herramientas de desarrollado la parte de Network-->Headers
 * (Recargar página para examinarpara ver los elementos )
 * En el análisis no se sabe por ejemplo si el documento desplegado es un HTML
 * como el navegador web no sabe que es específicamente no se sabe 
 * aún como poder renderizarlo
 */

//request--respons linea 46