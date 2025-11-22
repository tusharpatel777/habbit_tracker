// backend/routes/habits.js
const express = require('express');
const {
  getHabits,
  createHabit,
  completeHabit,
  deleteHabit,
} = require('../controllers/habitController');
const { protect } = require('../middleware/auth'); // Import protect middleware

const router = express.Router();

// Apply 'protect' middleware to all habit routes
router.route('/')
  .get(protect, getHabits)      // Protected
  .post(protect, createHabit);   // Protected

router.route('/:id/complete')
  .patch(protect, completeHabit); // Protected

router.route('/:id')
  .delete(protect, deleteHabit); // Protected

module.exports = router;