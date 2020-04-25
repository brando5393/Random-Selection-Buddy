const mongoose = require('mongoose');
const Selections = require('./Selections');
const CategoriesSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Categories must have a name"]
    },
    description: {
        type: String
    },
    selections: [Selections]
});

const Categories = mongoose.model('Categories', CategoriesSchema);