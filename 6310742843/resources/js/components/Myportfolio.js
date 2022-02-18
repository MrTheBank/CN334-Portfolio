import React from 'react';
import ReactDOM from 'react-dom';
import {Button, ButtonGroup, Form} from "react-bootstrap";

function Myportfolio() {
    const addimage = () => {
        alert("Help")
    }
    return (
        <ButtonGroup>
            <Button variant="light" style={{ color:"#999999" }}>All</Button>
            <Button variant="light" style={{ color:"#999999" }}>3D Model</Button>
            <Button variant="light" style={{ color:"#999999" }}>Programming</Button>
        </ButtonGroup>
    );
}

export default Myportfolio;

if (document.getElementById('portfolio')) {
    ReactDOM.render(<Myportfolio />, document.getElementById('portfolio'));
}

