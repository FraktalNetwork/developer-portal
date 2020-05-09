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
            { id : 1, image : bitcoin, title : "Gabel", category : "Mobile Payments", description : "Send money instantly to anyone in the world.", link : "https://gabel.io" },
            { id : 2, image : bitcoin, title : "Name TBD", category : "Mobile Wallet (Android & iOS)", description : "Secure and manage digital assets on your phone." },
            { id : 3, image : bitcoin, title : "Name TBD", category : "Mobile App", description : "Manage your digital assets on your computer with Ledger Nano." },
            { id : 4, image : bitcoin, title : "Name TBD", category : "Mobile App", description : "Web Wallet" },
            { id : 5, image : bitcoin, title : "Fraktal Network", category : "Mobile App", description : "An Open Financial System" },
            { id : 6, image : bitcoin, title : "Name TBD", category : "Mobile App", description : "GUI" },
            { id : 7, image : bitcoin, title : "Name TBD", category : "Mobile App", description : "DEX" },
            { id : 8, image : bitcoin, title : "Frakit", category : "Mobile App", description : "Investment App" },
            { id : 9, image : bitcoin, title : "Name TBD", category : "Mobile App", description : "test" },
            { id : 10, image : bitcoin, title : "Name TBD", category : "Mobile App", description : "test" },
            { id : 11, image : bitcoin, title : "Name TBD", category : "Mobile App", description : "test" },
            { id : 12, image : bitcoin, title : "Name TBD", category : "Mobile App", description : "test"},
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
