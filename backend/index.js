// backend/server.js
const express = require('express');
const cors = require('cors');
const env = require('./config/env');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser'); // Add this

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies
app.use(cookieParser()); // Add cookie parser middleware

// Routes
app.use('/api/habits', require('./routes/habits'));
app.use('/api/ai', require('./routes/ai'));
app.use('/api/auth', require('./routes/auth')); // Add this line for auth routes
  
// Basic route
app.get('/', (req, res) => {
  res.send('Habit Tracker API is running with MongoDB, AI, and Auth!');
});

// Start the server
app.listen(env.PORT, () => {
  console.log(`Server running on port ${env.PORT}`);
});