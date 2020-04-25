const mongoose = require('mongoose');
const SelectionsSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Selections must have a name"]
    },
    description: {
        type: String
    },
});

const Selections = mongoose.model('Selections', SelectionsSchema);