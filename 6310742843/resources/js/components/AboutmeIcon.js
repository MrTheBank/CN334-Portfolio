import React from 'react';
import ReactDOM from 'react-dom';
import { FcSimCardChip, FcMindMap, FcElectronics, FcBarChart, FcPuzzle } from "react-icons/fc";
import {ListGroup} from "react-bootstrap";

function AboutmeIcon() {
    return (
        <ListGroup>
            <ListGroup.Item> <h1> <FcSimCardChip/> </h1> <span style={{ fontSize:"20px", color:"#292929"}}>AI</span> <span style={{ fontSize:"14px", color:"#999999"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span> </ListGroup.Item>
            <ListGroup.Item> <h1> <FcMindMap/> </h1> <span style={{ fontSize:"20px", color:"#292929"}}>MACHINE LEARNING</span> <span style={{ fontSize:"14px", color:"#999999"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span> </ListGroup.Item>
            <ListGroup.Item> <h1> <FcElectronics/> </h1> <span style={{ fontSize:"20px", color:"#292929"}}>DEEP LEARNING</span> <span style={{ fontSize:"14px", color:"#999999"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span> </ListGroup.Item>
            <ListGroup.Item> <h1> <FcBarChart/> </h1> <span style={{ fontSize:"20px", color:"#292929"}}>ANALYTICS</span> <span style={{ fontSize:"14px", color:"#999999"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span> </ListGroup.Item>
            <ListGroup.Item> <h1> <FcPuzzle/> </h1> <span style={{ fontSize:"20px", color:"#292929"}}>3D MODELING</span> <span style={{ fontSize:"14px", color:"#999999"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span> </ListGroup.Item>
        </ListGroup>
    );
}

export default AboutmeIcon;

if (document.getElementById('icon')) {
    ReactDOM.render(<AboutmeIcon />, document.getElementById('icon'));
}
