//Creacion de arreglo tutor con sus objetos
const tutor = [
{
idTutor: 1,
nombre: "Jaime Vera",
identificacion: "1367212110",
experticia:"Experiencia impartiendo clases de fisica"
},

{
idTutor: 2,
nombre: "Nicolas Almeida",
identificacion: "1367212111",
experticia:"Experiencia impartiendo clases de algebra lineal"
},

{
idTutor: 3,
nombre: "Milton Pico",
identificacion: "1367212112",
experticia:"Experiencia impartiendo clases de calculo de una variable"
},

{
idTutor: 4,
nombre: "Jaime Vera",
identificacion: "1367212113",
experticia:"Experiencia impartiendo clases de matematicas discretas"
},

{
idTutor: 5,
nombre: "Jaime Vera",
identificacion: "1367212114",
experticia:"Experiencia impartiendo clases de redes de datos"
}

];


    const muestraTutores = (tutor)=>{
     
    console.log("Mostrando tutores");
    //Bucle que permita mostrar los objetos del arreglo tutor
    tutor.forEach((j) => {
        console.log(j);
    });

    }


muestraTutores(tutor);


