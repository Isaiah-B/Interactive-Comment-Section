const jwt = require('jsonwebtoken');

const User = require('../models/user-model');

exports.protect = async (req, res, next) => {
  // Check token in header
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.slice(7);
  }

  if (!token) {
    console.log('No auth token found in header');
    return;
  }

  // Verify token
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
 // Check user exists
  const user = await User.findById(decoded.id);

  if (!user) {
    console.log('User not found');
    return;
  }

  req.user = user;
  next();
}

