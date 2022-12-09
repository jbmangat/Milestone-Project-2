import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    workouts: []
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    const removeWorkout = (id) => {
        dispatch({
            type: 'REMOVE_WORKOUT',
            payload: id
        })
    }

    const addWorkouts = (workout) => {
        dispatch({
            type: 'ADD_WORKOUT',
            payload: workout
        })
    }

    const editWorkout = (workout) => {
        dispatch({
            type: 'EDIT_WORKOUT',
            payload: workout
        })
    }

    return (
        <GlobalContext.Provider value={{
            workouts: state.workouts,
            removeWorkout, 
            addWorkouts,
            editWorkout
        }} >
        { children }
        </GlobalContext.Provider >
    )
}