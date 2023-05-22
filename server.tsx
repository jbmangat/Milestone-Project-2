import express from "express";
import cors from "cors";
// get driver connection
import dbo from "./connection";
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes.js"));

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err: Error | undefined) {
    if (err) console.error(err);

  });
  console.log(`Server is running on port: ${port}`);
});