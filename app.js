const express = require("express");
const app = express();


function addUserMiddleware(req, res, next) {
    req.user = "Guest"; 
    next();
}


app.get("/welcome", addUserMiddleware, (req, res) => {
    res.send(`<h1>Welcome, ${req.user}!</h1>`);
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
