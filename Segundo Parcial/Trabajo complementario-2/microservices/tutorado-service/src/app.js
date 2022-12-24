const express = require("express");


const cors = require('cors');


const app = express();
const Tutorado = require('./models/Tutorado');



app.use(express.json());
app.use(cors());





app.get("/api/v2/tutorado", async (req,res)=>{
    const tutorado = await Tutorado.find();
    return res.send(tutorado);
})

app.post("/api/v2/tutorado", async (req,res)=>{
    const { nombre, identificacion} =  req.body;
    
    const tutorado = new Tutorado({ nombre, identificacion})

    await tutorado.save()
  
    res.status(201).json(tutorado);
})


app.put("/api/v2/tutorado/:id", async (req,res)=>{
    const {id} = req.params;
    const {...data } =  req.body;
    console.log(id,data)
    const updatedtutorado =  await Tutorado.findByIdAndUpdate(id,data )
    res.json(updatedtutorado);
})

app.delete("/api/v2/tutorado/:id", async (req,res)=>{
    const {id} = req.params;
    await Tutorado.findByIdAndDelete(id)
    res.json(`Se ha eliminado tutorado`);
})








module.exports= app;