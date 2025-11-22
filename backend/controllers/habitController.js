const Habit = require('../models/Habit');


exports.getHabits = async (req, res) => {
  try {
    const habits = await Habit.find({ user: req.user.id });
    res.status(200).json({ success: true, count: habits.length, data: habits });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Server Error fetching habits' });
  }
};

exports.createHabit = async (req, res) => {
  try {
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


exports.completeHabit = async (req, res) => {
  try {
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


exports.deleteHabit = async (req, res) => {
  try {
    const habit = await Habit.findOne({ _id: req.params.id, user: req.user.id });

    if (!habit) {
      return res.status(404).json({ success: false, error: 'Habit not found or not owned by user' });
    }

    await habit.remove(); 

    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Server Error deleting habit' });
  }
};

exports.updateHabit = async (req, res) => {
  try {
    const { name } = req.body;

    let habit = await Habit.findOne({ _id: req.params.id, user: req.user.id });

    if (!habit) {
      return res.status(404).json({ success: false, error: 'Habit not found or not owned by user' });
    }

    if (name) {
      habit.name = name;
    }

    await habit.save(); 

    res.status(200).json({ success: true, data: habit });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);
      return res.status(400).json({ success: false, error: messages });
    }
    console.error(err);
    res.status(500).json({ success: false, error: 'Server Error updating habit' });
  }
};