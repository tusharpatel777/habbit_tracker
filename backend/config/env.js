require('dotenv').config();

const config = {
  PORT: process.env.PORT || 3000,
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/habit-tracker-db-default',
  GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  JWT_SECRET: process.env.JWT_SECRET || 'fallbackjwtsecret',
  JWT_EXPIRE: process.env.JWT_EXPIRE || '30d', // Keep this as a string for jsonwebtoken
  JWT_COOKIE_EXPIRE_DAYS: parseInt(process.env.JWT_COOKIE_EXPIRE_DAYS || '30', 10), // <-- Ensure this is an integer
};

console.log('--- ENV Config Loaded ---');
console.log('JWT_COOKIE_EXPIRE_DAYS (parsed):', config.JWT_COOKIE_EXPIRE_DAYS, 'Type:', typeof config.JWT_COOKIE_EXPIRE_DAYS);
console.log('--- End ENV Config ---');

module.exports = config;