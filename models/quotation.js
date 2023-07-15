module.exports = (sequelize, DataTypes) => {
  const Quotation = sequelize.define("quotation", {
    qid: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    company_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    status: {
      type: DataTypes.ENUM("pending", "done"),
      defaultValue: "pending",
      allowNull: false,
    },

    parts_name: {
      type: DataTypes.TEXT(),
      allowNull: false,
    },

    amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },
  });

  return Quotation;
};
