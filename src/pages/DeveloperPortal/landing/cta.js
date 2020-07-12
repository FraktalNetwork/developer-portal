import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Col, Row } from 'reactstrap';
import { Link, BrowserRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CTA() {
    const classes = useStyles();

  return (
    <React.Fragment>
    <section className="section pt-0">
    <div className="productstitle">
    <h2 className="title">What are you interested in?</h2>
    </div>

    <Container maxWidth="lg">

    <div className={classes.root}>
      <Grid container spacing={3}>
      <Grid item xs={12} xs={6} md={3} lg={3}><a href="/developer-portal-documentation">
          <Paper className={classes.paper}><h4 className="mt-3 text-center title text-dark">Fraktal Network</h4>
          <p className="">Earn FRAK by contributing to development. </p></Paper>
        </a></Grid>
        <Grid item xs={12} xs={6} md={3} lg={3}><a href="/developer-portal-documentation">
          <Paper className={classes.paper}> <h4 className="mt-3 text-center title text-dark">Applications</h4>
           <p className="">Learn how to build a Fraktal powered application.</p></Paper>
        </a></Grid>
        <Grid item xs={12} xs={6} md={3} lg={3}><a href="/developer-portal-documentation">
          <Paper className={classes.paper}><h4 className="mt-3 text-center title text-dark">Staking</h4>
             <p className="">Set up a Full Node and become a Validator. </p></Paper>
        </a></Grid>
        <Grid item xs={12} xs={6} md={3} lg={3}><a href="/developer-portal-documentation">
          <Paper className={classes.paper}><h4 className="mt-3 text-center title text-dark">Tutorials</h4>
          <p className="">Learn something new and practice your skills.</p></Paper>
        </a></Grid>

      </Grid>
    </div>

  </Container>



    </section>

    </React.Fragment>
  );
}
