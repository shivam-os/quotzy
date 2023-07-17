module.exports = (passedFunction) => {
  return (req, res, next) => {
    passedFunction(req, res, next).catch((err) => next(err));
  };
};
