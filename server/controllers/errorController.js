const sendErrorDev = (err, req, res, next) => {
  console.log(err.message);
  
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
    stack: err.stack,
  });
}

const sendErrorProd = (err, req, res, next) => {
  console.log(err.message);

  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    res.status(err.statusCode).json({
      title: 'Something went wrong!',
      message: err.message,
    });
  }
}

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, req, res);
  } else if (process.node.NODE_ENV === 'production') {
    sendErrorProd(err, req, res);
  }

}