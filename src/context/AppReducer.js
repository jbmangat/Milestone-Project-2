export default (state, action) => {
    switch (action.type) {
        case 'REMOVE_WORKOUT':
            return {
                workouts: state.workouts.filter(workout => {
                    return workout.id !== action.payload
                })
            }

        case 'ADD_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts]
            }

        case 'EDIT_WORKOUT':
            const updateWorkout = action.payload;

            const updateWorkouts = state.workouts.map(workout => {
                if(workout.id === updateWorkout.id) {
                    return updateWorkout;
                }
                return workout;
            })

            return {
                workouts: updateWorkouts
            }

        default:
            return state
    }
}