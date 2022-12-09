import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import { 
    ListGroup,
    ListGroupItem, 
    Button } from "reactstrap";

export const WorkoutList = () => {
    const { workouts, removeWorkout } = useContext(GlobalContext);
    console.log(workouts)
    return (
        <ListGroup className="mt-4">
        {workouts.length > 0 ? (
            <>
            {workouts.map(workout => (
                        <ListGroupItem className="d-flex">
                            <strong>{workout.name}</strong>
                            <div className="ml-auto">
                                <Link className="btn btn-warning mr-1" to={`/edit/${workout.id}`}>
                                    Edit
                                </Link>
                                <Button onCLick={() => removeWorkout(workout.id)} color="danger">Delete</Button>
                            </div>
                        </ListGroupItem>
                    ))}
                </>
            ) : (
                <h3>No Workouts</h3>
            )}
        </ListGroup>
    );
};
