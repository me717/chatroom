var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        index: {
            unique: true
        }
    },
    password: String
});

module.exports = mongoose.model('User', UserSchema);