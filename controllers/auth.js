const express = require('express');
const { Model } = require('../models/users');

const createUser = async(req, res=express.response) => {
    //const {name, email, password} = req.body;
    try {
        const user = new Model(req.body);
        await user.save();
        return res.status(201).json({
            ok: true,
            msg: "registered",  
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: "An error has ocurred",
        });
    };
};

const loginUser = (req, res=express.response) => {
    
    const {email, password} = req.body;
    return res.status(201).json({
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