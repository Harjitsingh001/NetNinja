import React from 'react'
import { useEffect, useState } from 'react'

import WorkoutForm from '../components/WorkoutForm'

import WorkoutDetails from '../components/WorkoutDetails'


const Home = () => {


  const [workouts, setWorkouts] = useState(null);
  const [name, setName] = useState(" ")

 
  useEffect(() => {
    const fetchData = async () => {
      const responce = await fetch("/api/workouts")
      const json = await responce.json();

      if (responce.ok) {
        setWorkouts(json)
      }
    }
    fetchData()

  }, [name])


  return (
    <>
     <h style={{fontSize:"100px",marginLeft:"200px",color:"#505050"}}>daily Routine</h>
      <div style={{ display: 'flex' }} className='home' >
        <div className='workouts'>
          {workouts && workouts.map((workout) => (
            <WorkoutDetails key={workout._id} id={workout._id} setWorkouts={setWorkouts} workout={workout} />
          ))}
        </div>
        <WorkoutForm fun={setName} />
      </div>
    </>

  )
}

export default Home