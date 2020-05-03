import React, { Component } from 'react';
import { Row, Col } from "reactstrap";

//Import Images
import cosmos from "../../images/partners/cosmos.png";
import mybit from "../../images/partners/mybit.png";
import tendermint from "../../images/partners/tendermint.png";


class Partners extends Component {
    render() {
        return (
            <React.Fragment>
                        <Row className="justify-content-center" id="partners">
                            <Col id="partner1" lg="2" md="2" xs="6" className="text-center">
                                <img src={cosmos} className="avatar avatar-ex-sm" alt=""/>
                            </Col>

                            <Col id="partner2" lg="2" md="2" xs="6" className="text-center">
                                <img src={mybit} className="avatar avatar-ex-sm" alt=""/>
                            </Col>

                            <Col id="partner3" lg="2" md="2" xs="6" className="text-center  mt-4 mt-sm-0">
                                <img src={tendermint} className="avatar avatar-ex-sm" alt=""/>
                            </Col>

                        </Row>
            </React.Fragment>
        );
    }
}

export default Partners;
