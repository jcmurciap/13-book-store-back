const express = require('express');


const createUser = (req, res=express.response) => {
    
    const {name, email, password} = req.body;
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