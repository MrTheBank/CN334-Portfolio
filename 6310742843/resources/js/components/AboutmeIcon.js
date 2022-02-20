import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FcSimCardChip, FcMindMap, FcElectronics, FcBarChart, FcPuzzle } from "react-icons/fc";
import {ListGroup} from "react-bootstrap";
import axios from 'axios';

class AboutmeIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: []
        };
    }

    componentDidMount() {
        axios.get(`/api/skills`)
            .then(res => {
                const skills = res.data;
                this.setState({ skills });
            })
    }

    render() {
        const { skills } = this.state;

        return (
            <ListGroup>
                {skills.map(i => (
                    <ListGroup.Item key={i.id}><span style={{ fontSize:"20px", color:"#292929"}}>{i.name}</span> <span style={{ fontSize:"14px", color:"#999999"}}><br/>{i.description}</span> </ListGroup.Item>
                ))}
            </ListGroup>
        )
    }
}

export default AboutmeIcon;

if (document.getElementById('icon')) {
    ReactDOM.render(<AboutmeIcon />, document.getElementById('icon'));
}
