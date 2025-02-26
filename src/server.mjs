import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const PORT = process.env.PORT;

//get
app.get("/api/users", (req, res) => {
  res.status(201).sendFile({ msg: "hello" });
});

app.get("api/products", (request, response) => {
  response.send([{ name: "Rico", lname: "Alentio" }]);
});

app.listen(PORT, () => {
  console.log(`Running port of ${PORT}`);
});
