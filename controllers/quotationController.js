const Quotation = require("../config/db").quotation;
const asyncErrorHandler = require("../middlewares/asyncErrorHandler");
const ErrorHandler = require("../utils/errorHandler");
const validationErrors = require("../utils/validators/validationErrors");

//GET method to return all quotations
exports.getAllQuotations = asyncErrorHandler(async (req, res) => {
  const data = await Quotation.findAll({
    attributes: ["qid", "company_name", "status", "parts_name", "amount"],
  });

  res.status(200).json({ data });
});

//GET method to return a single quotation
exports.getSingleQuotation = asyncErrorHandler(async (req, res, next) => {
  const quotation = await Quotation.findByPk(req.params.id);
  if (!quotation) {
    const err = new ErrorHandler(
      "Quotation with given ID does not exists.",
      404
    );
    return next(err);
  }

  res.status(200).json(quotation);
});

//POST method to insert a new quotation
exports.createQuotation = asyncErrorHandler(async (req, res, next) => {
  if (validationErrors(req, res, next)) {
    return
  }

  const { company_name, status, parts_name, amount } = req.body;
  await Quotation.create({ company_name, status, parts_name, amount });
  res.status(201).json({ msg: "Quotation created successfully." });
});

//PUT method to update an existing quotation
exports.updateQuotation = asyncErrorHandler(async (req, res, next) => {
  if (validationErrors(req, res, next)) {
    return
  }
  
  const { company_name, status, parts_name, amount } = req.body;
  const updatedQuotation = await Quotation.update(
    { company_name, status, parts_name, amount },
    {
      where: {
        qid: req.params.id,
      },
    }
  );

  if (updatedQuotation[0] === 0) {
    const err = new ErrorHandler(
      "Quotation with given ID does not exists.",
      404
    );
    return next(err);
  }

  res.status(201).json({ msg: "Quotation updated successfully." });
});

//DELETE method to delete an existing quotation
exports.deleteQuotation = asyncErrorHandler(async (req, res, next) => {
  const deletedQuotation = await Quotation.destroy({
    where: { qid: req.params.id },
  });

  if (!deletedQuotation) {
    const err = new ErrorHandler(
      "Quotation with given ID does not exists.",
      404
    );
    return next(err);
  }

  res
    .status(200)
    .json({ statusCode: 200, message: "Quotation deleted successfully." });
});
