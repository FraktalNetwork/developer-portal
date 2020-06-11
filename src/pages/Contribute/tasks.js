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
            { id : 1,  title : "Senior Web Developer", city : "London", country : "UK" },
            { id : 2,  title : "Front-End Developer", city : "Brasilia", country : "Brazil" },
            { id : 3,  title : "Back-End Developer", city : "Ottawa", country : "Canada" },
            { id : 4,  title : "UI Designer", city : "Beijing", country : "China" },
            { id : 5,  title : "UX Designer", city : "Bogota", country : "Colombia" },
            { id : 6,  title : "Php Developer", city : "Havana", country : "Cuba" },
            { id : 7,  title : "IOS Developer", city : "Nicosia", country : "Cyprus" },
            { id : 8,  title : "Graphics Designer", city : "Cairo", country : "Egypt" },
            { id : 9,  title : "Data Entry", city : "Suva", country : "Fiji" },
            { id : 10,  title : "Sketch Designer", city : "Helsinki", country : "Finland" },
            { id : 11,  title : "Web Developer", city : "Berlin", country : "Germany" },
            { id : 12,  title : "Game Developer", city : "Ahmedabad", country : "India" },
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
