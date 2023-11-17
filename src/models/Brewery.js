const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const brewerySchema = new Schema({
  name: { type: String, required: true },
  address: { type: String },
  phone: { type: String },
  website_url: { type: String },
  current_rating: { type: Number, default: 0 },
  state: { type: String },
  city: { type: String },
  reviews: [
    {
      rating: { type: Number, required: true },
      description: { type: String },
    },
  ],
});

const Brewery = mongoose.model('Brewery', brewerySchema);

module.exports = Brewery;
