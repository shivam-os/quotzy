const express = require("express");
const router = express.Router();

//GET request to return all quotations
router.get("/");

//POST request to insert new quotation
router.post("/");

//PUT request to update an existing quotation with given id
router.put("/:id");

//DELETE request to delete an existing quotation with given id
router.delete("/:id");

module.exports = router;
