const express = require("express");
const env = require("./config/envConfig");
const connect = require("./config/bd.js");
const cort = require('cors');

const userRoutes = require("./routes/userRouters");
const categoryRoutes = require("./routes/categoryRoutes.js");
const productRoutes = require("./routes/productRoutes.js");
const paymentRoutes = require("./routes/payment.js");
const orderRoutes = require("./routes/orderRoutes");
const app=express();

connect();
app.use(cort());
app.post(
    "/api/webhook",
    express.json({
      verify: (req, res, buf) => {
        req.rawBody = buf.toString();
      },
    })
  );
app.use(express.json());


app.get('/',(req,res)=>{
    res.json({msg:'Wellcome ot Aungaboron'})
})

app.use("/api",userRoutes);
app.use("/api",categoryRoutes);
app.use("/api",productRoutes);
app.use("/api",paymentRoutes);
app.use("/api", orderRoutes);

const port=env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Server is Runing ${port}`);
})