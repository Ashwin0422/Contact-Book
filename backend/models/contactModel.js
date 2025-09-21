const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required.'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required.'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address.']
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required.'],
        trim: true
    }
}, {
    timestamps: true 
});

module.exports = mongoose.model('Contact', contactSchema);
