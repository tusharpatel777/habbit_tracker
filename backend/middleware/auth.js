// backend/middleware/auth.js
const jwt = require('jsonwebtoken');
const env = require('../config/env');
const User = require('../models/User');

// Protect routes
exports.protect = async (req, res, next) => {
  let token;

  // Check for token in headers
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }
  // You could also check for token in cookies:
  // else if (req.cookies.token) {
  //   token = req.cookies.token;
  // }

  // Make sure token exists
  if (!token) {
    return res.status(401).json({ success: false, error: 'Not authorized to access this route' });
  }

  try {
    //verify token
    const decoded = jwt.verify(token, env.JWT_SECRET);

    req.user = await User.findById(decoded.id);

    next();
  } catch (err) {
    console.error('JWT Verification Error:', err);
    return res.status(401).json({ success: false, error: 'Not authorized to access this route' });
  }
};