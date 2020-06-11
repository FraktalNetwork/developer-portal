import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';

import NavBar from './navbar'
import Landing from './landing'
import CTA from './cta'
import FooterSimple from '../../../components/Layout/FooterSimple'
import Footer from '../../../components/Layout/Footer'


function App() {
  return (

<React.Fragment>
    <NavBar />
    <Landing />
    <CTA />
    <Footer />
    </React.Fragment>

  );
}

export default App;
