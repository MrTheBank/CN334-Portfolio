import React from 'react';
import ReactDOM from 'react-dom';
import { FcSimCardChip, FcMindMap, FcElectronics, FcBarChart, FcPuzzle } from "react-icons/fc";
import {ListGroup} from "react-bootstrap";

function AboutmeIcon() {
    return (
        <ListGroup>
            <ListGroup.Item> <h1> <FcSimCardChip/> </h1> <span style={{ fontSize:"20px", color:"#292929"}}>AI</span> <span style={{ fontSize:"14px", color:"#999999"}}><br/>Artificial Intelligence is a big part of the automation industry Augmented Reality is growing rapidly.<br/>Blockchain is witnessing demand from the Retail Industry.</span> </ListGroup.Item>
            <ListGroup.Item> <h1> <FcMindMap/> </h1> <span style={{ fontSize:"20px", color:"#292929"}}>MACHINE LEARNING</span> <span style={{ fontSize:"14px", color:"#999999"}}><br/>Machine learning play a big part in technology advancement and I can do it all with my wrist and so can you.<br/>Over the years I've been searching for the perfect smartwatch and have pretty much given up. The Apple Watch Series 3 has changed that. I'm now using a basic Tizen.</span> </ListGroup.Item>
            <ListGroup.Item> <h1> <FcElectronics/> </h1> <span style={{ fontSize:"20px", color:"#292929"}}>DEEP LEARNING</span> <span style={{ fontSize:"14px", color:"#999999"}}><br/>Deep learning play is one of my many skills. And that's why I have been asked to write this article.<br/>(We'll see about the others.) When I began to work with deep learning algorithms, it occurred to me that there was a demand for job opportunities all over the world.</span> </ListGroup.Item>
            <ListGroup.Item> <h1> <FcBarChart/> </h1> <span style={{ fontSize:"20px", color:"#292929"}}>ANALYTICS</span> <span style={{ fontSize:"14px", color:"#999999"}}><br/>Analytics is my specialty. I have experience in data analysis. I can take your investment ideas to the next level.</span> </ListGroup.Item>
            <ListGroup.Item> <h1> <FcPuzzle/> </h1> <span style={{ fontSize:"20px", color:"#292929"}}>3D MODELING</span> <span style={{ fontSize:"14px", color:"#999999"}}><br/>3D MODELING is my passion. What I LOVE is to create the realness in the 3D world.<br/>Through out my entire career I have seen the evolution of software and toys evolving to keep up with the kids in their world. </span> </ListGroup.Item>
        </ListGroup>
    );
}

export default AboutmeIcon;

if (document.getElementById('icon')) {
    ReactDOM.render(<AboutmeIcon />, document.getElementById('icon'));
}
