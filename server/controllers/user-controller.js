const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

const User = require('../models/user-model');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.createUser = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);

  const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);

  if (!newUser || !token)
    return next(new AppError('User could not be created', 400));

  res.status(201).json({
    status: 'success',
    token,
    scoredComments: [],
    user: newUser,
  });
});