// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

//Import Counter Box
import CounterBox from "./counter-box";

// Import images
import laptop from '../../images/laptop.png';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counters : [
                { title : "Individuals Contributing", end : 5, postFix : "+", desc : "" },
                { title : "Partner Companies", end : 3, postFix : "", desc : "" },
                { title : "Applications Built", end : 0, postFix : "", desc : "" },
            ]
        }

    }
    render() {
        return (
            <React.Fragment>
                    <section className="section bg-light">
                        <Container>
                            <Row className="align-items-center " md={{size:6, order:1}} xs={{order:2}}>

                                    <div className="align-items-center section-title mr-lg-5 col-lg-8">
                                        <h4 className="title mb-4">Welcome to Fraktal</h4>
                                          <p className="text-muted">Fraktal is an ecosystem of individuals and companies who share the common belief that economic equality is a fundamental human right and are working to create a future where everyone has access to basic financial services.
                                          <br /> <br />
                                          Members of the Fraktal Ecosystem develop and deliver cutting edge technology to those who need it the most. Our products empower individuals across the globe
                                          </p>



                                    </div>



                            </Row>
                        </Container>

                        <Container className="mt-100 mt-60">
                            <Row className="justify-content-center" id="counter">
                                <CounterBox counters={this.state.counters} />
                            </Row>
                        </Container>
                    </section>
            </React.Fragment>
        );
    }
}

export default Counter;
