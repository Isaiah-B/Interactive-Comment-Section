// Wrap around async functions to catch any errors that may occur
module.exports = (fn) => (req, res, next) => {
  fn(req, res, next).catch();
};
