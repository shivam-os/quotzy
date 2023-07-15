const express = require("express");
const morgan = require("morgan");
const quotationRoutes = require("./routes/quotationRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;
const baseUrl = "/api";

//Required middlewares
app.use(express.json());
app.use(morgan("dev"));

//App routes
app.use(`${baseUrl}/quotations`, quotationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running...`);
});
