// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

//Import Components
import Subscribe from '../../components/Shared/subscribe'
import Mailchimp from '../../components/Shared/mailchimp'


//Import Images
import twitter from '../../images/icon/twitterWhite.png';
import github from '../../images/icon/githubWhite.png';
import reddit from '../../images/icon/redditWhite.png';
import medium from '../../images/icon/mediumWhite.png';
import rocketChat from '../../images/icon/rocketchatWhite.png';
import rocketChatNormal from '../../images/icon/rocket-chat.svg';
import background from '../../zimedassets/images/background/inner-banner-bg.png';

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

            <section className="footerBanner" id="banner" style={{ backgroundImage: `url(${background})` }}>
            <Container>
            <Row className="mt-md-5 pt-md-3 mt-4 pt-2 mt-sm-0 pt-sm-0 justify-content-center footerSimple">

                <Col xs="12" className="text-center">
            <div className="productstitle">
            <h1 className="title mb-4 socialtitle text-light position-relative">Follow Us</h1>
            </div>
            <div className="section-title socialicons">
            <a href="https://github.com/FraktalNetwork" target="_blank">  <img src={github} className="footerIcon" /></a>
              <a href="https://twitter.com/FraktalNetwork" target="_blank">  <img src={twitter} className="footerIcon footerIconMiddle" /></a>
              <a href="https://www.reddit.com/r/FraktalNetwork/" target="_blank">  <img src={reddit} className="footerIcon footerIconMiddle" /></a>
                <a href="https://medium.com/@fraktal" target="_blank">  <img src={medium} className="footerIcon footerIconMiddle" /></a>
                  <a href="https://community.fraktal.network" target="_blank">  <img src={rocketChat} className="footerIcon footerIconMiddle" /></a>
                  </div>

                  <div>
                  <Mailchimp />
                  </div>











                  </Col>
                    </Row>
                  </Container>
                  </section>








          {/*      <section className="section pt-0">

                    <Container>


                        <Row className="mt-md-5 pt-md-3 mt-4 pt-2 mt-sm-0 pt-sm-0 justify-content-center footerSimple">

                            <Col xs="12" className="text-center">
                             <div className="bg-overlay bg-overlay-gradient2 bg-footer"></div>
                            <div className="productstitle">
                            <h1 className="title mb-4 socialtitle position-relative">Follow Us</h1>
                            </div>
                                <div className="section-title">
                                   <h4 className="title mb-4">Connect</h4>

                                    <div className="mt-2">
                                    <ul className="list-unstyled mb-0 mt-4">
                                      <a href="https://github.com/FraktalNetwork" target="_blank">  <img src={github} className="footerIcon" /></a>
                                        <a href="https://twitter.com/FraktalNetwork" target="_blank">  <img src={twitter} className="footerIcon footerIconMiddle" /></a>
                                        <a href="https://www.reddit.com/r/FraktalNetwork/" target="_blank">  <img src={reddit} className="footerIcon footerIconMiddle" /></a>
                                          <a href="https://medium.com/@fraktal" target="_blank">  <img src={medium} className="footerIcon footerIconMiddle" /></a>
                                            <a href="https://community.fraktal.network" target="_blank">  <img src={rocketChat} className="footerIcon footerIconMiddle" /></a>

                                    </ul>
                                    </div>
                                    <br />

                                      <p className="text-muted para-desc mx-auto">Copyright 2020 Fraktal Network. All Rights Reserved.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section> */}
            </React.Fragment>
        );
    }
}
export default FooterSimple;
