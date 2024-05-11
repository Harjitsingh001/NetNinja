require('dotenv').config()
const mongoose = require('mongoose')
const express = require("express");
const cors = require("cors")

// import all router that are in the router module 

const workoutRoute  = require('./routes/workouts')


// express app

const app =express();
app.use(cors())


//middleware
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})

app.use("/api/workouts", workoutRoute);




// connect to database 

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT , ()=>{
        console.log("listing  on  honey ki kport", process.env.PORT )
    })})
.catch((error)=>{
console.log(error)})