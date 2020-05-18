const express = require('express'),
    app = express(),
    path = require('path'); // Path es uno de los 34 módulos de Node

// Nos permite ubicar los archivos de la carpeta public (css & img)
// img src="./public/img/imagen.jpg"
app.use(express.static(path.join(__dirname, "/public")));

// Crearemos las rutas de nuestra aplicación
// localhost:8080
app.get('/', (peticion, respuesta)=>{
    respuesta.sendFile(`${__dirname}/views/index.html`);
});

app.get('/aboutme', (peticion, respuesta)=>{
    respuesta.sendFile(`${__dirname}/views/aboutme.html`);
});

app.get('/experience', (peticion, respuesta)=>{
    respuesta.sendFile(`${__dirname}/views/experience.html`);
});

app.get('/education', (peticion, respuesta)=>{
    respuesta.sendFile(`${__dirname}/views/education.html`);
});

app.get('/leng', (peticion, respuesta)=>{
    respuesta.sendFile(`${__dirname}/views/leng.html`);
});

app.get('/aptitud', (peticion, respuesta)=>{
    respuesta.sendFile(`${__dirname}/views/aptitud.html`);
});



app.listen(8080);
console.log('I´m working right! Yeah');
