import React, { Component } from 'react';
import { Col, } from 'reactstrap';
import { Link } from 'react-router-dom';

class BlogBox extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.blogs.map((blog, key) =>

                    <Col lg="4" md="6" className="mt-4 pt-2" key={key} name="blog">
                        <div className="blog position-relative overflow-hidden shadow rounded blogbox">
                            <div className="position-relative">
                              <Link to="/Articles">  <img src={blog.image} className="img-fluid rounded-top" alt=""/></Link>

                            </div>
                            </div>

                            <div>
                            <div className="content p-4">
                                <h4><Link to="#" className="title text-dark">{blog.title}</Link></h4>
                                <div className="post-meta mt-3">
                                    <Link to="#" className="text-muted float-right ">Read Article <i className="mdi mdi-chevron-right"></i></Link>

                                </div>
                            </div>

                        </div>
                    </Col>

                    )
                }
            </React.Fragment>
        );
    }
}

export default BlogBox;
