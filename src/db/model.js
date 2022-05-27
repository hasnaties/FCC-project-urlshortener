const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    assigned: {
        type: Number,
        required: true,
        unique: true
    },
    url: {
        type: String,
        required: true,
        trim: true
    }
})

const model = mongoose.model('data', schema)

module.exports = model