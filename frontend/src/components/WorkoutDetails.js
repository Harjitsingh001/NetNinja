import React, { useEffect ,useState } from 'react'
import "./WorkoutDetails.css"

const WorkoutDetails = ({setWorkouts ,workout ,id }) => {

function deleteitem(e){
 const id = e.target.id;

  fetch("api/workouts/delete",{
    method:"DELETE",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify({_id:id})
  })
  .then(resp=>resp.json())
  .then(data=>{
    console.log(data.workout)
    setWorkouts(data.workout)
  })
}  


  return (
 <>
    <div className='workout-details'>
      <div className='innerdiv'>
      <h1 className='head' > {workout.title}</h1>
      <p  className='data'> <strong>Load (KG):</strong> {workout.load} </p>
      <p className='data'><strong>Reps:</strong> {workout.reps}</p>
      
      <p className='data'>
        <strong>
          Added At{" "}: {""}
        </strong>{workout.createdAt}
        <span >
            <button id={id}  onClick={deleteitem}  className='delStyle'>
              del
            </button>
        </span>
      </p>
      </div>

    </div>
    </>
    
  )
}

export default WorkoutDetails