const mongoose = require('mongoose');
const { Schema } = mongoose;

const Book = new Schema({
  name: String,
  genre: String,
  authorId: String,
});

export default mongoose.model('Book', Book);
