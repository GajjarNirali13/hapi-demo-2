const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;


const bookSchema = new Schema({
    name: { type: String, required: true, unique: true },
    author: { type: String, required: true }
});


module.exports = Mongoose.model('Book', bookSchema);