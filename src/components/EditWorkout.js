import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "react-bootstrap";

export const EditWorkout = (props) => {
    const [selectedWorkout, setSelectedWorkout] = useState({
        id: '',
        name: ''
    });
    const { workouts, editWorkout } = useContext(GlobalContext);

    const history = useHistory();

    const currentWorkoutId = props.match.params.id; 

    useEffect(() => {
        const workoutId = currentWorkoutId;
        const selectedWorkout = workouts.find(workout => workout.id === workoutId)
        setSelectedWorkout(selectedWorkout)
    }, [currentWorkoutId, workouts])

    const onSubmit = () => {
        editWorkout(selectedWorkout)
        history.push('/');
    }

    const onChange = (e) => {
        setSelectedWorkout({...selectedWorkout, [e.target.name]: e.target.value})
    }

    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Workout</Label>
                <Input type="text" name="name" value={selectedWorkout.name} onChange={onChange} placeholder="Edit Workout Name"></Input>
            </FormGroup>
            <Button type="submit">Edit Name</Button>
            <Link to="/" className="btn btn-danger ml-2">
                Cancel
            </Link>
        </Form>
    );
};
