import React, { useState } from 'react'

const WorkoutForm = () => {

    const[title,setTitle]=useState('');
    const[load,setLoad]=useState('')
    const[reps,setReps]=useState('')
    const[error,setError]=useState(null)


   const handleSubmit=async(e)=>{
    e.preventDefault();
    const workout={title,load,reps}

    //fetch request  to post a now data

    const responce=await fetch("/api/workouts",{
        method:'POST',
        body:JSON.stringify(workout),
        headers:{
            'content-Type':"application/json"
        }
    })
    const json= await responce.json()

    if(!responce.ok){
        setError(json.error)
    }

    if(responce.ok){
        setError(null);
        console.log('new workout added ')
    }

   }
  return (
    <form className='create' onSubmit={handleSubmit}>
        <h3> Add a new Workout</h3>
        <label>
            Excercide Title:
        </label>
        <input type='text'
        onChange={(e)=>setTitle(e.target.value)}
        value={title}>
        </input>
        <label>
             Load (in KG):
        </label>
        <input type='number'
         onChange={(e)=>setLoad(e.target.value)}
         {...console.log(load)}
         value={load}>
        </input>
        <label>
             Reps:
        </label>
        <input type='number'
         onChange={(e)=>setReps(e.target.value)}
         value={reps}>
        </input>
        <button>
            Add Workout
        </button>
    </form>
  )
}

export default WorkoutForm