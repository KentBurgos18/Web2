//Creacion de arreglo tutorado con sus objetos
const tutorado = [
{
   idTutorado: 1,
   nombre: "Jose Bautista",
   identificacion: "1250354010" 

},

{
   idTutorado: 2,
   nombre: "Ignacio Valverde",
   identificacion: "1250354011" 

},

{
   idTutorado: 3,
   nombre: "Francisco Vaca",
   identificacion: "1250354012" 

},

{
   idTutorado: 4,
   nombre: "Ricardo Gonzales",
   identificacion: "1250354013" 

},

{
   idTutorado: 5,
   nombre: "Bryan Anchundia",
   identificacion: "1250354014" 

}


];




  const muestraTutorados = (tutorado)=>{
      let contador = 0;
  console.log("Mostrando tutorados");
    //Bucle que permita mostrar los objetos del arreglo tutorado
   do
   {
       console.log(tutorado[contador])
       contador++;
   }while(contador < tutorado.length);




  }


muestraTutorados(tutorado);




