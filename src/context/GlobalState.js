import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    workouts: []
}

// Create Context
export const GlobalContext = createContext(initalState);

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = ussReducer(AppReducer, initalState);

    // Actions
    const removeWorkout = (id) => {
        dispatch({
            type: 'REMOVE_WORKOUT',
            payload: id
        })
    }

    const addWorkout = (workout) => {
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
            addWorkout,
            editWorkout
        }} >
        { children }
        </GlobalContext.Provider >
    )
}