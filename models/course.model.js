const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    codeID: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Course', courseSchema);

