const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authMiddleware = require('./middlewares/authMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb+srv://archaudhari:Zxcvbnm1234@cluster0.zjxrs5h.mongodb.net/?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const authRoutes = require('./routes/authRoutes');
const breweryRoutes = require('./routes/breweryRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

// Apply authMiddleware to routes that require authentication
app.use('/api/breweries', authMiddleware);
app.use('/api/reviews', authMiddleware);

app.use('/api/auth', authRoutes);
app.use('/api/breweries', breweryRoutes);
app.use('/api/reviews', reviewRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
