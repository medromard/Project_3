const mongoose = require('mongoose');


const UserSessionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId
       // default: -1

    },
    timestamp: {
        type: Date,
        default: Date.now()

    },
    isDeleted: {
        type: Boolean,
        default: false
    }





});

module.exports = mongoose.model('userSession', UserSessionSchema);
