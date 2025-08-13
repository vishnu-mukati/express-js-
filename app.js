const express = require("express");
const app = express();

app.use(express.json());

// Routes

// GET /orders
app.get("/orders", (req, res) => {
    res.send("Here is the list of all orders.");
});

// POST /orders
app.post("/orders", (req, res) => {
    res.send("A new order has been created.");
});

// GET /users
app.get("/users", (req, res) => {
    res.send("Here is the list of all users.");
});

// POST /users
app.post("/users", (req, res) => {
    res.send("A new user has been added.");
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
