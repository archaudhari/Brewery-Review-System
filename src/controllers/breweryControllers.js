const axios = require('axios');

const breweryController = {
  searchBreweries: async (req, res) => {
    try {
      const { query, type } = req.query;
      const response = await axios.get(`https://api.openbrewerydb.org/breweries?${type}=${query}`);
      const breweries = response.data;
      res.status(200).json(breweries);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  getBreweryById: async (req, res) => {
    try {
      const { id } = req.params;
      const response = await axios.get(`https://api.openbrewerydb.org/breweries/${id}`);
      const brewery = response.data;
      res.status(200).json(brewery);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};

module.exports = breweryController;
