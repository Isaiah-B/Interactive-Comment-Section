const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

const User = require('../models/user-model');

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);

    console.log(newUser)
    res.status(201).json({
      status: 'success',
      token,
      user: newUser,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    });
  }
}