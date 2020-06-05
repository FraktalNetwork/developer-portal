import React, { Component } from 'react';
import { Row, Col } from "reactstrap";
import NumberCounter from 'number-counter';

class Counter extends Component {
    render() {
        return (
            <React.Fragment>
                                <Row className="ml-lg-5" id="counter">
                                    <Col md="6" xs="12">
                                        <Row>
                                            <Col xs="12" className="mt-4 pt-2">
                                                <div className="counter-box position-relative counter-border bg-green shadow rounded p-4 pt-5 pb-5 text-center">
                                                    <h2 className="mb-0">
                                                        <span className="counter-value">
                                                            <NumberCounter end={this.props.countervalue[0]} delay={4} postFix="+"/>
                                                        </span>
                                                    </h2>
                                                    <h5 className="counter-head text-light">Individuals Contributing</h5>
                                                </div>
                                            </Col>

                                            <Col xs="12" className="mt-4 pt-2">
                                                <div className="counter-box position-relative counter-border bg-indigo shadow rounded p-4 pt-5 pb-5 text-center">
                                                    <h2 className="text-light title-dark mb-0">
                                                        <span className="counter-value">
                                                            <NumberCounter end={this.props.countervalue[1]} delay={4} postFix=""/>
                                                        </span>
                                                    </h2>
                                                    <h5 className="counter-head title-dark text-light">Partner Companies</h5>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>

                                    <Col md="6" xs="12">
                                        <Row className="pt-lg-5 mt-lg-4">
                                            <Col xs="12" className="mt-4 pt-2">
                                                <div className="counter-box position-relative counter-border bg-success shadow rounded p-4 pt-5 pb-5 text-center">
                                                    <h2 className="text-light title-dark mb-0">
                                                        <span className="counter-value">
                                                            <NumberCounter end={this.props.countervalue[2]} delay={4} postFix=""/>
                                                        </span>
                                                    </h2>
                                                    <h5 className="counter-head title-dark text-light">Applications Built</h5>
                                                </div>
                                            </Col>

                                            <Col xs="12" className="mt-4 pt-2">
                                                <div className="counter-box position-relative counter-border bg-yellow shadow rounded p-4 pt-5 pb-5 text-center">
                                                    <h2 className="mb-0">
                                                        <span className="counter-value">
                                                            <NumberCounter end={this.props.countervalue[3]} delay={4} postFix=""/>
                                                        </span>
                                                    </h2>
                                                    <h5 className="counter-head">People Helped</h5>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
            </React.Fragment>
        );
    }
}

export default Counter;
