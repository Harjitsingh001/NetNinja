import React from 'react'
import { useEffect, useState } from 'react'

import WorkoutForm from '../components/WorkoutForm'
// componenet 

import WorkoutDetails from '../components/WorkoutDetails'


const Home = () => {

  const [workouts, setWorkouts] = useState(null);
  const [name, setName] = useState(" ")

  // function setName(p) {
  //   console.log(p)
  // }
  useEffect(() => {
    const fetchData = async () => {
      const responce = await fetch("/api/workouts")
      const json = await responce.json();

      if (responce.ok) {
        setWorkouts(json)
      }
    }

    fetchData()

    console.log(name)
  }, [name])


  return (
    <>
      <div style={{ display: 'flex' }} className='home' >
        <div className='workouts'>
          {workouts && workouts.map((workout) => (
            <WorkoutDetails  key={workout._id} id={workout._id} workout={workout} />
          ))}

          {/* {console.log(workouts) */}

        </div>
        <WorkoutForm fun={setName} />
      </div>
    </>

  )
}

export default Home