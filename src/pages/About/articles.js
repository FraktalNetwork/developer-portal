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
                { icon : "uil uil-briefcase", title : "Our Vision", desc : "It is a long established fact that a reader will be of a page reader will be of at its layout." },
                { icon : "uil uil-rocket", title : "Our Mission", desc : "It is a long established fact that a reader will be of a page reader will be of at its layout." },
                { icon : "uil uil-crosshairs", title : "Our Goal", desc : "It is a long established fact that a reader will be of a page reader will be of at its layout." },
            ]

        }
    }

    render() {
        return (
            <React.Fragment>
                <Container>
                <div className="productstitle">
                <h2 className="title mb-4">Products</h2>
                </div>
                <div className="productstitle">
                <p className="title mb-4">Individuals and companies love building on Fraktal Network and implementing it into their existing products.</p>
                </div>
                <Row>
                    {
                        this.state.features.map((feature, key) =>
                            <Col lg={4} md={6} xs={12} key={key}>
                                <Card className="features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0">
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
