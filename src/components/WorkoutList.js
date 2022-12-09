import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";

export const WorkoutList = () => {
    return (
        <ListGroup className="mt-4">
            <ListGroupItem className="d-flex">
                <strong>Workout Item</strong>
                <div className="ml-auto">
                    <Link className="btn btn-warning mr-1" to="/edit/1">
                        Edit
                    </Link>
                    <Button color="danger">Delete</Button>
                </div>
            </ListGroupItem>
        </ListGroup>
    );
};
