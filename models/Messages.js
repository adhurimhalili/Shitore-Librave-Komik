const mongoose = require('mongoose');

const MessagesSchema = mongoose.Schema({
    name: String,
    email:String,
    description:String,
    updated_date: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Messages', MessagesSchema);