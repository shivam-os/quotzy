const { body } = require("express-validator");

//Validator for creating or updating a quotation
exports.createQuotation = [
  body("company_name")
    .trim()
    .notEmpty()
    .isLength({ max: 255 })
    .withMessage("Company name can only contain maximum 255 letters."),

  body("status")
    .trim()
    .notEmpty()
    .withMessage("Status field cannot be empty.")
    .isIn(["pending", "done"])
    .withMessage("Status value can be either 'pending' or 'done'"),

  body("parts_name").trim().notEmpty(),

  body("amount").trim().notEmpty().isDecimal({ decimal_digits: 2 }),
];
