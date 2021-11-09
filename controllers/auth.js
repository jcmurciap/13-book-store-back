const express = require('express');
const bcrypt = require('bcryptjs');
const { Model } = require('../models/users');
const { generateJWT } = require('../helpers/jwt');

const createUser = async(req, res=express.response) => {

    const { email, password } = req.body;
    
    try {
        
        let user = await Model.findOne({email:email});
        
        if (user) {
            return res.status(400).json({
                ok: false,
                msg: 'User already exist',
            });
        };
        
        user = new Model(req.body);
        
        // encriptar contraseña
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);
        
        await user.save();
        
        const token = await generateJWT(user.id, user.name);
        
        
        return res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token,  
        });
    
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: "An error has ocurred",
        });
    };
};

const loginUser = async(req, res=express.response) => {
    
    const {email, password} = req.body;
    try {
        
        const user = await Model.findOne({email: email});
        if (!user) {
            return res.status(400).json({
                ok: false,
                msg: 'User does not exist'
            });
        };

        // validate password
        const validPassword = bcrypt.compareSync(password, user.password);
        if(!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Password incorrect',
            });
        };

        const token = await generateJWT(user.id, user.name); 
        
        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token,
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Contact to administrator',            
        });
    };
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