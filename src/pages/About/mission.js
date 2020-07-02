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
                  <section className="section bg-light">
                      <Container>
                          <Row className="align-items-center">
                          <Col md={{size:6, order:1}} xs={{order:1}}>
                              <img src={aboutimage} className="img-fluid" alt="" />
                          </Col>
                              <Col md={{size:6, order:2}} xs={{order:2}} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                  <div className="section-title mr-lg-5">
                                    {/*  <h4 className="title mb-4">Our Vision</h4> */}
                                    <p>We achieve our mission by creating an environment where individuals and companies (those) who are passionate about enacting change can effectively work together to produce cutting edge technology and deliver it to those who can benefit from it the most.</p>
                                
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
