import express from "express";
import dotenv, { parse } from "dotenv";

dotenv.config();
const app = express();

const PORT = process.env.PORT;

const users = [
  { id: 1, name: "ico", lname: "alentio" },
  { id: 2, name: "htodog", lname: "haha" },
  { id: 3, name: "john", lname: "doe" },
  { id: 4, name: "jane", lname: "smith" },
  { id: 5, name: "mike", lname: "tyson" },
  { id: 6, name: "lisa", lname: "johnson" },
  { id: 7, name: "dave", lname: "brown" },
  { id: 8, name: "sara", lname: "white" },
  { id: 9, name: "alex", lname: "miller" },
  { id: 10, name: "chris", lname: "wilson" },
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

//reaquest a quety
app.get("/api/users", (request, response) => {
  const { name } = request.query;

  if (name) {
    const filteredUsers = users.filter(
      (user) => user.name.toLowerCase() === name.toLowerCase()
    );

    return response.json(users);
  }

  response.json(users);
});

app.listen(PORT, () => {
  console.log(`Running port of ${PORT}`);
});
