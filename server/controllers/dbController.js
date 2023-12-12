//import db
const db = require("../models/dbModel.js");
const dbController = {};

dbController.createEntry = async (req, res, next) => {
  const { number, date } = req.body;
  console.log("this is number and date:", number, date);
  if (typeof number !== "number" || typeof date !== "string") {
    next(
      "Data entry does not contain a number and/or a correct date data type."
    );
  }

  try {
    const RANDOM_NUMBER_QUERY = `INSERT INTO "Random" (number, date) VALUES (${number}, '${date}');`;
    const querySuccess = db.query(RANDOM_NUMBER_QUERY);
    res.locals.numberAdded = querySuccess;
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = dbController;
