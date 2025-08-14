const express = require("express");
let orderRouter = require('./routes/orders');
let userRouter = require('./routes/users');
const app = express();

app.use('/order',orderRouter);

app.use('/user',userRouter);



const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
