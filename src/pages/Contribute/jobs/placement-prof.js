import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from "reactstrap";

//Import Images

class CommunityAdmin extends Component {
    componentDidMount() {
        document.body.classList = "";
        window.addEventListener("scroll", this.scrollNavigation, true);
      }

      // Make sure to remove the DOM listener when the component is unmounted.


      scrollNavigation = () => {
          var doc = document.documentElement;
          var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
          if(top > -10)
          {
               document.getElementById('topnav').classList.add('nav-sticky');
          }
          else
          {
            document.getElementById('topnav').classList.remove('nav-sticky');
          }
      }

    render() {
        return (
            <React.Fragment>
            <section className="section taskdetails">
                    <Container>
                        <Row>
                            <Col lg="4" md="5" xs="12">
                                <div className=" position-relative">
                                    <div className="rounded shadow">
                                        <div className="text-center py-5 border-bottom">


                                            <p className="text-muted mb-0">Placement Professional</p>
                                        </div>

                                        <div className="p-4">

                                            <ul className="list-unstyled feature-list mb-4">
                                              <li className="h5"><i className="mdi mdi-currency-usd mdi-18px text-warning mr-2"></i><span className="text-muted">Reward : </span>150,000 FRAK</li>
                                                <li className="h5"><i className="mdi mdi-account mdi-18px text-warning mr-2"></i><span className="text-muted">Frequency :</span> Monthly</li>
                                                <li className="h5"><i className="mdi mdi-link-variant mdi-18px text-warning mr-2"></i><span className="text-muted">Length :</span> Unlimited</li>


                                            </ul>
                                            <a href="https://community.fraktal.network/channel/tasks" target="_blank" className="btn btn-block btn-primary">Apply Now</a>
                                        </div>
                                    </div>


                                </div>
                            </Col>

                            <Col lg="8" md="7" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="ml-md-4">
                                    <h4>Task Description</h4>
                                    <p>This position is similar to the role of an internal recruiter. You will be building relationships with new members of the community to understand how they can best contribute and help them find the perfect position to have maximum impact.</p>
                                    <h5>Responsibilites</h5>
                                    <ul>
                                    <li>Introduce yourself and begin a dialogue with new members of the community as they join.</li>
                                    <li>Maintain a spreadsheet or CRM type solution of members and areas of strengths/interests.</li>
                                    <li>Recommend open tasks that match profiles and work with Task Manager to coordinate new tasks.</li>
                                    </ul>





                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>


            </React.Fragment>
        );
    }
}

export default CommunityAdmin;
