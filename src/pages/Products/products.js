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



class ProductList extends Component {

  constructor(props) {
       super(props);
       this.state = {
           features : [
               { class : "course-feature position-relative d-block overflow-hidden rounded p-4 pt-5 pb-5", icon : github, title : "Fraktal Network", category : "Network", desc : "Send money instantly, anywhere in the world without bank fees.", link : "#" },
               { class : "course-feature position-relative d-block overflow-hidden rounded p-4 pt-5 pb-5", icon : github, title : "Frak.it", category : "Application", desc : "Bringing transparency and inclusiveness to investments.", link : "#" },
               { class : "course-feature position-relative d-block overflow-hidden rounded p-4 pt-5 pb-5", icon : github, title : "Gabel", category : "Tool", desc : "Your own personal bank. Take back control of what is yours.", link : "#" },
                  { class : "course-feature position-relative d-block overflow-hidden rounded p-4 pt-5 pb-5", icon : github, title : "Freestream", category : "Wallet", desc : "A revolutionary new concept of streaming money.", link : "#" },
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

                <Container>
                       <Row>
                           <ul className="col container-filter list-unstyled categories-filter text-center" id="filter">
                               <li className="list-inline-item"><Link  to="#" onClick={() => this.setCategory("All")} className={this.state.displayCategory === "All" ? "categories border d-block text-dark rounded active" : "categories border d-block text-dark rounded" }>All</Link></li>
                               <li className="list-inline-item"><Link to="#" onClick={() => this.setCategory("Network")} className={this.state.displayCategory === "Network" ? "categories border d-block text-dark rounded active" : "categories border d-block text-dark rounded" } >Networks</Link></li>
                               <li className="list-inline-item"><Link to="#" onClick={() => this.setCategory("Wallet")} className={this.state.displayCategory === "Wallet" ? "categories border d-block text-dark rounded active" :"categories border d-block text-dark rounded"  }>Wallets</Link></li>
                               <li className="list-inline-item"><Link  to="#" onClick={() => this.setCategory("Application")} className={this.state.displayCategory === "Application" ?  "categories border d-block text-dark rounded active" :  "categories border d-block text-dark rounded" }>Applications</Link></li>
                               <li className="list-inline-item"><Link to="#" onClick={() => this.setCategory("Tool")} className={this.state.displayCategory === "Tool" ?"categories border d-block text-dark rounded active"  : "categories border d-block text-dark rounded" } >Tools</Link></li>
                           </ul>
                       </Row>
                   </Container>

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
                                           <p className="text-center text-muted">{feature.category} </p>
                                           <p className="">{feature.desc} </p>

                                           <img src={feature.icon} className="full-img" height="200" alt="" />
                                       </div>
                                   </Col>
                               )
                           }
                       </Row>
                   </Container>

                   <div className="mt-4 pt-2 text-center">
                       <Link to="/" className="btn btn-primary landingbutton">Build an Application</Link>
                   </div>

                </section>
            </React.Fragment>
        );
    }
}

export default ProductList;
