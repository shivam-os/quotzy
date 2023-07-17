module.exports = (err, req, res, next) => {
  err.message =
    err.message || "Something has went wrong. Please try again later!";
  err.statusCode = err.statusCode || 500;
  console.log(err);
  return res.status(err.statusCode).json({
    status: err.statusCode,
    message: err.message,
  });
};
