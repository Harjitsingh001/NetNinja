import React, { useReducer } from 'react'
import { createContext } from 'react'

const WorkoutContext= createContext();

 export const WorkoutContextProvider = ({children }) => {

  const[state,dipatch] = useReducer();
  
  return (
    <WorkoutContext.Provider  >
        {children}
    </WorkoutContext.Provider>
  )
}

export default WorkoutContextProvider