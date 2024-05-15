import React, { useState, useEffect } from 'react'
import "./WorkoutForm.css"
const WorkoutForm = ({ fun }) => {

    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)


    const handleSubmit = async (e) => {

        e.preventDefault();
        const workout = { title, load, reps }

        //fetch request  to post a now data

        const responce = await fetch("/api/workouts", {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'content-Type': "application/json"
            }
        })
        const json = await responce.json()
        fun("");

        if (!responce.ok) {
            setError(json.error)
        }

        if (responce.ok) {
            setTitle('')
            setLoad('')
            setReps('')
            setError(null);
            console.log('new workout added ', json)
        }



    }

    useEffect(() => {
        fun()
    }, [title])


    return (
        <form style={{ display: "flex", flexDirection: "column", marginLeft: "30%" }} className='create' onSubmit={handleSubmit}>
            <h2 style={{ color: "green" }}> Add a new Workout</h2>
            <label>
                Excercide Title:
            </label>
            <input type='text'
                onChange={(e) => setTitle(e.target.value)}
                value={title}>
            </input>
            <label>
                Load (in KG):
            </label>
            <input type='number'
                onChange={(e) => setLoad(e.target.value)}
                value={load}>
            </input>
            <label>
                Reps:
            </label>
            <input type='number'
                onChange={(e) => setReps(e.target.value)}
                value={reps}>
            </input>
            <button className='btn'>
                Add Workout
            </button>
            {error && <div style={{ color: "red" }} className='error'>{error}</div>}
        </form>
    )
}

export default WorkoutForm