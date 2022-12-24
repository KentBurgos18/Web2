const { model, Schema } = require('mongoose');

const TutoradoSchema = Schema(   {
    nombre:{
        type: String,
        required: [ true, 'La nombre deben ser requerida'],
       
    },
    identificacion:{
        type: String,
        required: [ true, 'Las identificacion deben ser requeridas'],
    },
}
);

module.exports = model('Tutorado', TutoradoSchema );
