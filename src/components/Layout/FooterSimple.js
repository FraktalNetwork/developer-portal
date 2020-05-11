// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

//Import Components


//Import Images
import twitter from '../../images/icon/twitteralt.svg';
import github from '../../images/icon/github.svg';
import reddit from '../../images/icon/reddit.svg';
import medium from '../../images/icon/medium.svg';
import rocketChat from '../../images/icon/rocketchat.svg';
import rocketChatNormal from '../../images/icon/rocket-chat.svg';

class FooterSimple extends Component {
    state = {
        clients : [
            { id : 1, name : "Thomas Israel" , desc : "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today." },
            { id : 2, name : "Carl Oliver" , desc : "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century." },
            { id : 3, name : "Barbara McIntosh" , desc : "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others." },
            { id : 4, name : "Jill Webb" , desc : "Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts." },
            { id : 5, name : " Dean Tolle" , desc : "There is now an abundance of readable dummy texts. These are usually used when a text is required." },
            { id : 6, name : "Christa Smith" , desc : "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero." },
        ]
    }
    render() {
        return (
            <React.Fragment>
                <section className="section pt-0 bg-light">
                    <Container>


                        <Row className="mt-md-5 pt-md-3 mt-4 pt-2 mt-sm-0 pt-sm-0 justify-content-center">
                            <Col xs="12" className="text-center">
                                <div className="section-title">
                                    <h4 className="title mb-4">Get the App now !</h4>
                                    <p className="text-muted para-desc mx-auto">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                    <div className="mt-2">
                                    <ul className="list-unstyled social-icon social mb-0 mt-4">
                                      <a href="https://google.com" target="_blank" className="rounded">  <img src={github} className="avatar avatar-small" /></a>
                                        <a href="https://google.com" target="_blank" className="rounded">  <img src={twitter} className="avatar avatar-small" /></a>
                                        <a href="https://google.com" target="_blank" className="rounded">  <img src={reddit} className="avatar avatar-small" /></a>
                                          <a href="https://google.com" target="_blank" className="rounded">  <img src={medium} className="avatar avatar-small" /></a>
                                            <a href="https://google.com" target="_blank" className="rounded">  <img src={rocketChat} className="avatar avatar-small" /></a>
                        
                                    </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}
export default FooterSimple;