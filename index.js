const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;
const baseUrl = "/api";

//Required middlewares
app.use(express.json());
app.use(morgan("dev"));

//App routes
app.use(`${baseUrl}/quotations`);

app.listen(PORT, () => {
  console.log(`Server is running...`);
});
