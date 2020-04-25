const express = require('express');
const app =  express();
const PORT = process.env.PORT || 3000;
require('dotenv').config();
const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/selectionbuddy";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'));


require("./controllers/controllers.js")(app);

mongoose.connect(MONGODB_URI , { useNewUrlParser: true });

app.listen(PORT, (err) =>{
    if(err) throw err;
    console.log(`Server started on port ${PORT}`);
});

module.exports = app;