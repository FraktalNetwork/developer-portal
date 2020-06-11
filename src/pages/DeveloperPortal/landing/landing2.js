import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


import LandingLeft from "../../../components/Shared/landingleft";

import Image from "../../../images/hosting/1.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


export default function Landing2() {
  const classes = useStyles();

  return (
    <React.Fragment>
<Container maxWidth="lg" className="bg-light">
<div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Paper className={classes.paper}>   <div className="section-title">
                       <LandingLeft
                       desc = "Learn how to contribute to Fraktal, build your own applications powered by Fraktal Network, and become a staking validator."

                       class = "mdi-18px h5 mr-2"
                       >
                           <h4 className="title mb-4">Fraktal Developer Portal</h4>

                       </LandingLeft>


                   </div></Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Paper className={classes.paper}> <img src={Image} className="developerlandingimage" alt="" /></Paper>
        </Grid>

      </Grid>
    </div>















    </Container>

    </React.Fragment>
  );
}
