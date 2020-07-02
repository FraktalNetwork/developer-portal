import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from "react-router-dom";

//Import Images
import health from "../../images/icon/bitcoin.svg";
import termLife from "../../images/icon/bitcoin.svg";
import familyHealth from "../../images/icon/bitcoin.svg";
import investment from "../../images/icon/bitcoin.svg";
import car from "../../images/icon/bitcoin.svg";
import bike from "../../images/icon/bitcoin.svg";

class Contributing extends Component {
    constructor(props) {
        super(props);
        this.state={
            categories : [
                { img : health, title : "Contributing to Development", link : "#" },
                { img : termLife, title : "Building Unique Products", link : "#" },
                { img : familyHealth, title : "Spreading Awareness", link : "#" },
                { img : investment, title : "Educating Others", link : "#" },
                { img : car, title : "Providing Tools and Resources", link : "#" },
                { img : bike, title : "Helping Grow the Community", link : "#" },

            ]
        }
    }

    render() {
        return (
            <React.Fragment>
        <section>
            <Container>
                <Row className="mt-5 justify-content-center">
                    <Col lg={12}>
                        <div className="title-heading text-center">
                            <h3 className=" text-dark mb-3">Members of the Fraktal Community contribute in various ways</h3>


                            <Row className="mt-4 pt-2">
                                {
                                    this.state.categories.map((category, key) =>
                                        <Col key={key} lg={2} md={4} xs={6} className="mt-4 pt-2">
                                            <Card className="explore-feature border-0 rounded text-center shadow3d bg-white">
                                                <CardBody>
                                                    <div className="icon rounded-circle shadow-lg d-inline-block">
                                                        <img src={category.img} className="avatar avatar-md-sm" alt="Landrick" />
                                                    </div>
                                                    <div className="content mt-3">
                                                        <h6 className="mb-0"><Link to={category.link} className="title text-dark">{category.title}</Link></h6>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    )
                                }
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

            </React.Fragment>
        );
    }
}

export default Contributing;
