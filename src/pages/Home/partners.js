// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container,Row, Col, FormGroup, Label } from 'reactstrap';

import StarRatings from 'react-star-ratings';

//Import components



//Import Images

import MyBit from "../../images/partners/mybit.png";
import Tendermint from "../../images/partners/tendermint.png";
import Cosmos from "../../images/partners/cosmos.png";






class PageJob extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pathItems : [
                //id must required

            ],
            jobs : [
                { id : 1,  title : "Cosmos",  cmpImage : Cosmos, cmpName : "Cosmos", location : "Test",  reward : "8.74%", field : "Information strategy" },
                { id : 2,  title : "Kava",  cmpImage : Cosmos, cmpName : "Kava", location : "SF",  reward : "8.08%", field : "Information strategy" },
                { id : 3,  title : "Ethereum",  cmpImage : Cosmos, cmpName : "Ethereum", location : "Test", reward : "7.15%",  field : "Information strategy" },
                { id : 4,  title : "Polkadot",  cmpImage : Cosmos, cmpName : "Polkadot", location : "Test", reward : "6-14%",  field : "Information strategy" },


            ]
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
    }
     // Make sure to remove the DOM listener when the component is unmounted.
     componentWillUnmount() {
        window.removeEventListener("scroll",this.scrollNavigation, true);
     }

    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 80) {
            document.getElementById('topnav').classList.add('nav-sticky');
        }
        else {
            document.getElementById('topnav').classList.remove('nav-sticky');
        }
    }

    render() {

        return (
            <React.Fragment>
                {/* breadcrumb */}

                <div className="position-relative">
                    <div className="shape overflow-hidden text-white">
                        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>

                <section className="section">
                    <Container>


                        <Row>

                            {
                                this.state.jobs.map((job, key) =>
                                    <Col key={key} lg="4" md="6" xs="12" className="mt-4 pt-2">
                                        <div className="job-box rounded shadow position-relative overflow-hidden">
                                            <div className="border-bottom">
                                                <div className="position-relative">
                                                    <img src="" className="img-fluid" alt=""/>
                                                    <div className="job-overlay bg-white"></div>
                                                </div>


                                            </div>

                                            <div className="content position-relative p-4">
                                                <div className="firm-logo rounded-pill shadow bg-light text-center">
                                                    <img src={job.cmpImage} className="avatar avatar-md-sm" alt=""/>

                                                </div>
                                                <div className="company-detail text-center mt-3">
                                                    <h5 className="mb-0"><Link to={"/" + job.cmpName + "-staking"} className="text-dark company-name">{job.cmpName}</Link></h5>
                                                    <p className="text-muted"><i className="mdi mdi-map-marker"></i>{job.location}</p>

                                                </div>
                                                <ul className="job-facts list-unstyled">

                                                    <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i> Annual Reward ~ {job.reward}</li>

                                                </ul>







                                            </div>
                                        </div>
                                    </Col>
                                )
                            }
                        </Row>

                    </Container>
                </section>
            </React.Fragment>
        );
    }
}
export default PageJob;
