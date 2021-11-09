const express = require('express');
const { Model } = require('../models/users');

const createUser = async(req, res=express.response) => {

    const { email } = req.body;
    
    try {
        
        let user = await Model.findOne({email:email});
        
        if (user) {
            return res.status(400).json({
                ok: false,
                msg: 'User already exist',
            });
        };
        
        user = new Model(req.body);
        await user.save();
        return res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,  
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