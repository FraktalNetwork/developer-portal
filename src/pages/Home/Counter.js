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

                                    <div className="align-items-center section-title mr-lg-5">
                                        <h4 className="title mb-4">Our Vibrant Ecosystem</h4>


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
