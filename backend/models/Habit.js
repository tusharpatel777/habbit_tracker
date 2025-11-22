const mongoose = require('mongoose');

const HabitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a habit name'],
    trim: true,
    maxlength: [50, 'Name can not be more than 50 characters'],
  },
  streak: {
    type: Number,
    default: 0,
  },
  lastCompleted: {
    type: Date,
    default: null,
  },
  user: { 
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true, 
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Habit', HabitSchema);