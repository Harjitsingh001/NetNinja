const express =require ('express')
const Workout =require('../models/WorkoutModel') 
const router = express.Router();
const { createWorkout ,singleWorkout, getWorkouts ,deleteWorkout ,updateWorkout }  =require('../controllers/WorkoutController')


// get all users 

router.get('/' , getWorkouts)

// get a single user 

router.get('/:id' ,singleWorkout)

 //post  a new user 

 router.post('/' , createWorkout)
  

  // delete a user
  router.delete('/delete' , deleteWorkout)
  
  //  update a user

  router.patch('/:id' , updateWorkout)
  

module.exports = router 