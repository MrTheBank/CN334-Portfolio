import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends React.Component {
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Contact;

if (document.getElementById('contact')) {
    ReactDOM.render(<Contact/>, document.getElementById('contact'));
}
