const { response } = require('express');

const createEvent = (req, res=response) => {
    res.json({
        ok: true,
        msg: "createEvent"
    });
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
