const Brewery = require('../models/Brewery'); // assuming you have a Brewery model

const reviewController = {
  addReview: async (req, res) => {
    try {
      const { breweryId, rating, description } = req.body;
      const newReview = { rating, description };
      
      // Assuming you have a Brewery model with a reviews field
      const brewery = await Brewery.findByIdAndUpdate(
        breweryId,
        { $push: { reviews: newReview } },
        { new: true }
      );

      res.status(201).json({ message: 'Review added successfully', brewery });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};

module.exports = reviewController;
