const mongoose = require('mongoose');

const connURL= "mongodb+srv://admin:Pigmen_1@cluster0.eiy3d7l.mongodb.net/test";

(async ()=>{

    try{
        const status = await mongoose.connect(connURL);      
        
         const Tutor = mongoose.model("tutor", {nombre:String, identificacion:String, experticia:String}  );
         const Tutorado = mongoose.model("tutorado", {nombre:String, identificacion:String}  );
         const Tutoria = mongoose.model("tutoria", 
        { 
             idatutor: { type: mongoose.Types.ObjectId , ref:"tutor" } ,
             idatutorado: { type: mongoose.Types.ObjectId , ref:"tutorado" } ,
             asignatura:String, 
             numeroHoras:Number,
             fecha:String,
             hora:String 
            }  
            );
            const tutor1 =  new Tutor({nombre:"Henry", identificacion:"12789999998", experticia:"Experiencia impartiendo clases de matematicas"});
            const saveTutor = await  tutor1.save();
            const tutorado1 =  new Tutorado({nombre:"Juan", identificacion:"122115455663"});
            const saveTutorado = await  tutorado1.save();
            
            
            const tutoria1 =  new Tutoria(
                    {
             idatutor: saveTutor._id,
             idatutorado: saveTutorado._id,
             asignatura:"Calculo de una variable", 
             numeroHoras:1,
             fecha:"22/09/2022",
             hora:"9:07"
                     }
                     );
                    
            const saveTutoria = await tutoria1.save();
            
            modelTutor(Tutor).then((respuesta)=>{
                console.log("Coleccion Tutor");  
                console.log(respuesta);
                })

                modelTutorado(Tutorado).then((respuesta)=>{
                console.log("Coleccion Tutorado"); 
                console.log(respuesta);
                })

                modelTutoria(Tutoria).then((respuesta)=>{
                    console.log("Coleccion Tutoria"); 
                    console.log(respuesta);
                    })
            

    }catch (error){
        console.log(error.message);
    }

})();


const modelTutor = (Tutor)=>{
    let contador = 0
    return new Promise((res)=>{
        do
   {
       res(Tutor.find())
       contador++;
   }while(contador < Tutor.length);
        });
}

const modelTutorado = (Tutorado)=>{
    let contador = 0
    return new Promise((res)=>{
        while (contador < Tutorado.length){
            res(Tutorado.find())
            contador++; 
    } 
        });
    

}


const modelTutoria = (Tutoria)=>{

    return new Promise((res, rej)=>{
        let contador = 0;
        for (contador in Tutoria){
            res(Tutoria.find());
            }
        });

}






    
    



























