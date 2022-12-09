import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import { Form, FormGroup, Label, Input, Button } from "react-bootstrap";

export const AddWorkout = () => {
    const [name, setName] = useState('');
    const { addWorkout } = useContext(GlobalContext);

    const history = useHistory();

    const onSubmit = () => {
        const newWorkout = {
            id: uuid(),
            name
        }
        addWorkout(newWorkout);
        history.push('/');
    }

    const onChange = (e) => {
        setName(e.target.value);
    }

    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Workout</Label>
                <Input type="text" value={name} onChange={onChange} placeholder="Enter Workout Name">
                </Input>
            </FormGroup>
            <Button type="submit">Submit</Button>
            <Link to="/" className="btn btn-danger ml-2">
                Cancel
            </Link>
        </Form>
    );
};
