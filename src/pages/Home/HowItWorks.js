// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

//Import Components
import SectionTitleLeft from "../../components/Shared/section-title-left";

//import images
import hosting1 from '../../images/hosting/1.png';
import hosting2 from '../../images/hosting/2.png';
import dealHend from '../../images/hosting/deal-hend.png';
import lightBulb from '../../images/illustrator/aboutimgtransparent.png';


class HowItWorks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            features1 : [
                { title : "Digital Marketing Solutions for Tomorrow" },
                { title : "Our Talented & Experienced Marketing Agency" },
                { title : "Create your own skin to match your brand" },
            ],
            features2 : [
                { title : "Digital Marketing Solutions for Tomorrow" },
                { title : "Our Talented & Experienced Marketing Agency" },
                { title : "Create your own skin to match your brand" },
            ],
            features3 : [
                { title : "Digital Marketing Solutions for Tomorrow" },
                { title : "Our Talented & Experienced Marketing Agency" },
                { title : "Create your own skin to match your brand" },
            ],
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section bg-light">


                    <Container className="mt-100 mt-60">
                        <Row className="align-items-center aboutTitle">
                            <Col lg={6} md={6} className="order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="section-title">
                                <SectionTitleLeft
                                    title = "Welcome to Fraktal"
                                    desc = "We are a community whose mission is to empower people and spread equality throughout the world."


                                    features = {this.state.features2}
                                    class = "mdi-18px h5 mr-2"
                                />
                                  <a  href="./about" className="btn btn-primary learnbutton mt-3">Learn More <i className="mdi mdi-chevron-right"></i></a>
                                </div>
                            </Col>

                            <Col lg={6} md={6} className="order-1 order-md-2">
                                <img src={lightBulb} className="img-fluid" alt="" />
                            </Col>
                        </Row>
                    </Container>


                </section>

            </React.Fragment>
        );
    }
}

export default HowItWorks;
