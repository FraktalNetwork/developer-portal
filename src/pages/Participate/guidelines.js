// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

// import images


class GuideLines extends Component {

    render() {
        return (
            <React.Fragment>
                <section className="section pt-0">
                    <Container>
                        <Row className="align-items-center">

                            <Col lg="12" md="12" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="section-title ml-lg-4">
                                    <h4 className="title mb-4">Guidelines</h4>
                                    <p className="text-muted">Fraktal makes it easy for everyone to contribute. You do not have to be a developer or highly skilled in a specific field. There are opportunties for everyone to help Fraktal grow and transform the world!</p>
                                    <p className="text-muted">Unlike most projects, Fraktal does not have an ICO or public token offering. The only way to receive tokens is by contributing. </p>
                                    <p>How we Work</p>
                                    <ul className="list-unstyled feature-list mb-0 text-muted">
                                        <li><i className="mdi mdi-chevron-right text-success mr-2"></i>No Stress</li>
                                        <li><i className="mdi mdi-chevron-right text-success mr-2"></i>No Pressure</li>
                                        <li><i className="mdi mdi-chevron-right text-success mr-2"></i>No Bottom Line Profit to worry about</li>
                                        <li><i className="mdi mdi-chevron-right text-success mr-2"></i>No Investors to Answer to</li>
                                        <li><i className="mdi mdi-chevron-right text-success mr-2"></i>No Egos</li>

                                    </ul>
                                    <p className="text-muted">Just the brightest minds and most dedicated people working together to do great things for the world.</p>
                                    <p>Instructions</p>
                                    <ul className="list-unstyled feature-list mb-0 text-muted">
                                        <li><i className="mdi mdi-chevron-right text-success mr-2"></i>There are 2 types of tasks. A fixecd price and a salaried position.</li>
                                        <li><i className="mdi mdi-chevron-right text-success mr-2"></i>The task manager is responsible for overseeing all of this and placing/removing people who are not fulfilling their duties and finding new ones.</li>
                                        <li><i className="mdi mdi-chevron-right text-success mr-2"></i>Salaried positions are paid monthly, at the end of the month.</li>
                                        <li><i className="mdi mdi-chevron-right text-success mr-2"></i>Fixed price tasks are paid after final work is submitted, published live, and tested/publicly reviewed for a period of 7 days. If no issues are found the funds are then paid out, otherwise they are paid after the issues are resolved and another review period is underwent.</li>
                                        <li><i className="mdi mdi-chevron-right text-success mr-2"></i>The Task manager is responsible for helping people work together. By breaking larger tasks into smaller pieces which everyone can work on together. It is up to the task manager to choose how the total task amount is paid out to people, proportionately based on their individual contribution.</li>

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

export default GuideLines;
