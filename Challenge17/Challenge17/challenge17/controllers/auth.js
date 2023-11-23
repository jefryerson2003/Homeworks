const express = require('express');
const { validationResult } = require('express-validator');

const crearUsuario = (req, res = express.response) => {
    const { name, email, password } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.array()
        });
    }

    res.status(200).json({
        ok: true,
        name,
        email,
        password
    });
};

const login = (req, res = express.response) => {
    res.json({
        ok: true,
        message: 'Login'
    });
};

const renewToken = (req, res = express.response) => {
    return res.json({
        ok: true
    });
};

module.exports = {
    crearUsuario,
    login,
    renewToken
};
