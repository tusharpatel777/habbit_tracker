// // backend/models/Habit.js
// const mongoose = require('mongoose');

// const HabitSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'Please add a habit name'],
//     trim: true,
//     maxlength: [50, 'Name can not be more than 50 characters'],
//   },
//   streak: {
//     type: Number,
//     default: 0,
//   },
//   lastCompleted: {
//     type: Date, // Store date as a Date object
//     default: null, // Initially null
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// module.exports = mongoose.model('Habit', HabitSchema);
// backend/models/Habit.js
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
  user: { // <--- NEW FIELD: Link to User
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true, // A habit MUST belong to a user
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Habit', HabitSchema);