// backend/controllers/authController.js
const User = require('../models/User');
const env = require('../config/env');

// @desc    Register user
// @route   POST /api/auth/register
// @access  Public
exports.register = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    // Create user
    const user = await User.create({
      name,
      email,
      password,
    });

    sendTokenResponse(user, 201, res);
  } catch (err) {
    if (err.code === 11000) { // Duplicate key error (e.g., email already exists)
      return res.status(400).json({ success: false, error: 'User with this email already exists.' });
    }
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);
      return res.status(400).json({ success: false, error: messages });
    }
    console.error(err);
    res.status(500).json({ success: false, error: 'Server Error during registration.' });
  }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  // Validate email and password
  if (!email || !password) {
    return res.status(400).json({ success: false, error: 'Please enter an email and password' });
  }

  try {
    // Check for user
    const user = await User.findOne({ email }).select('+password'); // Select password explicitly

    if (!user) {
      return res.status(401).json({ success: false, error: 'Invalid credentials' });
    }

    // Check if password matches
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res.status(401).json({ success: false, error: 'Invalid credentials' });
    }

    sendTokenResponse(user, 200, res);
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Server Error during login.' });
  }
};

// @desc    Get current logged in user
// @route   GET /api/auth/me
// @access  Private
exports.getMe = async (req, res, next) => {
  // req.user is populated from the protect middleware
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    data: user,
  });
};


// // Get token from model, create cookie and send response
// const sendTokenResponse = (user, statusCode, res) => {
//   // Create token
//   const token = user.getSignedJwtToken();

//   // Options for cookie
//   const options = {
//     expires: new Date(Date.now() + env.JWT_EXPIRE * 24 * 60 * 60 * 1000), // Convert days to milliseconds
//     httpOnly: true, // Prevent client-side JS from reading the cookie
//   };

//   // If in production, secure cookies (HTTPS)
//   if (process.env.NODE_ENV === 'production') {
//     options.secure = true;
//   }

//   res
//     .status(statusCode)
//     .cookie('token', token, options) // Set cookie
//     .json({
//       success: true,
//       token,
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//       },
//     });
// };


const sendTokenResponse = (user, statusCode, res) => {
  // Create token
  const token = user.getSignedJwtToken();

  // Calculate expiry in milliseconds
  const expireMilliseconds = env.JWT_COOKIE_EXPIRE_DAYS * 24 * 60 * 60 * 1000;

  console.log('--- sendTokenResponse Debug ---');
  console.log('env.JWT_COOKIE_EXPIRE_DAYS:', env.JWT_COOKIE_EXPIRE_DAYS, 'Type:', typeof env.JWT_COOKIE_EXPIRE_DAYS);
  console.log('Calculated expireMilliseconds:', expireMilliseconds, 'Type:', typeof expireMilliseconds);
  console.log('Date.now():', Date.now());
  console.log('New Date value argument:', Date.now() + expireMilliseconds);
  console.log('--- End sendTokenResponse Debug ---');


  // Options for cookie
  const options = {
    expires: new Date(Date.now() + expireMilliseconds), // <-- CRITICAL LINE
    httpOnly: true, // Prevent client-side JS from reading the cookie
    // You might also want to add 'sameSite: "lax"' or "none" with 'secure: true' for cross-origin if needed
  };

  // If in production, secure cookies (HTTPS)
  if (process.env.NODE_ENV === 'production') {
    options.secure = true;
  }

  res
    .status(statusCode)
    .cookie('token', token, options)
    .json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    })};