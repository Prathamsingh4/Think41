const express = require("express");
const cors = require("cors");
const db = require("./models");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

db.sequelize.sync().then(() => {
  console.log("DB connected.");
});

app.use("/api", require("./routes/api"));

app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});