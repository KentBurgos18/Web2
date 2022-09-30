//Creacion de arreglo tutorias con sus objetos
const tutoria = [

   {
   	idTutoria: 1,
   	idTutor: 1,
   	idTutorado: 1,
   	asignatura: "Fisica",
   	numeroHoras: 2,
   	fecha: "21/09/2022",
   	hora: "9:07"
   },

   {
   	idTutoria: 2,
   	idTutor: 2,
   	idTutorado: 2,
   	asignatura: "Algebra lineal",
   	numeroHoras: 1,
   	fecha: "22/09/2022",
   	hora: "9:07"
   },

   {
   	idTutoria: 3,
   	idTutor: 3,
   	idTutorado: 3,
   	asignatura: "Calculo de una variable",
   	numeroHoras: 2,
   	fecha: "23/09/2022",
   	hora: "9:07"
   },

   {
   	idTutoria: 4,
   	idTutor: 4,
   	idTutorado: 4,
   	asignatura: "Matematicas discretas",
   	numeroHoras: 1,
   	fecha: "24/09/2022",
   	hora: "9:07"
   },

   {
   	idTutoria: 5,
   	idTutor: 5,
   	idTutorado: 5,
   	asignatura: "Redes de datos",
   	numeroHoras: 2,
   	fecha: "25/09/2022",
   	hora: "9:07"
   }
];

 const muestraTutorias = (tutoria)=>{
 let contador = 0;
  console.log("Mostrando tutorias");
    //Bucle que permita mostrar los objetos del arreglo tutorado
  while (contador < tutoria.length){
          console.log(tutoria[contador])
          contador++; 
} 
}



muestraTutorias(tutoria);


