const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
     res.send("Order list");
})

router.post('/',(req,res)=>{
    res.send("Order Created");
})

module.exports = router;