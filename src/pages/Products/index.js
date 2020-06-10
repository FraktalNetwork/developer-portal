import React, { Component } from 'react';
import { Container } from "reactstrap";

//Import Components

import FeaturedJobs from "./featured-jobs";
import ProductList from "./products";
import Partners from "../../components/Shared/Partners";

class Products extends Component {
    componentDidMount() {
        document.body.classList = "";
        window.addEventListener("load", this.scrollNavigation, true);
      }

      // Make sure to remove the DOM listener when the component is unmounted.
    componentWillUnmount() {
        window.removeEventListener("load",this.scrollNavigation, true);
     }

      scrollNavigation = () => {
          var doc = document.documentElement;
          var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
          if(top > -10)
          {
               document.getElementById('topnav').classList.add('nav-sticky');
          }
          else
          {
            document.getElementById('topnav').classList.remove('nav-sticky');
          }
      }
    render() {
        return (
            <React.Fragment>
                {/* section */}


                {/* shape */}


                <section className="section">
                    {/* categories */}


                    {/* featured jobs */}


                    {/* candidates */}
                    <ProductList />


                    {/* review */}


                    {/* partners */}

                </section>



            </React.Fragment>
        );
    }
}

export default Products;
