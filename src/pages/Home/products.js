// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

//Import Components
import Feature from "../../components/Shared/Feature";


// Import images
import insurance from "../../images/icon/insurance.svg";
import graduationHat from "../../images/icon/graduation-hat.svg";
import ai from "../../images/icon/ai.svg";
import github from "../../images/icon/github.svg";



class Products extends Component {

  constructor(props) {
       super(props);
       this.state = {
           features : [
               { class : "course-feature position-relative d-block overflow-hidden rounded p-4 pt-5 pb-5", icon : github, title : "Fraktal Network", desc : "Send money instantly, anywhere in the world without bank fees.", link : "#" },
               { class : "yellow course-feature position-relative d-block overflow-hidden rounded p-4 pt-5 pb-5", icon : github, title : "Frak.it", desc : "Bringing transparency and inclusiveness to investments.", link : "#" },
               { class : "green course-feature position-relative d-block overflow-hidden rounded p-4 pt-5 pb-5", icon : github, title : "Gabel", desc : "Your own personal bank. Take back control of what is yours.", link : "#" },
                  { class : "indigo course-feature position-relative d-block overflow-hidden rounded p-4 pt-5 pb-5", icon : github, title : "Freestream", desc : "A revolutionary new concept of streaming money.", link : "#" },
           ]
       }
   }



    render() {
        return (
            <React.Fragment>
                <section className="section pt-0">
                <div className="productstitle">
                <h2 className="title mb-4">We've Built some Very Impactful Products</h2>
                </div>

                <Container>
                       <Row>
                           {
                               this.state.features.map((feature, key) =>
                                   <Col md={6} key={key}>
                                       <div className={feature.class}>
                                           <div className="icon text-center">
                                               <img src={feature.icon} className="avatar avatar-small" height="55" alt="" />
                                           </div>
                                           <h4 className="mt-3 text-center"><Link to={feature.link} className="title text-dark"> {feature.title}</Link></h4>
                                           <p className="">{feature.desc} </p>

                                           <img src={feature.icon} className="full-img" height="200" alt="" />
                                       </div>
                                   </Col>
                               )
                           }
                       </Row>
                   </Container>

                   <div className="mt-4 pt-2 text-center">
                       <Link to="./products" className="btn btn-primary landingbutton">Explore All Products</Link>
                   </div>

                </section>
            </React.Fragment>
        );
    }
}

export default Products;
