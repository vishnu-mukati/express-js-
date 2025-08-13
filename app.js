const http = require('http');
const express = require('express');

const app = express();

// app.use((req,res,next)=>{
//     console.log('output from middleware 1');
//     next();
// })

app.use((req,res,next)=>{
    console.log('Authentication middleware called');
    next();
})

app.use("/library-2",(req,res,next)=>{
    console.log("book recommendations");
    next();    
})

app.use("library-3",(req,res,next)=>{
    console.log("special access to research paper from professors and seniors");
    next();
})

app.get("/library-2",(req,res)=>{
    res.send("<h1>library 2 entered</h1>")
})

app.get((req,res)=>{
    res.send("<h1>library 3 Entered</h1>")
})

app.listen(3000);

// const server = http.createServer(app);

// server.listen(3000);