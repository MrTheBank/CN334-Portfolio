import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import AOS from 'aos';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: []
        };
    }

    componentDidMount() {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
        });

        axios.get(`${this.props.apiSrc}/skills`)
            .then(res => {
                const skills = res.data;
                this.setState({ skills });
            })
    }

    render() {
        const { skills } = this.state;

        return (
            <div>
                <section className="about">
                    <div className="container">
                        <div className="section-title" data-aos="fade-down">
                            <h1>About</h1>
                            <p>Hello! My name is Ponlapat Ittiratchapong. I'm living in Thailand. Now I'm studying software engineering at Thammasat University. My interest in web development started back in 2017 when I don't like Wordpress so I try and create my website by myself.</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-4" data-aos="fade-right">
                                <img srcSet={ this.props.imageSrc} className="img-fluid"/>
                            </div>
                            <div className="col-lg-8 content" data-aos="fade-left">
                                <h3>Full Stack Developer & System Engineer</h3>
                                <p>I'm good in web development and computer configuration.</p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><b>Birthday: </b> 28 November 2001</li>
                                            <li><b>Website: </b> mrthebank.github.io</li>
                                            <li><b>Phone: </b> +66928843544</li>
                                            <li><b>City: </b> Pathum Thani, Thailand</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><b>Age: </b> 20</li>
                                            <li><b>Degree: </b> Undergraduate</li>
                                            <li><b>Email: </b> ponlapat.itt@dome.tu.ac.th</li>
                                            <li><b>University: </b> Thammasat University</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="skills">
                    <div className="container">
                        <div className="section-title" data-aos="fade-down">
                            <h1>Skills</h1>
                            <p>This is my skill that I have experiment and working with these technologies.</p>
                        </div>
                        <div className="row skills-content" data-aos="zoom-in">
                            {skills.map(i => (
                                <div className="col-lg-6" key={i.id}>
                                    <div className="progress">
                                        <span className="skill">{i.name} <i className="val">{i.percentage}%</i></span>
                                        <div className="progress-bar-wrap">
                                            <div className="progress-bar" role="progressbar" style={{width: i.percentage + '%'}} aria-valuenow={i.percentage} aria-valuemin="0" aria-valuemax="100"/>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default About;

if (document.getElementById('about')) {
    const component = document.getElementById('about');
    const props = Object.assign({}, component.dataset);

    ReactDOM.render(<About {...props}/>, document.getElementById('about'));
}
