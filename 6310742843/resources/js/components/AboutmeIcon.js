import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FcSimCardChip,} from "react-icons/fc";
import {ListGroup} from "react-bootstrap";
import axios from 'axios';

function AboutmeIcon() {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        axios.get(`/api/skills`)
            .then(res => {
                setSkills(res.data);
            })
    }, []);

    return (
        <div>
            <h1 style={{ fontSize:"30px", paddingTop:"10px", paddingBottom:"10px" }} ><span><FcSimCardChip/></span><b>My Experience</b></h1>
            <ListGroup>
                {skills.map(i => (
                    <ListGroup.Item key={i.id}><span style={{ fontSize:"20px", color:"#292929"}}>{i.name}</span> <span style={{ fontSize:"14px", color:"#999999"}}><br/>{i.description}</span> </ListGroup.Item>
                ))}
            </ListGroup>
        </div>

    );
}

export default AboutmeIcon;

if (document.getElementById('icon')) {
    ReactDOM.render(<AboutmeIcon />, document.getElementById('icon'));
}
