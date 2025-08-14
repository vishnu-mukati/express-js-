const express = require("express");
const app = express();

app.use(express.json());

// Routes

// app.use("/*",(req,res,next)=>{
//     res.statusCode = 404;
//     res.send('<h1>404 - Page Not Found</h1>')
//     next();
// })

// GET /orders
app.get("/products", (req, res) => {
    res.send("Here is the list of all products.");
});

// POST /orders
app.post("/products", (req, res) => {
    res.send("A new product has been added.");
});

// GET /users
app.get("/categories", (req, res) => {
    res.send("Here is the list of all categories.");
});

// POST /users
app.post("/categories", (req, res) => {
    res.send("A new category has been created.");
});

app.use('*',(req, res) => {
    res.statusCode =404
    res.send('<h1>404 - Page Not Found</h1>');
});


const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
