// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

// import images


class About extends Component {

    render() {
        return (
            <React.Fragment>
                <section className="section pt-0">
                    <Container>
                        <Row className="align-items-center">
                            <Col lg="5" md="6" xs="12">
                                <img src="" className="img-fluid shadow rounded" alt="" />
                            </Col>
                            <Col lg="7" md="6" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="section-title ml-lg-4">
                                    <h4 className="title mb-4">Getting Involved is <span className="text-primary">Simple</span>!</h4>
                                    <p className="text-muted">Fraktal makes it easy for everyone to contribute. You do not have to be a developer or highly skilled in a specific field. There are opportunties for everyone to help Fraktal grow and transform the world!</p>
                                    <p className="text-muted">Unlike most projects, Fraktal does not have an ICO or public token offering. The only way to receive tokens is by contributing. </p>
                                    <p>Just follow these steps to start contributing and earning tokens!</p>
                                    <ul className="list-unstyled feature-list mb-0 text-muted">
                                        <li><i className="mdi mdi-chevron-right text-success mr-2"></i>If you have not yet done so join the community.</li>
                                        <li><i className="mdi mdi-chevron-right text-success mr-2"></i>Review the Guidelines below.</li>
                                        <li><i className="mdi mdi-chevron-right text-success mr-2"></i>Look under open tasks and apply or start working.</li>
                                    </ul>
                                    <Link to="#" className="btn btn-outline-primary mt-3">Explore Tasks</Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default About;
