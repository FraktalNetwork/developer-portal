// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

//Import Components

import SectionLeft from "../../components/Shared/sectionleft";
import Counter from "../../components/Shared/counter";

class Community extends Component {

    constructor(props) {
        super(props);
        this.state = {

            features : [
                { title : "Digital Marketing Solutions for Tomorrow" },
                { title : "Our Talented & Experienced Marketing Agency" },
                { title : "Create your own skin to match your brand" },
            ],
            counter : [ 5, 4, 0, 0 ]
        }
    }

    componentDidMount(){
        var sectionsTitles=document.getElementsByName("maintitle");
        for(var i=1; i<sectionsTitles.length-1; i++) {
            sectionsTitles[i].classList.remove('mb-4');
            sectionsTitles[i].classList.remove('pb-2');
            sectionsTitles[i].classList.add('mb-60');
        }

    }

    render() {
        return (
            <React.Fragment>
                <section className="section counterBlocks">


                    <Container className="counterDesc">
                        <Row className="">
                            <Col lg="6">
                                <div className="section-title communityText">
                                    <SectionLeft
                                    desc = "Bringing financial services to billions of people across the globe is a big, inspiring project and everyone can help! There are tasks of all sizes, for every skill. If you support our mission, join the Fraktal Community to start contributing today!"
                                    features = {this.state.features}
                                    class = "mdi-18px h5 mr-2"
                                    >
                                        <h4 className="title mb-4">Community</h4>

                                    </SectionLeft>


                                </div>

                            </Col>


                            <Col lg="6">
                                <Counter countervalue={this.state.counter} />
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Community;
