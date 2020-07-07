import React, { Component } from 'react';
import { Col, } from 'reactstrap';
import { Link } from 'react-router-dom';

class NewsBox extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.blogs.map((blog, key) =>

                    <Col lg="6" md="6" sm="12" className="newsblocks" key={key} name="blog">
                        <div className="blog position-relative overflow-hidden shadow3d rounded newsbox">
                            <div className="position-relative">
                              <a href="/Articles">  <img src={blog.image} className="img-fluid rounded-top newsimage" alt=""/></a>

                            </div>



                      {/*      <div className="content p-4">
                                <h4><Link to="#" className="title text-dark">{blog.title}</Link></h4>
                                <div className="post-meta mt-3">
                                    <Link to="#" className="text-muted float-right ">Read Story<i className="mdi mdi-chevron-right"></i></Link>

                                </div>
                                </div>
                                */}

                        </div>
                    </Col>

                    )
                }
            </React.Fragment>
        );
    }
}

export default NewsBox;
