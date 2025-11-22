const express = require('express');
const { suggestHabits } = require('../controllers/aiController');

const router = express.Router();

router.route('/suggest-habits')
  .post(suggestHabits);

module.exports = router;