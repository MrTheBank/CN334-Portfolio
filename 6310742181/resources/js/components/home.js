import React from 'react';
import ReactDOM from 'react-dom';
import Particles from 'react-tsparticles';
import * as particles from '../json/home_tsparticles.json';
import TypeIt from 'typeit-react';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Particles id="tsparticles" options={ particles }/>
                <div className="d-flex align-items-center justify-content-center home-full-height">
                    <div className="text-center">
                        <h1 className="home-title display-4"><TypeIt
                            options={{
                                speed: 50,
                                afterComplete: async function (instance) {
                                    instance.destroy();
                                }
                            }}
                            getBeforeInit={(instance) => {
                                instance
                                    .type('Ponat')
                                    .move(-2)
                                    .type('lap')
                                    .move(null, { to: "END" })
                                    .type(' Ittiratchapong')
                                ;
                                return instance;
                            }}
                        /></h1>
                        <h2 className="home-subtitle display-6"><TypeIt
                            options={{ loop: true }}
                            getBeforeInit={(instance) => {
                                instance
                                    .pause(1800)
                                    .type('I\'m studnet')
                                    .delete(3, {delay: 100})
                                    .pause(100)
                                    .type('ent at ', {delay: 100})
                                    .type('<span class="text-thammasat font-weight-bold">Thammasat</span>')
                                    .type(' <span class="text-university font-weight-bold">University</span>', {delay: 100})
                                    .pause(1500)
                                ;
                                return instance;
                            }}
                        /></h2>
                        <div className="home-button">
                            <a type="button" className="btn btn-outline-light btn-xlg btn-rounded">About Me</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;

if (document.getElementById('home')) {
    ReactDOM.render(<Home />, document.getElementById('home'));
}
