// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Alert, FormGroup, Input, InputGroup, InputGroupAddon, Button } from 'reactstrap';

//Import Components
import SectionTitle from "../../components/Shared/section-title";

//Slider
import OwlCarousel from 'react-owl-carousel';
import '../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';

//Import Images


class Testimonial extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clients : [
                { id : 1,  name : "Thomas Israel" , desc : "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today." },
                { id : 2,  name : "Carl Oliver" , desc : "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century." },
                { id : 3,  name : "Barbara McIntosh" , desc : "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others." },
                { id : 4,  name : "Jill Webb" , desc : "Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts." },
                { id : 5,  name : " Dean Tolle" , desc : "There is now an abundance of readable dummy texts. These are usually used when a text is required." },
                { id : 6,  name : "Christa Smith" , desc : "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero." },
            ],
            responsive: {
                0: {
                    items: 1,
                },
                550: {
                    items: 1,
                },
                650: {
                    items: 2,
                },
                1000: {
                    items: 3,
                },
            },
            successMsg : false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        var sectiontitles = document.getElementsByName("maintitle");
        sectiontitles[0].classList.remove("mb-4");
        sectiontitles[0].classList.remove("pb-2");
        sectiontitles[0].classList.add("mb-60");
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({successMsg : true});
    }

    render() {
        return (
            <React.Fragment>
                <section className="section">
                    <Container>
                        <Row className="align-items-right">
                            <Col md="6">
                                <img src={""} className="mr-md-4" alt="" />
                            </Col>

                            <Col md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="section-title mr-lg-5">
                                    <h4 className="title mb-4">Welcome to Fraktal😃</h4>
                                    <p className="text-muted">Fraktal is an ecosystem of individuals and companies who share the common belief that economic equality is a fundamental human right and are working to create a future where everyone has access to basic financial services.
                                    <br /> <br />
                                    Members of the Fraktal Ecosystem develop and deliver cutting edge technology to those who need it the most. Our products empower individuals across the globe in nearly every country.
                                    </p>

                                    <Link to="#" className="btn btn-outline-primary">Start Now <i className="mdi mdi-chevron-right"></i></Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="mt-100 mt-60">
                        {/* section title */}
                        <SectionTitle title="Our Happy Customers" desc=" that can provide everything you need to generate awareness, drive traffic, connect." />


                    </Container>

                    <Container className="mt-100 mt-60">
                        {/* section title */}
                        <SectionTitle title="Subscribe for our Latest Newsletter" desc=" that can provide everything you need to generate awareness, drive traffic, connect." />

                        <Row className="justify-content-center mt-4 pt-2">
                            <Col lg={7} md={10}>
                            <Alert color="info" isOpen={this.state.successMsg} toggle={()=>{ this.setState({successMsg : !this.state.successMsg}) }}>
                                Data sended successfully.
                            </Alert>
                                <Form>
                                    <FormGroup>
                                        <InputGroup className="mb-3">
                                            <Input name="email" id="email" type="email" className="form-control" placeholder="Your email :" required/>
                                            <InputGroupAddon addonType="append">
                                                <Button color="primary" onClick={this.handleSubmit} className="submitBnt" type="button" id="newssubscribebtn">Subscribe</Button>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </FormGroup>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Testimonial;
