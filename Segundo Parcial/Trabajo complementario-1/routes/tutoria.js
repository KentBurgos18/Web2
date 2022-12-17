const { Router } = require('express');
const { check } =  require('express-validator')

const {
    getTutorias, 
    getTutoria,
    createTutoria,
    updateTutoria,
    deleteTutoria
} = require('../controllers/tutoria');

const { validateFields } = require('../middlewares')

const router= Router();

router.get('/', getTutorias );

router.get('/:id',
            [ check('id', 'Este no es un ID de Mongo correcto')
            .isMongoId(), 
            validateFields],
getTutoria );


 router.post('/',
        [ check('asignatura')
        .not()
        .isEmpty().withMessage('no debe estar vacio el campo asignatura'),
        check('numhoras')
        .not()
        .isEmpty().withMessage('No debe estar vacio el campo numhoras técnicos'),
        check('fecha')
        .not()
        .isEmpty().withMessage('No debe estar vacio el campo fecha'),
        check('hora')
        .not()
        .isEmpty().withMessage('No debe estar vacio el campo hora'),
        validateFields],
 createTutoria);


 router.put('/:id',
 [  check('id','Debe ser un id de mongo VALIDO').isMongoId(),
 validateFields],
 updateTutoria);

 router.delete('/:id',
 [  check('id','Debe ser un id de mongo VALIDO').isMongoId(),
 validateFields],
 deleteTutoria);



module.exports = router;