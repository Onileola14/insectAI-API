const {StatusCodes} = require("http-status-codes");
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(StatusCodes.NOT_FOUND).json({
    message: error.message,
  });
  next(error);
};

module.exports = notFound;