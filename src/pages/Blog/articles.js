// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Alert, Form, FormGroup, Label, Button, Input } from 'reactstrap';

//Import components




// import images
import blog01 from '../../images/account/bg.jpg';


// Client Images
import client1 from '../../images/account/bg.jpg';
import client2 from '../../images/account/bg.jpg';
import client3 from '../../images/account/bg.jpg';
import client4 from '../../images/account/bg.jpg';


class Articles extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pathItems : [
                //id must required
                { id : 1, name : "Home", link : "/index" },
                { id : 2, name : "Pages", link : "#" },
                { id : 3, name : "Blog", link : "#" },
                { id : 4, name : "Blog Detail" },
            ],
            comments : [
                { id : 1, image: client1, name : "Lorenzo Peterson", date : "15th August, 2019", time : "01:25 pm", desc : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" },
                { id : 1, image: client2, name : "Tammy Camacho", date : "16th August, 2019", time : "02:05 pm", desc : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" },
                { id : 1, image: client3, name : "Tammy Camacho", date : "17th August, 2019", time : "04:03 pm", desc : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
                    replies : [
                        { id : 1, image: client4, name : "Calvin Camacho", date : "18th August, 2019", time : "05:55 pm", desc : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" },
                        { id : 1, image: client2, name : "Tammy Camacho", date : "19th August, 2019", time : "05:44 pm", desc : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" },
                    ]
                },
            ],
            blogs : [
                { id : 1, image : blog01, title : "Smartest Applications for Business", like : "33", comment : "08", autor : "Calvin Carlo", date : "13th August, 2019" },
                { id : 2, image : blog01, title : "Design your apps in your own way", like : "33", comment : "08", autor : "Calvin Carlo", date : "13th August, 2019" },
            ],
            successMsg : false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({successMsg : true});
    }

    componentDidMount() {
        document.body.classList = "";
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
                            <Col lg="8" md="7">
                                <div className="mr-lg-3">
                                    <div className="blog position-relative overflow-hidden shadow rounded">
                                        <div className="position-relative">
                                            <img src={blog01} className="img-fluid rounded-top" alt=""/>
                                        </div>
                                        <div className="content p-4">
                                            <h6><i className="mdi mdi-tag text-primary mr-1"></i><Link to="javscript:void(0)" className="text-primary">Software</Link>, <Link to="javscript:void(0)" className="text-primary">Application</Link></h6>
                                            <p className="text-muted mt-3">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. </p>
                                            <blockquote className="blockquote mt-3 p-3">
                                                <p className="text-muted mb-0 font-italic">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "</p>
                                            </blockquote>
                                            <p className="text-muted">The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.</p>
                                            <div className="post-meta mt-3">
                                                <ul className="list-unstyled mb-0">
                                                    <li className="list-inline-item mr-2"><Link to="#" className="text-muted like"><i className="mdi mdi-heart-outline mr-1"></i>33</Link></li>
                                                    <li className="list-inline-item"><Link to="#" className="text-muted comments"><i className="mdi mdi-comment-outline mr-1"></i>08</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* comments */}


                                    <div className="mt-4 pt-2 p-4 shadow rounded">
                                        <h4 className="page-title">Related Posts :</h4>

                                        <Row>
                                        {
                                            this.state.blogs.map((blog, key) =>
                                                <Col lg={6} key={key} className="mt-4 pt-2">
                                                    <div className="blog position-relative overflow-hidden shadow rounded">
                                                        <div className="position-relative">
                                                            <img src={blog.image} className="img-fluid rounded-top" alt="" />
                                                            <div className="overlay rounded-top bg-dark"></div>
                                                        </div>
                                                        <div className="content p-4">
                                                            <h4><Link to="#" className="title text-dark">{blog.title}</Link></h4>
                                                            <div className="post-meta mt-3">
                                                                <Link to="#" className="text-muted float-right readmore">Read More <i className="mdi mdi-chevron-right"></i></Link>
                                                                <ul className="list-unstyled mb-0">
                                                                    <li className="list-inline-item mr-2"><Link to="#" className="text-muted like"><i className="mdi mdi-heart-outline mr-1"></i>{blog.like}</Link></li>
                                                                    <li className="list-inline-item"><Link to="#" className="text-muted comments"><i className="mdi mdi-comment-outline mr-1"></i>{blog.comment}</Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="author">
                                                            <small className="text-light user d-block"><i className="mdi mdi-account"></i> {blog.autor}</small>
                                                            <small className="text-light date"><i className="mdi mdi-calendar-check"></i> {blog.date}</small>
                                                        </div>
                                                    </div>
                                                </Col>
                                            )
                                        }
                                        </Row>
                                    </div>


                                </div>
                            </Col>

                        {/* sidebar */}


                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}
export default Articles;
