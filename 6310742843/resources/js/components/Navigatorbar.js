import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Nav, Navbar} from "react-bootstrap";

function Navigatorbar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Our Portfolio</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Navigatorbar;

if (document.getElementById('navbar')) {
    ReactDOM.render(<Navigatorbar />, document.getElementById('navbar'));
}