const mongoose = require('mongoose');

const userAvatars = [
  { 
    png: "./images/avatars/image-juliusomo.png",
    webp: "./images/avatars/image-juliusomo.webp"
  },
  { 
    png: "./images/avatars/image-amyrobson.png",
    webp: "./images/avatars/image-amyrobson.webp"
  },
  { 
    png: "./images/avatars/image-maxblagun.png",
    webp: "./images/avatars/image-maxblagun.webp"
  },
  { 
    png: "./images/avatars/image-ramsesmiron.png",
    webp: "./images/avatars/image-ramsesmiron.webp"
  },
]

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minLength: 3,
    required: [true, 'User must have a name']
  },

  image: {
    type: {},
    default: () => {
      const index = Math.floor(Math.random() * 4);
      return userAvatars[index];
    }
  },
});


module.exports = mongoose.model('User', userSchema);