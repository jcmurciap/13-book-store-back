const express = require('express');

const createUser = (req, res=express.response) => {
    
    const {name, email, password} = req.body;
    
    if(name.length < 2) {
        return res.status(400).json({
            ok: false,
            msg: 'name should contain at least two words',
        });
    };
    if(password.length < 5) {
        return res.status(400).json({
            ok: false,
            msg: "Password must be at least 5 characters",
        });
    };

    return res.json({
        ok: true,
        msg: "registered",
        name,
        email,
        password,
    }); 
};

const loginUser = (req, res=express.response) => {
    
    const {email, password} = req.body;
    res.json({
        ok: true,
        msg: 'login',
        email,
        password,
    });
};

const renewToken = (req, res=express.response) => {
    res.json({
        ok: true,
        msg: 'renew'
    });
};

module.exports = {
    createUser,
    loginUser,
    renewToken,
};