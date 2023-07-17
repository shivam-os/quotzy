const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

//Create connection to the database using given credentials
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    dialect: "mysql",
    host: process.env.DB_HOST,
  }
);

//Check the connection to the database
const checkDBConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to the database successfully.");
  } catch (err) {
    console.log("Error while connecting to the database:", err);
  }
};
checkDBConnection();

const db = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};

//Sync all the tables with the database
const syncAllTables = async () => {
  try {
    await db.sequelize.sync();
    console.log("All the tables are synced syccessfully.");
  } catch (err) {
    console.log("Error in syncing the table:", err);
  }
};
syncAllTables();

//Add the models to the above db object
db.quotation = require("../models/quotation")(sequelize, DataTypes);

module.exports = db;
