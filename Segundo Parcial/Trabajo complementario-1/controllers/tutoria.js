const { response, json, request } = require('express');
const Tutoria = require('../models/tutoria');



const getTutorias = async (req, res= response)=>{
        const tutorias =await  Tutoria.find();
        return res.json({tutorias})
}


const getTutoria = async (req=request, res= response)=>{
    const {id} = req.params
    const tutoria =  await Tutoria.findById(id)
    res.json(tutoria);
}

const createTutoria = async(req=request,res=response)=>{
    const { asignatura, numhoras, fecha, hora } =  req.body;
    
    const tutoria = new Tutoria({  asignatura, numhoras, fecha, hora})

    await tutoria.save()
  
    res.status(201).json(tutoria);
}
const updateTutoria = async(req,res =  response)=>{
    const {id} = req.params;
    const {...data } =  req.body;
    console.log(id,data)
    const updatedtutoria =  await Tutoria.findByIdAndUpdate(id,data )
    res.json(updatedtutoria);
}
const deleteTutoria =  async (req, res= response)=>{
    const {id} = req.params;
    await Tutoria.findByIdAndDelete(id)
    res.json(`Se ha eliminado la tutoria`);
}

 module.exports ={
    getTutorias, 
    getTutoria,
    createTutoria,
    updateTutoria,
    deleteTutoria
 }