const mongoose = require('mongoose');
const { Schema } = mongoose;

const Author = new Schema({
  name: String,
  age: Number,
});

export default mongoose.model('Author', Author);
