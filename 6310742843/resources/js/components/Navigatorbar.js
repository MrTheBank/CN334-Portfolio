import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Navbar} from "react-bootstrap";

function Navigatorbar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><h3>Pukkanun</h3></Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Navigatorbar;

if (document.getElementById('navbar')) {
    ReactDOM.render(<Navigatorbar />, document.getElementById('navbar'));
}
