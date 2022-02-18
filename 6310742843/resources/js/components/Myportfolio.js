import React from 'react';
import ReactDOM from 'react-dom';
import {Button, ButtonGroup} from "react-bootstrap";

function Myportfolio() {

    return (
        <ButtonGroup>
            <Button variant="light" style={{ color:"#999999" }}>All</Button>
            <Button variant="light" style={{ color:"#999999" }}>3D Model</Button>
            <Button variant="light" style={{ color:"#999999" }}>Programming</Button>
            <Button variant="info"><b>+</b></Button>
        </ButtonGroup>
    );
}

export default Myportfolio;

if (document.getElementById('portfolio')) {
    ReactDOM.render(<Myportfolio />, document.getElementById('portfolio'));
}
