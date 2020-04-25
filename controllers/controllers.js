const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const db = require("../models");

module.exports = ((app) =>{
    app.get('/', (req, res) => res.sendFile(path.join(__dirname, "../public/views/index.html")));

    app.get('/selection', (req, res) =>{
        db.Categories.find().then((Categories) => res.json(Categories)).catch((err) =>{
            if(err) throw err;
            console.log('db query successful');
        });
    });
});