import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from '@material-ui/core/AppBar';

import NavBar from './navbar'
import Landing from './landing'
import Landing2 from './landing2'
import CTA from './cta'



function App() {
  return (

<React.Fragment>
    <NavBar />
    <Landing2 />
    <CTA />

    </React.Fragment>

  );
}

export default App;
