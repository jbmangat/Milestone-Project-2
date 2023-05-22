import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavbarBrand, Container } from "react-bootstrap";

export const Heading = () => {
    return (
        <Navbar>
            <Container>
                <NavbarBrand href="/">Home</NavbarBrand>
                <Nav>
                    <NavItem>
                        <Link className="btn btn-primary" to="/add">
                            Add Workout
                        </Link>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    );
};
