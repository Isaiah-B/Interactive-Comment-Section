const { createUser, scoreComment } = require('../controllers/user-controller');
const { protect } = require('../controllers/auth-controller');

const router = require('express').Router();

router.route('/')
  .post(createUser);
  
module.exports = router;