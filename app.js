const express = require("express");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next();
});

app.get('/products',(req,res)=>{
    res.send("Here is the list of all products.");
})
app.post('/products ',(req,res)=>{
    res.send("A new product has been added.");
})
app.get('/categories ',(req,res)=>{
   res.send("Here is the list of all categories.");
})
app.post('/categories ',(req,res)=>{
   res.send("A new category has been created.");
})

app.get('/log/:endpoint',(req,res)=>{
    
})

// app.get('/welcome/:username', (req,res)=>{
//     let name = req.params.username;
//     let role = req.query.role;
//     res.send(`Welcome ${name},your role is ${role}`);
// })


const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
