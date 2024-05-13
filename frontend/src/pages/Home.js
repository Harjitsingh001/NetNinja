import React from 'react'
import { useEffect, useState } from 'react'

import WorkoutForm from '../components/WorkoutForm'
// componenet 

import WorkoutDetails from '../components/WorkoutDetails'


const Home = () => {

  const [workouts, setWorkouts] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const responce = await fetch("/api/workouts")
      const json = await responce.json();

      if (responce.ok) {
        setWorkouts(json)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <div style={{display:'flex'}} className='home' >
        <div className='workouts'>
          {workouts && workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
        </div>
        <WorkoutForm />
      </div>
    </>

  )
}

export default Home