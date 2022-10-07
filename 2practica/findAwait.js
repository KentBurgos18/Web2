const {tutoria, tutorado} = require('./arreglo');

//Agregando funcion asincrona
const miFuncionAwait = async(tutoria, tutorado)=>{
//Solucion asincronica para buscar un elemento en un arreglo de objetos
const resultado = await tutoria.find(elemento =>  elemento.idTutorado === 4);
const resultado2 = await tutorado.find(elemento => elemento.idTutorado === 4);

//Muestra objeto de la entidad transaccional
console.log("Entidad transaccional");
console.log(resultado);

//Muestra objeto de la entidad relacionada
console.log("Entidad relacionada");
console.log(resultado2);

}


miFuncionAwait(tutoria, tutorado);






