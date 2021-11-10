const { response } = require('express');
const { Model } = require('../models/events');

const createEvent = async(req, res=response) => {
    
    const event = new Model(req.body);

    //save in database
    try {
        event.user = req.uid;
        const eventSaved = await event.save();
        res.json({
            ok: true,
            event: eventSaved,
        });
    } catch (error){
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "An error has ocurred"
        });
    };
};

const getEvent = (req, res=response) => {
    res.json({
        ok: true,
        msg: "getEvent"
    });
};

const updateEvent = (req, res=response) => {
    res.json({
        ok: true,
        msg: "updateEvent"
    });
};

const deleteEvent = (req, res=response) => {
    res.json({
        ok: true,
        msg: "deleteEvent"
    });
};

module.exports = {
    createEvent,
    getEvent,
    updateEvent,
    deleteEvent,
};
