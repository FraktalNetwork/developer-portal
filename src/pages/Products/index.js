import React, { Component } from 'react';
import { Container } from "reactstrap";

//Import Components

import Shape from "./shape";
import FeaturedJobs from "./featured-jobs";
import Partners from "../../components/Shared/Partners";

class Products extends Component {
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
          var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
          if(top > 80)
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
                <Shape/>

                <section className="section">
                    {/* categories */}


                    {/* featured jobs */}
                    <FeaturedJobs />

                    {/* candidates */}


                    {/* review */}


                    {/* partners */}

                </section>

                <div className="position-relative">
                    <div className="shape overflow-hidden text-light">
                        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default Products;
