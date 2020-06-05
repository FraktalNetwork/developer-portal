// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

//import images
import youtube from '../../images/illustrator/youtube-media.svg';

class Blog extends Component {

    render() {
        return (
            <React.Fragment>
                <section className="section">
                    <Container>
                        <Row className="align-items-center eventblock">


                            <Col lg="7" md="6" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="section-title  ml-lg-4">
                                    <h4 className="title mb-4">Latest News</h4>
                                    <p className="text-muted">Our community is always growing and there is never a dull moment! The Fraktal Blog is a great place to learn about the project and stay up to date. </p>
                                    <Link to="#" className="btn btn-primary mt-3">Dive in!</Link>
                                </div>
                            </Col>

                            <Col lg="5" md="6" xs="12">
                                <img src={youtube} className="img-fluid rounded" alt="" />
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Blog;
