import React from 'react';
import ReactDOM from 'react-dom';
import {Figure} from "react-bootstrap";


function Home() {
    return (
        <Figure>
            <Figure.Image
                width={171}
                height={500}
                alt="171x180"
                src="holder.js/171x180"
            />
        </Figure>
    );
}

export default Home;

if (document.getElementById('home')) {
    ReactDOM.render(<Home />, document.getElementById('home'));
}
