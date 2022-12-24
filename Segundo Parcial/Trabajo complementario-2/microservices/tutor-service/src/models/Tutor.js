const { model, Schema } = require('mongoose');

const TutorSchema = Schema(   {
    nombre:{
        type: String,
        required: [ true, 'El nombre deben ser requerida'],
       
    },
    identificacion:{
        type: String,
        required: [ true, 'La identificacion deben ser requeridas'],
    },
    experticia:{
        type: String,
        required: [ true, 'La experticia deben ser requeridas'],
    }
}
);

module.exports = model('Tutor', TutorSchema );
