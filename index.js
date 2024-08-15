import express from "express";

const app = express();

app.get("/user/:id", (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: "User ID is required" });
  }

  const user = {
    id,
    name: "John Doe",
    email: "johndoe@example.com",
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "12345",
    },
  };

  res.json(user);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
