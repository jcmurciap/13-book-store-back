const express = require('express');
const { validationResult } = require('express-validator');

const createUser = (req, res=express.response) => {
    
    const {name, email, password} = req.body;
    
    // manejo de errores(el validador puede encontrar n errores al instante) 
    // mientras que si se hacen manualmente tendría que hacer muchos validadores.
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

    return res.status(201).json({
        ok: true,
        msg: "registered",
        name,
        email,
        password,
    }); 
};

const loginUser = (req, res=express.response) => {
    
    const {email, password} = req.body;

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped(),
        });
    };
    return res.status(202).json({
        ok: true,
        msg: 'login',
        email,
        password,
    });
};

const renewToken = (req, res=express.response) => {
    json({
        ok: true,
        msg: 'renew'
    });
};

module.exports = {
    createUser,
    loginUser,
    renewToken,
};