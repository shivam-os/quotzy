const express = require("express");
const quotationController = require("../controllers/quotationController");
const quotationValidator = require("../utils/validators/quotationValidator");
const router = express.Router();

//GET request to return all quotations
router.get("/", quotationController.getAllQuotations);

//GET request to return a single quotation with given id
router.get("/:id", quotationController.getSingleQuotation);

//POST request to insert new quotation
router.post(
  "/",
  quotationValidator.createQuotation,
  quotationController.createQuotation
);

//PUT request to update an existing quotation with given id
router.put(
  "/:id",
  quotationValidator.createQuotation,
  quotationController.updateQuotation
);

//DELETE request to delete an existing quotation with given id
router.delete(
  "/:id",
  quotationValidator.createQuotation,
  quotationController.deleteQuotation
);

module.exports = router;
