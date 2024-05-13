import React from 'react'
import "./WorkoutDetails.css"
const WorkoutDetails = ({ workout }) => {
   
  return (
 <>
    <div className='workout-details'>
      <div className='innerdiv'>
      <h2 className='head' > {workout.title}</h2>
      <p  className='data'> <strong>Load (KG):</strong> {workout.load} </p>
      <p className='data'><strong>Reps:</strong> {workout.reps}</p>
      <p className='data'>
        <strong>
          Added At:
        </strong>{workout.createdAt}
      </p>
      </div>
    </div>
    </>
    
  )
}

export default WorkoutDetails