const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    min: 1,
  },

  score: {
    type: Number,
    default: 0,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  replies: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Comment'
    }
  ],

  replyingTo: {
    type: mongoose.Types.ObjectId,
    default: null
  },

  topLevelComment: {
    type: mongoose.Types.ObjectId,
    default: null
  },
  
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: [true, 'Comment must have a user'],
  }
});

function autoPopulateReplies(next) {
  this.populate(['replies', 'user']);
  next();
}

commentSchema.pre(/^find/, autoPopulateReplies);

module.exports = mongoose.model('Comment', commentSchema);