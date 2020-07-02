// React Basic and Bootstrap
import React, { Component } from 'react';

// import generic componenets
import Mission from './mission';
import Vision from './vision';
import Articles from './articles'

class Index extends Component {

    componentDidMount() {
        document.body.classList = "";
        window.addEventListener("load", this.scrollNavigation, true);
      }

       // Make sure to remove the DOM listener when the component is unmounted.
     componentWillUnmount() {
        window.removeEventListener("load", this.scrollNavigation, true);
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



            
                <Vision />


                <Mission />

                <Articles />

            </React.Fragment>
        );
    }
}

export default Index;
