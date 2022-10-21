
const path = require("path");
const express = require("express");
const cors =  require("cors");
//Asignando puerto para servidor http 
const PUERTO = 8080;
//Definiendo las rutas de las vistas
const urlIndex = path.join(__dirname,"./index.html")
const urlTutor = path.join(__dirname,"./tutor.html")
const urlTutorado = path.join(__dirname,"./tutorado.html")
const urlTutoria = path.join(__dirname,"./tutoria.html")

//Servidor express
const server =  express();

server.use(cors()).use(express.json())

//Obteniendo la vista principal 
server.get('/', functionIndex )

//Obteniendo las vistas de las entidades
server.get('/tutor', (req,res)=>{
    res.status(200).sendFile(urlTutor);
})
server.get('/tutorado', (req,res)=>{
    res.status(200).sendFile(urlTutorado);
})
server.get('/tutoria', (req,res)=>{
    res.status(200).sendFile(urlTutoria);
})

//Metodo de vista principal
function functionIndex (req, res){
    res.status(200).sendFile(urlIndex);
}

//Asignando escucha del puerto
server.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo http://localhost:${PUERTO}`);
})





