import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

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

// Get all users or filter by query ?name=
app.get("/api/users", (request, response) => {
  const { name } = request.query;

  if (name) {
    const filteredUsers = users.filter(
      (user) => user.name.toLowerCase() === name.toLowerCase()
    );

    return response.json(
      filteredUsers.length ? filteredUsers : { msg: "User not found" }
    );
  }

  response.json(users);
});

// Get a single user by ID
app.get("/api/users/:id", (request, response) => {
  const parseId = parseInt(request.params.id);

  if (isNaN(parseId)) {
    return response.status(400).json({ msg: "Invalid ID" });
  }

  const findUser = users.find((user) => user.id === parseId);

  if (!findUser) {
    return response.status(404).json({ msg: "User not found" });
  }

  response.json(findUser);
});

// it is use for delet and update the users information and name lastname and etc
app.post("/api/users", (request, response) => {
  console.log(request.body);

  return response.status(400);
});

// Get products
app.get("/api/products", (request, response) => {
  response.json([{ name: "Rico", lname: "Alentio" }]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
