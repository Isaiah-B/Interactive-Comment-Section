const express = require('express');
const cors = require('cors');

const commentRouter = require('./routes/comment-routes');
const userRouter = require('./routes/user-routes');

const AppError = require('./utils/appError');
const errorController = require('./controllers/errorController');

const app = express();

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line import/no-extraneous-dependencies, global-require
  const morgan = require('morgan');
  app.use(morgan('dev'));
}

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Successfully hosted by Heroku!'));
app.use('/api/v1/comments', commentRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => (
  next(new AppError(`The route ${req.originalUrl} was not found on the server!`, 404))
));

app.use(errorController);
module.exports = app;
