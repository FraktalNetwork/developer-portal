// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Alert, FormGroup, Input, InputGroup, InputGroupAddon, Button, Card, CardBody } from 'reactstrap';

//Import Components


//Import Images
import aboutimage from '../../images/illustrator/enterprise.png';

class Mission extends Component {



    render() {
        return (
            <React.Fragment>
                <section className="section">
                    <Container>
                        <Row className="align-items-center">
                            <Col md="6">
                                <img src={aboutimage} className="mr-md-4" alt="" />
                            </Col>

                            <Col md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="section-title ml-lg-5">
                                    <h4 className="title mb-4">Clean And Modern Code</h4>
                                    <p className="text-muted">This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic.</p>
                                    <Link to="#" className="btn btn-outline-primary">Start Now <i className="mdi mdi-chevron-right"></i></Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>




                </section>
            </React.Fragment>
        );
    }
}

export default Mission;
