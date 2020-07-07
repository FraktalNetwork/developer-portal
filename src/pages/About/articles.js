import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from "react-router-dom";



//Import Components


//Import images


class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            features : [
                { icon : "uil uil-briefcase", title : "Earn Tokens", desc : "Earn the native token that powers the Fraktal Ecosystem by contributing your time." },
                { icon : "uil uil-rocket", title : "Stake Tokens", desc : "Since no single company owns Fraktal, staking is used to secure the network and make decisions." },
                { icon : "uil uil-crosshairs", title : "Why Fraktal is the Solution", desc : "Learn why Fraktal is truly needed and how it is designed to have a high impact on our society." },
            ]

        }
    }

    render() {
        return (
            <React.Fragment>
                <Container>
                <div className="productstitle">
                <h2 className="title mb-4">Learn More</h2>
                </div>

                <Row>
                    {
                        this.state.features.map((feature, key) =>
                            <Col lg={4} md={12} xs={12} key={key}>
                                <Card className="features fea-primary articles rounded p-4 shadow3d bg-light  position-relative overflow-hidden border-0">
                                    <span className="h1 icon2 text-primary">
                                        <i className={feature.icon}></i>
                                    </span>
                                    <CardBody className="p-0 content">
                                        <h5>{feature.title}</h5>
                                        <p className="para text-muted mb-0">{feature.desc}</p>
                                    </CardBody>
                                </Card>
                            </Col>
                        )
                    }

                </Row>
            </Container>




            </React.Fragment>
        );
    }
}

export default Articles;
