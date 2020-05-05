// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container,Row, Col, FormGroup, Label } from 'reactstrap';

import StarRatings from 'react-star-ratings';

//Import components



//Import Images
import Bg from "../../images/icon/bg.png";
import MyBit from "../../images/icon/mybit.png";
import Tendermint from "../../images/icon/tendermint.png";
import Cosmos from "../../images/icon/cosmoslight.png";
import TokenWeb from "../../images/icon/tokenweb.png";
import Cryptnotiq from "../../images/icon/cryptnotiq.jpeg";





class PageJob extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pathItems : [
                //id must required

            ],
            jobs : [
                { id : 1,  title : "Cosmos",  cmpImage : Cosmos, cmpName : "Cosmos", location : "Global",  url : "cosmos.network", description : "Information strategy" },
                { id : 2,  title : "TokenWeb",  cmpImage : TokenWeb, cmpName : "TokenWeb", location : "Ireland",  url : "tokenweb.io", description : "Test" },
                { id : 3,  title : "Tendermint",  cmpImage : Tendermint, cmpName : "Tendermint", location : "Global", url : "tendermint.com",  description : "Test" },
                { id : 4,  title : "Cryptnotiq",  cmpImage : Cryptnotiq, cmpName : "Cryptnotiq", location : "Europe", url : "github.com/cryptnotiq",  description : "Something Cool" },
                { id : 5,  title : "Tegan Kline",  cmpImage : null, cmpName : "Tegan Kline", location : "San Francisco", url : "tegankline.com",  description : "Something Cool" },
                { id : 6,  title : "MyBit",  cmpImage : MyBit, cmpName : "MyBit", location : "Global", url : "mybit.io",  description : "Something Cool" },


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
                                                    <img src={Bg} className="img-fluid" alt=""/>
                                                    <div className="job-overlay bg-white"></div>
                                                </div>


                                            </div>

                                            <div className="content position-relative p-4">
                                                <div className="firm-logo rounded-pill shadow bg-light text-center">
                                                    <img src={job.cmpImage} className="avatar avatar-md-sm" alt=""/>

                                                </div>
                                                <div className="company-detail text-center mt-3">
                                                    <h5 className="mb-0"><a href={"https://" + job.url} target="_blank" className="text-dark company-name">{job.cmpName}</a></h5>

                                                    <p className="text-muted"><i className="mdi mdi-map-marker"></i>{job.location}</p>

                                                </div>
                                                <ul className="job-facts list-unstyled">

                                                    <li className="list-inline-item text-muted">{job.description}</li>

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
