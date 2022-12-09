import React from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "react-bootstrap";

export const EditWorkout = () => {
    return (
        <Form>
            <FormGroup>
                <Label>Workout</Label>
                <Input type="text" placeholder="Edit Workout Name"></Input>
            </FormGroup>
            <Button type="submit">Edit Name</Button>
            <Link to="/" className="btn btn-danger ml-2">
                Cancel
            </Link>
        </Form>
    );
};
