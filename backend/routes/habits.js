// // backend/routes/habits.js
const express = require('express');
const {
  getHabits,
  createHabit,
  completeHabit,
  deleteHabit,
  updateHabit, // <--- Import new function
} = require('../controllers/habitController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.route('/')
  .get(protect, getHabits)
  .post(protect, createHabit);

router.route('/:id/complete')
  .patch(protect, completeHabit);

router.route('/:id')
  .put(protect, updateHabit) 
  .delete(protect, deleteHabit);

module.exports = router;