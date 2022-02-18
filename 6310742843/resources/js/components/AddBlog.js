import React from 'react';
import ReactDOM from 'react-dom';
import AddIcon from '@mui/icons-material/Add';
import {Fab} from "@mui/material";

function Addblog() {
    return (
        <Fab color="primary" aria-label="add">
            <AddIcon />
        </Fab>
    );
}

export default Addblog;

if (document.getElementById('addblog')) {
    ReactDOM.render(<Addblog />, document.getElementById('addblog'));
}

