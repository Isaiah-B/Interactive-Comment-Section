const Comment = require('../models/comment-model');

exports.getAll = async (req, res) => {
  try {
    const comments = await Comment
      .find({ replyingTo: { $eq: null } })

    res.status(200).json({
      status: 'success',
      results: comments.length,
      comments,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    });
  }
}

exports.getComment = async (req, res) => {
  try {
    const comment = await Comment
      .findById(req.params.id)
      .populate({
        path: 'replies',
        populate: { path: 'replies' }
      });

      res.status(200).json({
      status: 'success',
      comment
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    });
  }
}


exports.createComment = async (req, res) => {
  try {
    const user = req.user;
    const newComment = await Comment.create({
      ...req.body,
      user
    });

    newComment.topLevelComment = newComment._id;
    newComment.save();

    res.status(201).json({
      status: 'success',
      newComment,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    });
  }
}


exports.createReply = async (req, res) => {
  try {
    const user = req.user;
    const parentComment = await Comment
      .findById(req.params.id)
      .populate({ 
        path: 'user',
        select: '-__v' 
      });

    const newReply = await Comment.create({
      ...req.body,
      replyingTo: parentComment._id,
      topLevelComment: parentComment.topLevelComment,
      user,
    });

    // Add reply to replied to comment and return top level comment
    if (newReply) {
      parentComment.replies = parentComment.replies.concat(newReply);
      await parentComment.save();

      const topLevelComment = await Comment.findById(newReply.topLevelComment);

      res.status(201).json({
        status: 'success',
        repliedCommentTopLevel: topLevelComment,
      });
    }

  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    });
  }
}


exports.deleteComment = async (req, res) => {
  try {
    const commentToDelete = await Comment.findByIdAndDelete(req.params.id);

    // Return parent document if deleted comment is a reply
    if (commentToDelete.replyingTo) {
      const topLevelComment = await Comment.findById(commentToDelete.topLevelComment);

      return res.status(200).json({
        status: 'success',
        deletedCommentTopLevel: topLevelComment,
      });
    }
    
    return res.status(204).end();

  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
}

// Used for editing/liking a comment
exports.updateComment = async (req, res) => {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(req.params.id, {
      ...req.body,
    }, {
      new: true,
      runValidators: true,
    });

    const topLevelComment = await Comment.findById(updatedComment.topLevelComment);

    res.status(200).json({
      status: 'success',
      updatedCommentTopLevel: topLevelComment
    });

  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
}