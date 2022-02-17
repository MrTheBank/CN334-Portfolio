import React from 'react';
import ReactDOM from 'react-dom';
import {Card} from "react-bootstrap";


function AboutmeDescription() {
    return (
        <Card>
            <Card.Body><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula nunc nibh, a tincidunt lacus volutpat porttitor. <br/>
                In commodo aliquet fringilla. Phasellus ac ante malesuada, dictum quam quis, tincidunt eros. <br/>
                Fusce tortor lacus, maximus sit amet elit in, rhoncus tristique lorem.</b></Card.Body>
            <Card.Body>Nulla venenatis, neque vitae convallis rhoncus, neque odio dignissim lorem, quis imperdiet leo turpis ut nunc.<br/>
                Integer eleifend vehicula tortor sed convallis. Praesent volutpat odio metus.</Card.Body>
        </Card>
    );
}

export default AboutmeDescription;

if (document.getElementById('descrip')) {
    ReactDOM.render(<AboutmeDescription />, document.getElementById('descrip'));
}
