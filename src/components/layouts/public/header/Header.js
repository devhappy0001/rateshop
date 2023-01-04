import React from "react";
import Navbar from "../navbar/Navbar";
import { Button,  Container, Grid, Avatar } from "@material-ui/core";
import {callImage,searchImage} from '../../../../core/Images'
import './header.scss'
import Logo from "../../../shared/logo/Logo";
// import MenuIcon from '@material-ui/icons/Menu';
import CallIcon from '@material-ui/icons/Call';
const Header = () => {

  const clickHandler = () => {

     alert('www');
  }
  return (
    <>
    <Container className="header-wrap">
      <header className="main-header">
          <Grid container className="align-items-center">
            {/* top bar */}
            <Grid md={4} lg={4} item>
              <div className="logo">
              <Logo />

              </div>
            </Grid>
            <Grid md={8} lg={8} item className="d-flex justify-content-end align-items-center">
              <Button variant="contained" className="apply-now" color="secondary" >
                {/* <img alt="Remy Sharp" src={searchImage} /> */}
                Apply Now
              </Button>
              <Button variant="contained" className="call-btn" color="primary">
                <Avatar alt="Remy Sharp" src={callImage} />
                <div className="contact">
                <span>Call</span>
                <span>416-827-2626</span>
                </div>
              </Button>
              <CallIcon className="mobile-call"/>
              {/* <MenuIcon className="mobile-toggle"/> */}

            </Grid>
            {/* navbar */}
            <Grid xs={12} item>
              <Navbar />
            </Grid>
          </Grid>
      </header>
        </Container>
    </>
  );
};

export default Header;
