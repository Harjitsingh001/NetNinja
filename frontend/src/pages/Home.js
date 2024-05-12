import React from 'react'
import { useEffect,useState } from 'react'



const Home = () => {

  const [workouts,setWorkouts]=useState(null)

  useEffect(() => {
      const fetchData= async()=>{
          const responce = await fetch("/api/workouts")
          const json =await responce.json();

          if(responce.ok){
            setWorkouts(json)
          }
      }
      fetchData()
  }, [])
  
  return (
    <div className='home'>
     <div className='workouts'>
    {workouts && workouts.map((workout)=>(
      <h3 key={workout._id}>
        {workout.title}
      </h3>
    ))}
     </div>
    </div>
  )
}

export default Home