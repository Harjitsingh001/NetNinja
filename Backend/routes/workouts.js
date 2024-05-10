const express =require ('express')
const Workout =require('../models/WorkoutModel') 
const router = express.Router();
const { createWorkout ,singleWorkout, getWorkouts }  =require('../controllers/WorkoutController')


// get all users 

router.get('/' , getWorkouts)

// get a single user 

router.get('/:id' ,singleWorkout)

 //post  a new user 

 router.post('/' , createWorkout)
  

  // delete a user
  router.delete('/:id' , (req,res)=>{
    res.json({mssg:" Delete a single  Users"})
  })
  
  //  update a user

  router.patch('/id' , ( req,res )=>{
    res.json({mssg:" upadte  a single  Users"})
  })
  

module.exports = router 