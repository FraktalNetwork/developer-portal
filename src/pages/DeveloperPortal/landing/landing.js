import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Row from '@material-ui/core/Button'
import Col from '@material-ui/core/Button'


import LandingLeft from "../../../components/Shared/landingleft";


export default function Landing() {
  return (
    <React.Fragment>
<section>
    <Container className="counterDesc">
        <Row className="">
            <Col lg="4">
                <div className="section-title communityText">
                    <LandingLeft
                    desc = "Spreading equality to billions of people across the globe is a big, inspiring project and everyone can help!"

                    class = "mdi-18px h5 mr-2"
                    >
                        <h4 className="title mb-4">Community</h4>

                    </LandingLeft>


                </div>

            </Col>

            <Col lg="8">
                <div className="section-title communityText">
                    <LandingLeft
                    desc = "Spreading equality to billions of people across the globe is a big, inspiring project and everyone can help!"

                    class = "mdi-18px h5 mr-2"
                    >
                        <h4 className="title mb-4">Community</h4>

                    </LandingLeft>


                </div>

            </Col>



        </Row>
    </Container>
    <Container>

    <Button variant="contained" color="primary" href="/developer-portal-documentation">Get Started</Button>
    </Container>
    </section>
    </React.Fragment>
  );
}
