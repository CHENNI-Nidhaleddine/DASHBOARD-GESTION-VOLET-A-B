// const express=require('express')
// const mongoose=require('mongoose')
// const dotenv=require('dotenv')
// // const PinRoute=require("./routes/PinRoute")
// const UserRoute=require("./routes/users")
// const bodyParser= require("body-parser")

// const app=express()
// dotenv.config()
// app.use(express.json())
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// mongoose.connect(process.env.DB_URI,{  
//                                          useNewUrlParser:true,
//                                          useUnifiedTopology:true
//                                     })
// .then(()=>{
//     console.log("connection is successfull");
//     const port=process.env.PORT || 5000
//     app.listen(port,()=>{
//         console.log(`Server start running on port ${port}...`)
//     })
// })
// .catch((e)=>{
//     console.log("no connection ",e);
// });

// app.use("/api/users",UserRoute)
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/employee");
const circuitsRoute = require("./routes/circuits");
const autoCircuitsRoute = require("./routes/autoCircuits");
var cors = require('cors');

dotenv.config();

app.use(express.json());

app.use(cors());

mongoose 
 .connect(process.env.DB_URI, {  
                                             useNewUrlParser:true,
                                             useUnifiedTopology:true
                                        })   
 .then(() => console.log("MongoDB connected!"))
 .catch(err => console.log(err));

app.use("/api/employee", userRoute);
app.use("/api/circuits", circuitsRoute);
app.use("/api/autoCircuits", autoCircuitsRoute);
app.listen(8800, () => {
  console.log("Backend server is running!");
});