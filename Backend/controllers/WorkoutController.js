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
        res.status(400).json({error:error.message});
    }
}

                                 //  delete a workout

const deleteWorkout =async(req,res)=>{
    const id= req.body._id;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"not id"})
    }
    const workout = await Workout.findByIdAndDelete({_id:id});
    res.status(200).json(
        {status:"deleted ",
         workout
        }
    )

}

                                  //update a workout 
  const updateWorkout =  async(req,res)=>{
    const {id} =req.params;


    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"no such workout is present "})
    }

    const workout= await Workout.findByIdAndUpdate({_id:id },{
        ...req.body
    });


    if(!workout){
        return  res.status(404).json({error:"no search found"})
    }
    res.status(200).json({msg:"workout Updated "})

  }



module.exports ={
    createWorkout,getWorkouts,singleWorkout,deleteWorkout,updateWorkout
}