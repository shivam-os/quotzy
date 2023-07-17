const { validationResult } = require("express-validator");

module.exports = (req, res) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    console.log(validationErrors);
    return res
      .status(400)
      .json({
        statusCode: 400,
        message: "Input contains some errors.",
        errors: validationErrors.array(),
      });
  }
};
