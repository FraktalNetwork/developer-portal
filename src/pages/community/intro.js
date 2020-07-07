import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Icons

//Images
import img1 from "../../images/illustrator/opencommunity.png";

class intro extends Component {
  state = {

      facilities : [
          {  title : "Fully Secured", desc : "Moreover, in Latin only words at the beginning of sentences are capitalized."},
          {  title : "Best Performance", desc : "If the fill text is intended to illustrate the characteristics of sometimes."},
              {  title : "Best Performance", desc : "If the fill text is intended to illustrate the characteristics of sometimes."},
      ],
  }

    render() {
        return (
            <React.Fragment>

            <Container className="mt-100 mt-60">
                <Row className="align-items-center">
                    <Col lg={{size :5, order :1}} xs={{order:2}}  className="mt-4 pt-2 mt-lg-0 pt-lg-0">
                        <div className="section-title mr-lg-4">
                            <h1 className="title mb-3">Fraktal is an open source community.</h1>
                            <p className="para-desc text-muted">This means that no single company or person owns Fraktal. Both individuals and companies unite to bring the Fraktal mission to life and make the world a more equal and inclusive place.</p>


                        </div>
                    </Col>


                    <Col lg={{size:7, order:2}} xs={{order:1}}>

                            <img src={img1} className="img-fluid mx-auto d-block rounded" alt=""/>

                    </Col>
                </Row>
            </Container>
            </React.Fragment>
        );
    }
}

export default intro;
