<<<<<<< HEAD
//server creation
var express = require("express");
var app = express();
var path = require("path");
var mdb = require("mongoose");
var cors=require('cors');
var env=require('dotenv')
var User = require("./models/users");
app.use(express.json())
app.use(cors());
const PORT = 3001;
env.config()
app.use
//mongodb string=mongodb://localhost:27017/
//mongodb string =mongodb://127.0.1:27017/
mdb
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("mongodb connection established successfully..");
  })
  .catch(() => {
    console.log("check your connection string...");
  });

app.get("/", (req, res) => {
  res.json({
    server: "welcome to backend server..",
    url: "localhost",
    PORT: { PORT },
  });
});
app.get("/json", (req, res) => {
  res.json({
    server: "welcome to json backend server..",
    url: "localhost",
    PORT: { PORT },
  });
});
app.get("/static", (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "/index.html"));
});



app.post("/signup", (req, res) => {
  //   console.log(req.body);
  // var {firstName,lastName,email,password} = req.body;
  // console.log(firstName,lastName,email);
  // try {
  //   var newUser=new User({
  //     firstName:firstName,
  //     lastName:lastName,
  //     email:email,
  //     password:password
  // });

  // //[option  
  var newUser=new User(req.body)
  console.log(req.body);

  // //]
  newUser.save();
    console.log("User addedd successfully..");
    res.status(200).send("User add successfully...");
  // } catch (err) {
  //   console.log(err);
  // }
});

app.post('/login',async(req,res)=>{
  var {email,password}=req.body;
  try{
    var existingUser=await User.findOne({email:email});
    console.log(existingUser);
    if(existingUser){ 
    if(existingUser.password==password){
      res.json({message:"login successful..",isLoggedIn:true});
    }
    else{
      res.json({message:"invalid credentials",isLoggedIn:false});
    }
  }
    else{
      res.json({message:"Login falied..",isLoggedIn:false});
    }
  } 
  catch(err){
   console.log("login failed....");
  }
});
  
app.get('/getSignup',async(req,res)=>{
    try{
      var allSignupRecords= await User.find();
      res.json(allSignupRecords);
      console.log("fetched items successfully..");
    }
    catch(err){
        console.log(err);
       }
})




app.listen(PORT, () => {
  console.log(`Backend server started...\nUrl:http://localhost:${PORT}`);
});

=======
var express=require('express')
var app=express()
const PORT=3002
app.get('/',(req,res)=>{
    res.send('THIS IS RESHMA ALAVUTHEEN')
})
app.get('/json',(req,res)=>{
    res.send({server:"Welcome",url:"localhost",port:PORT})
})
app.get('/static',(req,res)=>{
    res.sendFile('C:/Users/reshm/OneDrive/Desktop/full_stack/backend_day6/index.html')
})
app.listen(PORT,()=>{
    console.log(`Backend server connected\nUrl:http://localhost:${PORT}`);
})
>>>>>>> 2ec1414a0f2cd9510d1b3c941d174761d7c0a201
