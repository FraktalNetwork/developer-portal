import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Row from '@material-ui/core/Button'
import Col from '@material-ui/core/Button'


import LandingLeft from "../../../components/Shared/landingleft";

import Image from "../../../images/hosting/1.png";


export default function Landing2() {
  return (
    <React.Fragment>
<section>
    <Container className="bg-light">
        <Row className="">
            <Col lg="4">
                <div className="section-title">
                    <LandingLeft
                    desc = "Learn how to contribute to Fraktal, build your own applications powered by Fraktal Network, and become a staking validator."

                    class = "mdi-18px h5 mr-2"
                    >
                        <h4 className="title mb-4">Fraktal Developer Portal</h4>

                    </LandingLeft>


                </div>

            </Col>

            <Col lg="8" md="8">

                <img src={Image} className="developerlandingimage" alt="" />

            </Col>



        </Row>
    </Container>
    </section>
    </React.Fragment>
  );
}
