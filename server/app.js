const express = require ('express');
const cors = require('cors');
const morgan = require('morgan');

const commentRouter = require('./routes/comment-routes');
const userRouter = require('./routes/user-routes');

const AppError = require('./utils/appError');
const errorController = require('./controllers/errorController');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cors());
app.use(express.json());

app.use('/api/v1/comments', commentRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  return next(new AppError(`The route ${req.originalUrl} was not found on the server!`, 404));
});

app.use(errorController);
module.exports = app;