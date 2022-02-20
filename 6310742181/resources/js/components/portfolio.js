import React from 'react';
import ReactDOM from 'react-dom';
import AOS from 'aos';
import axios from 'axios';
import { Modal } from 'mdb-ui-kit';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: 'all',
            categories: [],
            portfolios: [],
            portfolio_item: {
                album_url: []
            },
            modal: null,
        };
    }

    componentDidMount() {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
        });

        let modal = new Modal(this.refs.PortfolioModel);

        this.setState({ modal: modal })

        axios.get(`${this.props.apiSrc}/categories`)
            .then(res => {
                this.setState({ categories: res.data });
            });
        this.changeFilter('all', 0);
    }

    changeFilter(name, id) {
        this.setState({ portfolios: [] });

        const path = name !== 'all' ? 'categories/' + id : 'portfolios';

        this.setState({ filter: name });
        axios.get(`${this.props.apiSrc}/${path}`)
            .then(res => {
                this.setState({ portfolios: res.data });
            });
    }

    activeFilter(name) {
        return this.state.filter === name ? 'filter-active' : '';
    }

    getPortfolio(id) {
        axios.get(`${this.props.apiSrc}/portfolios/${id}`)
            .then(res => {
                this.setState({ portfolio_item: {
                        album_url: JSON.parse(res.data.album_url),
                        background_url: res.data.background_url,
                        description: res.data.description,
                        id: res.data.id,
                        title: res.data.title,
                    }
                });
            });

        this.state.modal.show();
    }

    render() {
        const { categories, portfolios, portfolio_item } = this.state;

        return (
            <div>
                <section className="portfolio">
                    <div className="container">
                        <div className="section-title" data-aos="fade-down">
                            <h1>Portfolio</h1>
                            <p>This is my portfolio that shown my project that I have built it or competition that I have attended.</p>
                        </div>
                        <div>
                            <ul className="filter">
                                <li className={this.activeFilter('all')} onClick={() => this.changeFilter('all', 0)}>All</li>
                                {categories.map(i => (
                                    <li className={this.activeFilter(i.name)} key={i.id} onClick={() => this.changeFilter(i.name, i.id)}>{i.name}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="row">
                            {portfolios.map(i => (
                                <div className="col-lg-4 col-md-6 pb-4 portfolio-item" data-aos="zoom-in" key={i.id}>
                                    <img srcSet={i.background_url} onClick={() => this.getPortfolio(i.id)} alt=""/>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="modal fade" ref="PortfolioModel" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{portfolio_item.title}</h5>
                                <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"/>
                            </div>
                            <div className="modal-body">
                                <div id="carouselControls" className="carousel slide" data-mdb-ride="carousel">
                                    <div className="carousel-inner">
                                        {portfolio_item.album_url.map(function (i, index) {
                                                let cls = (index === 0) ? 'active' : '';

                                                return  <div className={"carousel-item " + cls} key={index}>
                                                    <img srcSet={i} className="d-block w-100" alt={portfolio_item.title}/>
                                                </div>
                                            }
                                        )}
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-mdb-target="#carouselControls" data-mdb-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"/>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-mdb-target="#carouselControls" data-mdb-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="mt-2">
                                    <h2 className="text-center">{portfolio_item.title}</h2>
                                    <p className="lead">{portfolio_item.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;

if (document.getElementById('portfolio')) {
    const component = document.getElementById('portfolio');
    const props = Object.assign({}, component.dataset);

    ReactDOM.render(<Portfolio {...props}/>, document.getElementById('portfolio'));
}
