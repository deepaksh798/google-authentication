const mongoose = require('mongoose');

const UserScehma = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    googleId: { type: String, required: true, unique: true },
    picture: { type: String },
}, { timestamps: true });

const UserModel = mongoose.model('GoogleAuth', UserScehma);

module.exports = UserModel;