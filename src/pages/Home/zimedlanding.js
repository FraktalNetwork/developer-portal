import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Typist from 'react-typist';

//import images
import enterprise from '../../zimedassets/images/background/banner-bg-1-1.png';
import shape1 from '../../zimedassets/images/shapes/banner-shapes-1-1.png';
import shape2 from '../../zimedassets/images/shapes/banner-shapes-1-2.png';
import shape3 from '../../zimedassets/images/shapes/banner-shapes-1-3.png';
import shape4 from '../../zimedassets/images/shapes/banner-shapes-1-4.png';
import shape5 from '../../zimedassets/images/shapes/banner-shapes-1-5.png';
import shape6 from '../../zimedassets/images/shapes/banner-shapes-1-6.png';
import shape7 from '../../zimedassets/images/shapes/banner-shapes-1-7.png';

class ZimedLanding extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="banner-one" id="banner" style={{ backgroundImage: `url(${enterprise})` }}>
                <img src={shape1} alt="" className="banner-one__shape-1" />
                <img src={shape2} alt="" className="banner-one__shape-2" />

                <img src={shape4} alt="" className="banner-one__shape-4" />
                <img src={shape5} alt="" className="banner-one__shape-5" />
                <img src={shape6} alt="" className="banner-one__shape-6 myImage" />
                <img src={shape7} alt="" className="banner-one__shape-7" />
                <div className="container">
                    <img src={shape3} alt="" className="banner-one__shape-moc-1 myImage2"/>
                                <Row>
                                    <Col lg="7">
                                        <div className="banner-one__contentg">

                                            <h1 className="display-4 slogan-light"><Typist>
                                            <span> Make a Difference.</span>
                                            <Typist.Backspace count={18} delay={1100} />

                                            <span>Start Today.</span>
                                            </Typist></h1>

                                            <div className="mt-4 pt-2">
                                                <a href="https://community.fraktal.network" target="_blank" className="btn btn-primary landingbutton">Join Fraktal</a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                </section>

            </React.Fragment>
        );
    }
}

export default ZimedLanding;
