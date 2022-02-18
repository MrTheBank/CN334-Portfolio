import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {Card} from "react-bootstrap";
import TypeIt from "typeit-react";

function Aboutme() {

    return (
        <Card className="bg-dark text-white">
            <Card.Img src="https://picsum.photos/1980/1080" alt="Card image" />
            <Card.ImgOverlay style={{ paddingTop:"25vh"}}>
                    <Card.Title style={{ textIndent:"25vh" }}><h1><b><TypeIt options={{ speed:150, waitUntilVisible: true}}>I'M PUKKANUN SOMBUTTHAI</TypeIt></b></h1></Card.Title>
                    <Card.Text style={{ textIndent:"25vh", color:"#ECECEC"}}>3D DESIGNER, DEVELOPER</Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
}

export default Aboutme;

if (document.getElementById('aboutme')) {
    ReactDOM.render(<Aboutme />, document.getElementById('aboutme'));
}
