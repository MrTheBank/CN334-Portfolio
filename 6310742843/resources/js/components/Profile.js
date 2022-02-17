import React from 'react';
import ReactDOM from 'react-dom';
import {Image} from "react-bootstrap";


function Profile() {
    return (
        <Image src={"https://picsum.photos/800/600"}/>
    );
}

export default Profile;

if (document.getElementById('profile')) {
    ReactDOM.render(<Profile />, document.getElementById('profile'));
}
