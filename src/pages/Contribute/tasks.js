import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/section-title";
import TaskBox from "./task-box";

//Import images


class FeaturedJobs extends Component {
    state = {
        jobs : [
            { id : 1,  title : "Senior Web Developer", time : "London", },
            { id : 2,  title : "Front-End Developer", time : "Brasilia", },
            { id : 3,  title : "Back-End Developer", time : "Ottawa", },
            { id : 4,  title : "UI Designer", time : "Beijing",  },
            { id : 5,  title : "UX Designer", time : "Bogota",  },
            { id : 6,  title : "Php Developer", time : "Havana",  },
            { id : 7,  title : "IOS Developer", time : "Nicosia",  },
            { id : 8,  title : "Graphics Designer", time : "Cairo",  },
            { id : 9,  title : "Data Entry", time : "Suva",  },
            { id : 10,  title : "Sketch Designer", time : "Helsinki",  },
            { id : 11,  title : "Web Developer", time : "Berlin",  },
            { id : 12,  title : "Game Developer", time : "Ahmedabad",  },
        ]
    }
    render() {
        return (
            <React.Fragment>
                    <Container className="mt-100 mt-60">
                        {/* section title */}
                        <SectionTitle title="Featured Jobs" desc=" that can provide everything you need to generate awareness, drive traffic, connect." />

                        <Row>
                            {/* Featured Job Box */}
                            <TaskBox jobs={this.state.jobs} />

                            <Col xs="12" className="text-center mt-4 pt-2">
                                <Link to="/page-jobs" className="btn btn-primary">See All Jobs <i className="mdi mdi-chevron-right"></i></Link>
                            </Col>
                        </Row>
                    </Container>
            </React.Fragment>
        );
    }
}

export default FeaturedJobs;
