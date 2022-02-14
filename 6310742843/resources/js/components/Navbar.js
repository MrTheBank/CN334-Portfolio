import React from 'react';
import ReactDOM from 'react-dom';

function Navbar() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Laravel + React</div>

                        <div className="card-body">I'm Laravel + React Project!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

if (document.getElementById('navbar')) {
    ReactDOM.render(<Navbar />, document.getElementById('navbar'));
}
