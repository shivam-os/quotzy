const express = require("express");
const morgan = require("morgan");
const quotationRoutes = require("./routes/quotationRoutes");
const errorMiddleware = require("./middlewares/errorMiddleware");
const ErrorHandler = require("./utils/errorHandler");
require("dotenv").config();
require("./config/db");

const app = express();
const PORT = process.env.PORT || 8080;
const baseUrl = "/api/v1";

//Required middlewares
app.use(express.json());
app.use(morgan("dev"));

//App routes
app.use(`${baseUrl}/quotations`, quotationRoutes);
app.all("*", (req, res, next) => {
  const err = new ErrorHandler(
    `Can't find ${req.originalUrl} on the server.`,
    400
  );
  next(err);
});

//Error Middleware
app.use(errorMiddleware);

//Start the app
app.listen(PORT, () => {
  console.log(`Server is running...`);
});
