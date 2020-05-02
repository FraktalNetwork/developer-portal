import React, { Component, Suspense } from 'react';
import { withRouter } from 'react-router-dom';
// Scroll up button
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";

//Import Switcher


// Layout Components
const Topbar = React.lazy(() => import('./Topbar'));

const Footer = React.lazy(() => import('./Footer'));
const FooterWithoutMenuLightSocialOnly = React.lazy(() => import('./FooterWithoutMenuLightSocialOnly'));

class Layout extends Component {

  Loader = () => {
    return (
      <div id="preloader">
          <div id="status">
              <div className="spinner">
                  <div className="double-bounce1"></div>
                  <div className="double-bounce2"></div>
              </div>
          </div>
      </div>
    );
}

  render() {
    return (
      <React.Fragment>
         <Suspense fallback = {this.Loader()} >
        {

          <Topbar />
        }

        {this.props.children} >
      {
            <FooterWithoutMenuLightSocialOnly />
      }

        <div id="bottomIcon">
          {/* scrollup button */}
          <ScrollUpButton className="bottomIcon"/>
        </div>
        </Suspense>
      </React.Fragment>
    );
  }
}

export default withRouter(Layout);
