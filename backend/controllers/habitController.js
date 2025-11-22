// backend/controllers/habitController.js
const Habit = require('../models/Habit');

// @desc    Get all habits for the authenticated user
// @route   GET /api/habits
// @access  Private
exports.getHabits = async (req, res) => {
  try {
    // Only fetch habits belonging to the logged-in user (req.user.id is set by protect middleware)
    const habits = await Habit.find({ user: req.user.id });
    res.status(200).json({ success: true, count: habits.length, data: habits });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Server Error fetching habits' });
  }
};

// @desc    Create new habit for the authenticated user
// @route   POST /api/habits
// @access  Private
exports.createHabit = async (req, res) => {
  try {
    // Add the user ID from the authenticated request to the habit object
    req.body.user = req.user.id;
    const habit = await Habit.create(req.body);
    res.status(201).json({ success: true, data: habit });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);
      return res.status(400).json({ success: false, error: messages });
    } else {
      console.error(err);
      res.status(500).json({ success: false, error: 'Server Error creating habit' });
    }
  }
};

// @desc    Mark habit as completed (update streak and lastCompleted)
// @route   PATCH /api/habits/:id/complete
// @access  Private
exports.completeHabit = async (req, res) => {
  try {
    // Find habit by ID AND ensure it belongs to the authenticated user
    const habit = await Habit.findOne({ _id: req.params.id, user: req.user.id });

    if (!habit) {
      return res.status(404).json({ success: false, error: 'Habit not found or not owned by user' });
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let lastCompletedDate = null;
    if (habit.lastCompleted) {
      lastCompletedDate = new Date(habit.lastCompleted);
      lastCompletedDate.setHours(0, 0, 0, 0);
    }

    if (lastCompletedDate && lastCompletedDate.getTime() === today.getTime()) {
      return res.status(400).json({ success: false, error: 'Habit already completed today' });
    }

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    yesterday.setHours(0, 0, 0, 0);

    if (lastCompletedDate && lastCompletedDate.getTime() === yesterday.getTime()) {
      habit.streak += 1;
    } else {
      habit.streak = 1;
    }

    habit.lastCompleted = Date.now();

    await habit.save();

    res.status(200).json({ success: true, data: habit });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Server Error completing habit' });
  }
};

// @desc    Delete habit
// @route   DELETE /api/habits/:id
// @access  Private
exports.deleteHabit = async (req, res) => {
  try {
    // Find habit by ID AND ensure it belongs to the authenticated user
    const habit = await Habit.findOne({ _id: req.params.id, user: req.user.id });

    if (!habit) {
      return res.status(404).json({ success: false, error: 'Habit not found or not owned by user' });
    }

    await habit.remove(); // Mongoose 6+ users might prefer deleteOne or findByIdAndDelete

    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Server Error deleting habit' });
  }
};