// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, } from 'reactstrap';
import classnames from 'classnames';

//Import Components
import Feature from "../../components/Shared/Feature";


// Import images
import insurance from "../../images/icon/insurance.svg";
import graduationHat from "../../images/icon/graduation-hat.svg";
import ai from "../../images/icon/ai.svg";
import github from "../../images/icon/github.svg";



class ProductList extends Component {

  constructor(props) {
       super(props);
       this.state = {
           features : [
               { class : "course-feature position-relative d-block overflow-hidden rounded p-4 pt-5 pb-5", icon : github, title : "Fraktal Network", category : "Network", desc : "An open financial system that enables anyone to build financial apps without relying on banking infrastructure.", link : "#" },
               { class : "course-feature position-relative d-block overflow-hidden rounded p-4 pt-5 pb-5", icon : github, title : "Frak.it", category : "Application", desc : "Tokenise any asset and automatically distribute revenue in real-time. Transparent, inclusive, and equal.", link : "#" },
               { class : "course-feature position-relative d-block overflow-hidden rounded p-4 pt-5 pb-5", icon : github, title : "Gabel", category : "Wallet", desc : "Your own personal bank. Safely store your assets and send money instantly, anywhere in the world without bank fees.", link : "#" },
                  { class : "course-feature position-relative d-block overflow-hidden rounded p-4 pt-5 pb-5", icon : github, title : "Freestream", category : "Application", desc : "A revolutionary new concept of streaming money.", link : "#" },
                  { class : "course-feature position-relative d-block overflow-hidden rounded p-4 pt-5 pb-5", icon : github, title : "Fraktal TestNet ohFRAK", category : "Network", desc : "Fraktal TestNetwork for Developers, learning, and trying new things.", link : "#" },
           ],
           displayCategory: "All",
            productIndex: 0,
            isOpen: false,
       }
       this.setCategory.bind(this);
   }

   setCategory(category) {
          this.setState({
            displayCategory: category
          });
      }


    render() {
     const { productIndex, isOpen } = this.state;
        return (
            <React.Fragment>
                <section className="section pt-0">

                <div className="productstitle">
                <h2 className="title mb-4">Products</h2>
                </div>
                <div className="productstitle">
                <p className="title mb-4">Individuals and companies love building on Fraktal Network and implementing it into their existing products.</p>
                </div>

                <Container>
                       <Row>
                           <ul className="col container-filter list-unstyled categories-filter text-center" id="filter">
                               <li className="list-inline-item"><Link  to="#" onClick={() => this.setCategory("All")} className={this.state.displayCategory === "All" ? "categories border d-block text-dark rounded active" : " border d-block text-dark rounded" }>All</Link></li>
                               <li className="list-inline-item"><Link to="#" onClick={() => this.setCategory("Network")} className={this.state.displayCategory === "Network" ? "categories border d-block text-dark rounded active" : "border d-block text-dark rounded" } >Networks</Link></li>
                               <li className="list-inline-item"><Link to="#" onClick={() => this.setCategory("Wallet")} className={this.state.displayCategory === "Wallet" ? "categories border d-block text-dark rounded active" :" border d-block text-dark rounded"  }>Wallets</Link></li>
                               <li className="list-inline-item"><Link  to="#" onClick={() => this.setCategory("Application")} className={this.state.displayCategory === "Application" ?  "categories border d-block text-dark rounded active" :  " border d-block text-dark rounded" }>Applications</Link></li>
                               <li className="list-inline-item"><Link to="#" onClick={() => this.setCategory("Tool")} className={this.state.displayCategory === "Tool" ?"categories border d-block text-dark rounded active"  : " border d-block text-dark rounded" } >Tools</Link></li>
                           </ul>
                       </Row>
                   </Container>

                <Container>
                       <Row>
                           {
                        this.state.features

                               .filter(
                          ({ category }) =>
                          this.state.displayCategory === category || this.state.displayCategory === "All"
                              )

                               .map((feature, key) =>
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
                       <a href="./developer-portal" target="_blank" className="btn btn-primary landingbutton">Build an Application</a>
                   </div>

                </section>
            </React.Fragment>
        );
    }
}

export default ProductList;
