const express = require('express');
const { validationResult } = require('express-validator');

const validateFields = (req, res=express.response, next) => {

    // validationResult (puede encontrar n errores al instante) 
    // mientras que si se hacen manualmente tendría que hacer muchas validaciones.
    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        return res.status(400).json({
            ok: false,
            
            /**
             * 'mapped' retorna un objeto
             * clave:nombre del campo
             * valor: error de validacion
             */
            errors: errors.mapped(),
        });
    };
    //Se ejecuta si todo el middleware es correcto
    next();
};

module.exports = {
    validateFields,
};
