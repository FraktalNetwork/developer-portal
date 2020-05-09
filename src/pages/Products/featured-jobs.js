import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/section-title";
import FeaturedJobBox from "./featured-job-box";

//Import images
import tendermint from "../../images/icon/tendermint.png";
import mybit from "../../images/icon/mybit.png";
import cosmoslight from "../../images/icon/cosmoslight.png";
import cosmosdark from "../../images/icon/cosmosdark.png";
import bitcoin from "../../images/icon/bitcoin.svg";



class FeaturedJobs extends Component {
    state = {
        jobs : [
            { id : 1, image : tendermint, title : "Name", category : "Mobile App", description : "Send money instantly", link : "https://google.com" },
            { id : 2, image : mybit, title : "Block Explorer", category : "Explorer", description : "View the status of transactions" },
            { id : 3, image : cosmosdark, title : "Back-End Developer", category : "Mobile App", description : "test" },
            { id : 4, image : cosmoslight, title : "UI Designer", category : "Mobile App", description : "test" },
            { id : 5, image : bitcoin, title : "UX Designer", category : "Mobile App", description : "test" },
            { id : 6, image : bitcoin, title : "Php Developer", category : "Mobile App", description : "test" },
            { id : 7, image : bitcoin, title : "IOS Developer", category : "Mobile App", description : "test" },
            { id : 8, image : bitcoin, title : "Graphics Designer", category : "Mobile App", description : "test" },
            { id : 9, image : bitcoin, title : "Data Entry", category : "Mobile App", description : "test" },
            { id : 10, image : bitcoin, title : "Sketch Designer", category : "Mobile App", description : "test" },
            { id : 11, image : bitcoin, title : "Web Developer", category : "Mobile App", description : "test" },
            { id : 12, image : bitcoin, title : "Game Developer", category : "Mobile App", description : "test"},
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
                            <FeaturedJobBox jobs={this.state.jobs} />

                            <Col xs="12" className="text-center mt-4 pt-2">
                                <Link to="/page-jobs" className="btn btn-primary">Build your own App <i className="mdi mdi-chevron-right"></i></Link>
                            </Col>
                        </Row>
                    </Container>
            </React.Fragment>
        );
    }
}

export default FeaturedJobs;
