import React from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, FormLabel, FormCheckInput, Button } from "react-bootstrap";

export const EditWorkout = () => {
    return (
        <Form>
            <FormGroup>
                <FormLabel>Workout</FormLabel>
                <FormCheckInput type="text" placeholder="Edit Workout Name"></FormCheckInput>
            </FormGroup>
            <Button type="submit">Edit Name</Button>
            <Link to="/" className="btn btn-danger ml-2">
                Cancel
            </Link>
        </Form>
    );
};
 