const express = require("express");
const app = express();

app.get('/welcome/:username', (req,res)=>{
    let name = req.params.username;
    let role = req.query.role;
    res.send(`Welcome ${name},your role is ${role}`);
})


const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
