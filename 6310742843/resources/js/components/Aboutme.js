import React from 'react';
import ReactDOM from 'react-dom';
import {Card} from "react-bootstrap";
import TypeIt from "typeit-react";
import { FaGithubSquare } from "react-icons/fa";
import {IconButton} from "@mui/material";

function Aboutme() {

    return (
        <Card className="bg-dark text-white">
            <Card.Img src="https://picsum.photos/1980/1080" alt="Card image" />
            <Card.ImgOverlay style={{ paddingTop:"25vh", textIndent:"25vh"}}>
                <Card.Title><h1><b><TypeIt options={{ speed:150, waitUntilVisible: true}}>I'M PUKKANUN SOMBUTTHAI</TypeIt></b></h1></Card.Title>
                <Card.Text style={{ color:"#ECECEC"}}>3D DESIGNER, DEVELOPER</Card.Text>
                <Card.Text>
                    <IconButton href={"https://github.com/kim-pukkanun"}><FaGithubSquare fontSize={50}/></IconButton>
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
}

export default Aboutme;

if (document.getElementById('aboutme')) {
    ReactDOM.render(<Aboutme />, document.getElementById('aboutme'));
}

