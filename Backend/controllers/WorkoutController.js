const Workout =require('../models/WorkoutModel') 
const mongoose =require('mongoose')
// get all workouts 

const getWorkouts= async(req,res) =>{
    const workouts =await Workout.find({}).sort({createdAt: -1});
    res.status(200).json(workouts);

}

// get  a single workout

const singleWorkout= async(req,res)=>{
    const {id} = req.params


    //if id is not valid of workout 
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"invalid id "})
    }


    const workout = await Workout.findById(id);
    if(!workout){
        return res.status(404).json({error:"no search found"})
    }

    res.status(200).json(workout)
}

// create a workout
const createWorkout = async(req,res) =>{
    const  {title,load,reps} =  req.body;

    try{
        const workout = await Workout.create({title,load,reps});
        res.status(200).json(workout)
    }
    catch(error){
        rea.status(400).json({error:error.message});
    }
}


//  delete a workout

//update a workout 




module.exports ={
    createWorkout,getWorkouts,singleWorkout
}