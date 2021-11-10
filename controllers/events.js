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

const updateEvent = async(req, res=response) => {
    
    const eventId = req.params.id;

    try {
        // verificar si eventId esta en la BBDD
        const event =  await Event.findById(eventId);
        const uid = req.uid;

        if(!event) {
            res.status(404).json({
                ok: false,
                msg: "Event was not found",
            });
        };

         // El evento solo lo puede modificar la persona que lo crea
        if(event.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: "You are not allowed to edit this event"
            });
        };

        const newEvent = {
            ...req.body,
            user: uid
        };

        const updatedEvent = await Event.findByIdAndUpdate(eventId, newEvent, {new: true});
        res.json({
            ok: true,
            msg: "Event updated",
            event: updatedEvent, 
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "An error has ocurred"
        });
    };
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
