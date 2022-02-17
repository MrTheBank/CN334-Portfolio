import React from 'react';
import ReactDOM from 'react-dom';
import { FcSimCardChip, FcMindMap, FcElectronics, FcBarChart, FcPuzzle } from "react-icons/fc";
import {ListGroup} from "react-bootstrap";

function AboutmeIcon() {
    return (
        <ListGroup>
            <ListGroup.Item> <h1> <FcSimCardChip/> </h1> <span style={{ fontSize:"20px"}}>AI</span> <span style={{ fontSize:"14px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span> </ListGroup.Item>
            <ListGroup.Item> <h1> <FcMindMap/> </h1> <span style={{ fontSize:"20px"}}>MACHINE LEARNING</span> <span style={{ fontSize:"14px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span> </ListGroup.Item>
            <ListGroup.Item> <h1> <FcElectronics/> </h1> <span style={{ fontSize:"20px"}}>DEEP LEARNING</span> <span style={{ fontSize:"14px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span> </ListGroup.Item>
            <ListGroup.Item> <h1> <FcBarChart/> </h1> <span style={{ fontSize:"20px"}}>ANALYTICS</span> <span style={{ fontSize:"14px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span> </ListGroup.Item>
            <ListGroup.Item> <h1> <FcPuzzle/> </h1> <span style={{ fontSize:"20px"}}>3D MODELING</span> <span style={{ fontSize:"14px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span> </ListGroup.Item>
        </ListGroup>
    );
}

export default AboutmeIcon;

if (document.getElementById('icon')) {
    ReactDOM.render(<AboutmeIcon />, document.getElementById('icon'));
}
