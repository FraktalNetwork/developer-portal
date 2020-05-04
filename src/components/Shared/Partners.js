import React, { Component } from 'react';
import { Row, Col } from "reactstrap";

//Import Images
import cosmos from "../../images/partners/cosmos.png";
import mybit from "../../images/partners/mybit.png";
import tendermint from "../../images/partners/tendermint.png";

//Margin applied to each image. So it remains constant with different screen sizes.
//If alignment is off it is most likely because total number of images is not evenly divisible by columns for that size screen.

class Partners extends Component {
    render() {
        return (
            <React.Fragment>
                        <Row className="justify-content-center" id="partners">
                            <Col id="partner1" lg="2" md="2" sm="3" xs="4" className="text-center partnerLogos">
                                <img src={tendermint} className="avatar avatar-ex-sm" alt=""/>
                            </Col>

                            <Col id="partner2" lg="2" md="2" sm="3" xs="4" className="text-center partnerLogos">
                                <img src={tendermint} className="avatar avatar-ex-sm" alt=""/>
                            </Col>

                            <Col id="partner3" lg="2" md="2" sm="3" xs="4" className="text-center partnerLogos">
                                <img src={tendermint} className="avatar avatar-ex-sm" alt=""/>
                            </Col>
                            <Col id="partner4" lg="2" md="2" sm="3" xs="4" className="text-center partnerLogos">
                                <img src={tendermint} className="avatar avatar-ex-sm" alt=""/>
                            </Col>
                            <Col id="partner5" lg="2" md="2" sm="3" xs="4" className="text-center partnerLogos">
                                <img src={tendermint} className="avatar avatar-ex-sm" alt=""/>
                            </Col>
                            <Col id="partner6" lg="2" md="2" sm="3" xs="4" className="text-center partnerLogos">
                                <img src={tendermint} className="avatar avatar-ex-sm" alt=""/>
                            </Col>

                            </Row>

                            <Row className="justify-content-center" id="partners2">

                            <Col id="partner1" lg="2" md="2" sm="3" xs="4" className="text-center partnerLogos">
                                <img src={tendermint} className="avatar avatar-ex-sm" alt=""/>
                            </Col>

                            <Col id="partner2" lg="2" md="2" sm="3" xs="4" className="text-center partnerLogos">
                                <img src={tendermint} className="avatar avatar-ex-sm" alt=""/>
                            </Col>

                            <Col id="partner3" lg="2" md="2" sm="3" xs="4" className="text-center partnerLogos">
                                <img src={tendermint} className="avatar avatar-ex-sm" alt=""/>
                            </Col>
                            <Col id="partner4" lg="2" md="2" sm="3" xs="4" className="text-center partnerLogos">
                                <img src={tendermint} className="avatar avatar-ex-sm" alt=""/>
                            </Col>
                            <Col id="partner5" lg="2" md="2" sm="3" xs="4" className="text-center partnerLogos">
                                <img src={tendermint} className="avatar avatar-ex-sm" alt=""/>
                            </Col>
                            <Col id="partner6" lg="2" md="2" sm="3" xs="4" className="text-center partnerLogos">
                                <img src={tendermint} className="avatar avatar-ex-sm" alt=""/>
                            </Col>

                            </Row>

                            <Row className="justify-content-center" id="partners">

                            <Col id="partner1" lg="2" md="2" sm="3" xs="4" className="text-center partnerLogos">
                                <img src={tendermint} className="avatar avatar-ex-sm" alt=""/>
                            </Col>

                            <Col id="partner2" lg="2" md="2" sm="3" xs="4" className="text-center partnerLogos">
                                <img src={tendermint} className="avatar avatar-ex-sm" alt=""/>
                            </Col>

                            <Col id="partner3" lg="2" md="2" sm="3" xs="4" className="text-center partnerLogos">
                                <img src={tendermint} className="avatar avatar-ex-sm" alt=""/>
                            </Col>
                            <Col id="partner4" lg="2" md="2" sm="3" xs="4" className="text-center partnerLogos">
                                <img src={tendermint} className="avatar avatar-ex-sm" alt=""/>
                            </Col>
                            <Col id="partner5" lg="2" md="2" sm="3" xs="4" className="text-center partnerLogos">
                                <img src={tendermint} className="avatar avatar-ex-sm" alt=""/>
                            </Col>
                            <Col id="partner6" lg="2" md="2" sm="3" xs="4" className="text-center partnerLogos">
                                <img src={tendermint} className="avatar avatar-ex-sm" alt=""/>
                            </Col>



                        </Row>
            </React.Fragment>
        );
    }
}

export default Partners;
