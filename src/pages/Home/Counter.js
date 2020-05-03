// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

//Import Counter Box
import CounterBox from "./counter-box";

//Import Partners section
import Partners from '../../components/Shared/Partners';

// Import images
import laptop from '../../images/laptop.png';
import partners from '../../images/partners.png';


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
                        <div className="section-title counterTitle">
                            <h4 className="title mb-4">Ecosystem</h4>
                            <p className="text-muted counterText">Bringing financial services to billions of people across the globe is tough work and we can’t do it alone! If you support our mission and want to contribute, join the Fraktal Community and we will find the perfect role for you to have maximum impact. </p>

                            </div>

                            <Row className="align-items-center " md={{size:6, order:1}} xs={{order:2}}>




                            </Row>
                        </Container>

                        <Container className="mt-100 mt-60">
                            <Row className="justify-content-center counterBlocks" id="counter">
                                <CounterBox counters={this.state.counters} />
                            </Row>
                        </Container>

                        <Container className="mt-100 mt-60 partnerLogos">
                              <Partners />
                        </Container>



                    </section>





            </React.Fragment>
        );
    }
}

export default Counter;
