const jwt = require('jsonwebtoken');

const User = require('../models/user-model');
const AppError = require('../utils/appError');

exports.protect = async (req, res, next) => {
  // Check token in header
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.slice(7);
  }

  if (!token)
    return next(new AppError('No auth token found in header', 400));

  // Verify token
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
 // Check user exists
  const user = await User.findById(decoded.id);

  if (!user)
    return next(new AppError('User not found'));

  req.user = user;
  next();
}

