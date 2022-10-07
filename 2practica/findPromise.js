const {tutoria, tutorado} = require('./arreglo');
const dato = 4;

promise1 = (dato) =>{
    return new Promise((res)=>{
    const resultado = tutoria.find(elemento =>  elemento.idTutorado === dato);
     res(resultado);
    });
}


promise2 = (dato) =>{
    return new Promise((res)=>{
    const resultado = tutorado.find(elemento =>  elemento.idTutorado === dato);
     res(resultado);
    });
}


promise1(dato).then((resultado)=>{
    console.log("Entidad transaccional");
    console.log(resultado);
   })


   promise2(dato).then((resultado)=>{
    console.log("Entidad relacionada");
    console.log(resultado);
   })





