const {tutoria, tutorado} = require('./arreglo');

//Solucion basica para buscar un elemento en un arreglo de objetos
const resultado = tutoria.find(elemento =>  elemento.idTutorado === 4);
const resultado2 = tutorado.find(elemento => elemento.idTutorado === 4);

//Muestra objeto de la entidad transaccional
console.log("Entidad transaccional");
console.log(resultado);

//Muestra objeto de la entidad relacionada
console.log("Entidad relacionada");
console.log(resultado2);




