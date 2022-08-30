const { protect } = require('../controllers/auth-controller');
const { 
  createComment, 
  getAll, 
  createReply, 
  getComment, 
  updateComment, 
  deleteComment 
} = require('../controllers/comments-controller');

const router = require('express').Router();

router.route('/')
  .get(getAll)
  .post(protect, createComment);


router.route('/:id')
  .get(getComment)
  .post(protect, createReply)
  .patch(protect, updateComment)
  .delete(protect, deleteComment);

module.exports = router;