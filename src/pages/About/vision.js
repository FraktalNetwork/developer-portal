// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';


// Import images
import aboutimage from '../../images/illustrator/enterprise.png';

class Vision extends Component {

    
    render() {
        return (
            <React.Fragment>
                    <section className="section bg-light">
                        <Container>
                            <Row className="align-items-center">
                                <Col md={{size:6, order:1}} xs={{order:2}} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <div className="section-title mr-lg-5">
                                        <h4 className="title mb-4">Get Notified About Importent Email</h4>
                                        <p className="text-muted">This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic.</p>
                                        <Link to="#" className="btn btn-outline-primary">Start Now <i className="mdi mdi-chevron-right"></i></Link>
                                    </div>
                                </Col>

                                <Col md={{size:6, order:2}} xs={{order:1}}>
                                    <img src={aboutimage} className="img-fluid" alt="" />
                                </Col>
                            </Row>
                        </Container>


                    </section>
            </React.Fragment>
        );
    }
}

export default Vision;
