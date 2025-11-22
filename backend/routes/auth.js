const express = require('express');
const { register, login, getMe, updateDetails } = require('../controllers/authController'); // <--- CRITICAL: Ensure all are imported correctly
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/register', register); // <--- Line 7, as per error, if register is undefined, it crashes
router.post('/login', login);
router.get('/me', protect, getMe);
router.put('/updatedetails', protect, updateDetails);

module.exports = router;