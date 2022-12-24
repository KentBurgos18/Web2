const express = require("express");


const cors = require('cors');


const app = express();
const Tutor = require('./models/Tutor');



app.use(express.json());
app.use(cors());





app.get("/api/v2/tutor", async (req,res)=>{
    const tutor = await Tutor.find();
    return res.send(tutor);
})

app.post("/api/v2/tutor", async (req,res)=>{
    const { nombre, identificacion, experticia } =  req.body;
    
    const tutor = new Tutor({ nombre, identificacion, experticia})

    await tutor.save()
  
    res.status(201).json(tutor);
})

app.put("/api/v2/tutor/:id", async (req,res)=>{
    const {id} = req.params;
    const {...data } =  req.body;
    console.log(id,data)
    const updatedtutor =  await Tutor.findByIdAndUpdate(id,data )
    res.json(updatedtutor);
})

app.delete("/api/v2/tutor/:id", async (req,res)=>{
    const {id} = req.params;
    await Tutor.findByIdAndDelete(id)
    res.json(`Se ha eliminado el tutor`);
})




module.exports= app;