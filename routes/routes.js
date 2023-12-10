const express=require("express");
const router=express.Router();
const bcrypt=require("bcrypt");
const schema=require("../schema");

router.get("/", async(req, res) => {
try{
  const data=await schema.find({});
  res.send(data);
}catch (err){
  throw err;
}
});

router.post("/", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create a new User instance with the hashed password
    const user = new schema({
      username: req.body.username,
      password: hashedPassword,
    });

    // Save the user to MongoDB
    user.save().then(item => {
      res.status(201).send("User created successfully");
    })?.catch(err=>{
      console.error(err);
      res.status(500).send("Error saving user");
    })
  }
    catch (error) {
    console.error(error);
    res.status(500).send("Error hashing password");
  }
}); 

module.exports=router;