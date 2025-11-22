const express = require('express');
const cors = require('cors');
const env = require('./config/env');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());  
app.use(express.json());
app.use(cookieParser()); 
 
// Routes
app.use('/api/habits', require('./routes/habits'));
app.use('/api/ai', require('./routes/ai'));
app.use('/api/auth', require('./routes/auth')); 
  

app.get('/', (req, res) => {
  res.send('Habit Tracker API is running with MongoDB, AI, and Auth');
});

app.listen(env.PORT, () => {
  console.log(`Server running on port ${env.PORT}`);
});