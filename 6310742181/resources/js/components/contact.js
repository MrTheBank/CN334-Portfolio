import React from 'react';
import ReactDOM from 'react-dom';
import AOS from 'aos';

class Contact extends React.Component {
    componentDidMount() {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
        });
    }

    render() {
        return (
            <div>
                <div className="contact">
                    <div className="container">
                        <div className="section-title" data-aos="fade-down">
                            <h1>Contact Me</h1>
                            <p>Have any questions or wanted to hire me? You can contact me via e-mail or you can also send message form below.</p>
                        </div>
                        <div className="align-items-center flex-column row">
                            <div className="col-lg-8" data-aos="zoom-in">
                                <form>
                                    <div className="row mb-2">
                                        <div className="col-lg-6">
                                            <div>
                                                <label htmlFor="formName">Your name</label>
                                                <input type="text" name="name" id="formName" className="form-control form-control-lg"/>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div>
                                                <label htmlFor="formEmail">Your e-mail</label>
                                                <input type="email" name="email" id="formEmail" className="form-control form-control-lg"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="formSubject">Subject</label>
                                        <input type="text" name="subject" id="formSubject" className="form-control form-control-lg"/>
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="formMessage">Message</label>
                                        <textarea name="message" className="form-control" id="formMessage" rows="4"/>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-success btn-rounded btn-lg">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;

if (document.getElementById('contact')) {
    ReactDOM.render(<Contact/>, document.getElementById('contact'));
}
