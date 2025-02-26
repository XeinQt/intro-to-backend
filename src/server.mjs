import express from "express";
import dotenv, { parse } from "dotenv";

dotenv.config();
const app = express();

const PORT = process.env.PORT;

const users = [
  { id: 1, name: "ico", lname: "alentio" },
  { id: 2, name: "htodog", lname: "haha" },
];

//get
app.get("/api/users", (req, res) => {
  res.status(201).sendFile({ msg: "hello" });
});

app.get("api/products", (request, response) => {
  response.send([{ name: "Rico", lname: "Alentio" }]);
});

//acces with params
app.get("/api/users/:id", (request, response) => {
  console.log(request.params.id);

  const parseId = parseInt(request.params.id);
  if (isNaN(parseId)) return response.status(400).send([{ msg: "error" }]);
  const findUser = users.find((user) => user.id === parseId);

  return response(findUser);
});

app.listen(PORT, () => {
  console.log(`Running port of ${PORT}`);
});
