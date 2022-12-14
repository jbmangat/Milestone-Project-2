import React from "react";
import { Container, Navbar, Button, Card} from 'react-bootstrap';

function Nav() {

    // classList documentation
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/classList#wrapper
    // toggle day class to show selected date and workout container OR use addDayClass + removeDayClass functions

    return (
        <>
            <Container fluid>
                <Card variant="dark" bg="dark" >
                    <Navbar expand="lg" variant="dark" bg="dark" fixed="top" className="flex-column">
                        <Container fluid className="my-4">
                            <Button variant="warning">HOME</Button>{' '}
                            <Navbar.Brand href="#">Fitness App</Navbar.Brand>
                            <Button variant="warning">ADD WORKOUT</Button>{' '}
                        </Container>
                        <Container fluid className="mb-2">
                            <Button variant="warning">MONDAY</Button>{' '}
                            <Button variant="warning">TUESDAY</Button>{' '}
                            <Button variant="warning">WEDNESDAY</Button>{' '}
                            <Button variant="warning">THURSDAY</Button>{' '}
                            <Button variant="warning">FRIDAY</Button>{' '}
                            <Button variant="warning">SATURDAY</Button>{' '}
                            <Button variant="warning">SUNDAY</Button>{' '}
                        </Container>
                    </Navbar>
                </Card>
            </Container>
        </>
    );
}

export default Nav;
