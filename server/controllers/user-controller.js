const jwt = require('jsonwebtoken');

const User = require('../models/user-model');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');

exports.createUser = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);

  const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);

  if (!newUser || !token)
    return next(new AppError('User could not be created', 400));

  return res.status(201).json({
    status: 'success',
    token,
    scoredComments: [],
    user: newUser,
  });
});

exports.getUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user)
    return next(new AppError('User could not be found', 404));

  return res.status(200).json({
    status: 'success',
    user: {
      id: user._id,
      username: user.username,
      image: user.image.png,
      token: user.token,
    },
  });
});
