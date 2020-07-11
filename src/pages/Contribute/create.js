// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

//import images
import youtube from '../../images/illustrator/youtube-media.svg';

class Create extends Component {

    render() {
        return (
            <React.Fragment>
                <section className="section">
                    <Container>
                        <Row className="align-items-center">


                            <Col lg="7" md="6" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="section-title  ml-lg-4">
                                    <h4 className="title mb-4">Create your own Task</h4>
                                    <p className="text-muted">If you are a developer or have an idea for how to contribute to Fraktal that is not listed above, discuss it with the Task Manager to have your own unique role created.</p>
                                {/*    <Link to="/Blog" className="btn btn-primary mt-3">Dive in!</Link> */}
                                </div>
                            </Col>



                            <Col lg="5" md="6" xs="12">
                                <a href="https://community.fraktal.network" target="_blank" className="btn btn-primary landingbutton taskbutton" alt="">Discuss Now</a>
                            </Col>
                        </Row>
                    </Container>


                </section>
            </React.Fragment>
        );
    }
}

export default Create;
