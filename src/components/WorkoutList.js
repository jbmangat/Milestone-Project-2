import React, { useContext, useSyncExternalStore } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";

export const WorkoutList = () => {
    const { workouts, removeWorkout } = useContext(GlobalContext);
    console.log(workouts)
    return (
        <ListGroup className="mt-4">
            {workouts.map(workout => (
                <ListGroupItem className="d-flex">
                    {users.length > 0 ? (<>
                    </>)
                    : ()}
                    <strong>{workout.name}</strong>
                    <div className="ml-auto">
                        <Link className="btn btn-warning mr-1" to={`/edit/${user.id}`}>
                            Edit
                        </Link>
                        <Button onCLick={() => removeWorkout(workout.id)} color="danger">Delete</Button>
                    </div>
                </ListGroupItem>
            ))}
        </ListGroup>
    );
};
