const express = require ('express');
const cors = require('cors');
const morgan = require('morgan');

const commentRouter = require('./routes/comment-routes');
const userRouter = require('./routes/user-routes');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cors());
app.use(express.json());

app.use('/api/v1/comments', commentRouter);
app.use('/api/v1/users', userRouter);


module.exports = app;