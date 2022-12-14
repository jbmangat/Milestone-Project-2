import React from "react";
import { Container, Card, ListGroup} from 'react-bootstrap';

function Foot() {
    return (
        <>
            <Container fluid className="fixed-bottom">
                <Card variant="dark" bg="dark" className="mb-3">
                    <Card.Footer>
                        <medium className="text-muted">Created By:</medium>
                        <ListGroup horizontal className="justify-content-center my-2">
                            <ListGroup.Item variant="warning" action href="https://github.com/ashleyseg" target="_blank">Ashley Santoyo</ListGroup.Item>
                            <ListGroup.Item variant="warning" action href="https://github.com/jbmangat" target="_blank">Jagbir Mangat</ListGroup.Item>
                            <ListGroup.Item variant="warning" action href="https://github.com/jhaywood86" target="_blank">Jamaine Haywood</ListGroup.Item>
                            <ListGroup.Item variant="warning" action href="https://github.com/jesus7447" target="_blank">Jesus Camacho</ListGroup.Item>
                            <ListGroup.Item variant="warning" action href="https://github.com/jsan96" target="_blank">Joaquin Sanabria</ListGroup.Item>
                            <ListGroup.Item variant="warning" action href="https://github.com/n-jaramillo" target="_blank">Nikki Jaramillo</ListGroup.Item>
                        </ListGroup>
                    </Card.Footer>
                </Card>
            </Container>
        </>
    );
}

export default Foot;
