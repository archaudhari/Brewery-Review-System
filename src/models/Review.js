const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  rating: { type: Number, required: true },
  description: { type: String },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
