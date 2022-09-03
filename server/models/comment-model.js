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
      ref: 'Comment',
    },
  ],

  replyingTo: {
    type: mongoose.Schema.Types.ObjectId,
    default: null,
  },

  topLevelComment: {
    type: mongoose.Types.ObjectId,
    default: null,
  },

  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: [true, 'Comment must have a user'],
  },
});

// Populate replies and user for document and its subdocuments
function autoPopulateReplies(next) {
  this.populate(['user']);
  next();
}

commentSchema.pre(/^find/, autoPopulateReplies);

commentSchema.pre('save', function (next) {
  this.populate('user');
  next();
});

module.exports = mongoose.model('Comment', commentSchema);
