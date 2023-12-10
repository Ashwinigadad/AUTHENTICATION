const express=require("express");
const route=require("./routes/routes");

const app=express();
app.use(express.json());
const port=5002;
app.use("/api/register",route);

const mongoos=require("mongoose");
mongoos.connect("mongodb://localhost:27017/authentication")
.then(()=>{
    console.log("Mongodb got connected");
})
.catch(()=>{
    console.log("error");
})
app.listen(port,()=>{
    console.log(`server started on port ${port}`);
})