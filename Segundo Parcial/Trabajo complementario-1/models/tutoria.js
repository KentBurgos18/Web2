const { model, Schema } = require('mongoose');

const TutoriaSchema = Schema(   {
    asignatura:{
        type: String,
        required: [ true, 'La asignatura deben ser requeridas '],
       
    },
    numhoras:{
        type: String,
        required: [ true, 'El numhoras  deben ser requeridos'],
    },
    fecha:{
        type: String,
        required: [ true, 'La  fecha deben ser requeridos'],
    },
    hora:{
        type: String,
        required: [ true, 'La hora deben ser requeridos'],
    },
}
);

module.exports = model('Tutoria', TutoriaSchema );
