const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
//specify port
const PORT = 3000; //not sure yet

const dbRouter = require("./routes/db");

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use("/db", dbRouter);

app.all((req, res) => {
  res.sendStatus(403);
});

app.use((err, req, res, next) => {
  let defaultError = {
    log: "unknown middleware error",
    status: 500,
    message: { err: "an error occured" },
  };
  const errorObj = Object.assign(defaultErr, err);
  return res.status(errorObj.status).send(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});

module.exports = app;
