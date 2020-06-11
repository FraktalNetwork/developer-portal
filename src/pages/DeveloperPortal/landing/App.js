import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from '@material-ui/core/AppBar';

import NavBar from './navbar'
import Landing from './landing'
import CTA from './cta'


function App() {
  return (

<React.Fragment>
    <NavBar />
    <Landing />
    <CTA />

    </React.Fragment>

  );
}

export default App;
