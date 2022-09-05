const Comment = require('../models/comment-model');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');

exports.getAll = catchAsync(async (req, res, next) => {
  const comments = await Comment.find({})
    .populate('user');

  res.status(200).json({
    status: 'success',
    results: comments.length,
    comments,
  });
});

exports.getComment = catchAsync(async (req, res, next) => {
  const comment = await Comment
    .findById(req.params.id)
    .populate({
      path: 'replies',
      populate: { path: 'replies' },
    });

  if (!comment)
    return next(new AppError('The requested comment was not found', 404));

  return res.status(200).json({
    status: 'success',
    comment,
  });
});

exports.createComment = catchAsync(async (req, res, next) => {
  const { user } = req;
  const newComment = await Comment.create({
    ...req.body,
    user,
  });

  res.status(201).json({
    status: 'success',
    newComment,
  });
});

exports.createReply = catchAsync(async (req, res, next) => {
  const { user } = req;
  const parentComment = await Comment
    .findById(req.params.id)
    .populate({
      path: 'user',
      select: '-__v',
    });

  if (!parentComment)
    return next(new AppError('Parent comment not found', 404));

  const newReply = await Comment.create({
    ...req.body,
    replyingTo: parentComment._id,
    user,
  });

  if (!newReply)
    return next(new AppError('New reply could not be created', 400));

  // Add reply to its parent and return both reply and parent
  parentComment.replies = parentComment.replies.concat(newReply._id);
  await parentComment.save();

  return res.status(201).json({
    status: 'success',
    newReply,
    parentComment,
  });
});

exports.deleteComment = catchAsync(async (req, res, next) => {
  const deletedComment = await Comment.findByIdAndDelete(req.params.id);

  if (!deletedComment)
    return next(new AppError('Comment to be deleted could not be found', 404));

  // If the deleted comment is a reply, remove it from the parent reply array
  if (deletedComment.replyingTo) {
    const parentComment = await Comment.findById(deletedComment.replyingTo);

    if (!parentComment)
      return next(new AppError('Parent of deleted comment could not be found', 404));

    parentComment.replies = parentComment.replies.filter((reply) => (
      reply.toString() !== deletedComment._id.toString()
    ));

    await parentComment.save();
  }

  return res.status(204).end();
});

// Used for editing/liking a comment
exports.updateComment = catchAsync(async (req, res, next) => {
  const updatedComment = await Comment.findByIdAndUpdate(req.params.id, {
    ...req.body,
  }, {
    new: true,
    runValidators: true,
  });

  if (!updatedComment)
    return next(new AppError('Comment to be updated could not be found', 404));

  return res.status(200).json({
    status: 'success',
    updatedComment,
  });
});
