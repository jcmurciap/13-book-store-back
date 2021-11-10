const { response } = require('express');
const { Event } = require('../models/events');

const createEvent = async(req, res=response) => {
    
    const event = new Event(req.body);

    //save in database
    try {
        event.user = req.uid;
        const eventSaved = await event.save();
        res.json({
            ok: true,
            event: eventSaved,
        });
    } catch (error){
        res.status(500).json({
            ok: false,
            msg: "An error has ocurred"
        });
    };
};

const getEvent = async(req, res=response) => {
    
    const event = await Event.find().populate('user', 'name');

    res.json({
        ok: true,
        event,
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
