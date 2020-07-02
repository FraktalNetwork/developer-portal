import React, { Component } from 'react';
import { Container } from "reactstrap";

//Import Components
import Intro from "./intro";
import Partners from "./partners";
import Contributing from './contributing'


//Import Images


class Community extends Component {




      scrollNavigation = () => {
          var doc = document.documentElement;
          var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
          if(top > -10)
          {
               document.getElementById("buyButton").classList.remove("btn-light");
               document.getElementById("buyButton").classList.add("btn-primary");
               document.getElementById('topnav').classList.add('nav-sticky');
          }
          else
          {
            document.getElementById("buyButton").classList.remove("btn-primary");
            document.getElementById("buyButton").classList.add("btn-light");
            document.getElementById('topnav').classList.remove('nav-sticky');
          }
      }
    render() {
        return (
            <React.Fragment>
            <Intro />
            <Contributing />
            <Partners />
            </React.Fragment>
        );
    }
}

export default Community;
