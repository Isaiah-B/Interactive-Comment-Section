class AppError extends Error {
  constructor (message) {
    super(message);

    this.message = message;
    
  }
}