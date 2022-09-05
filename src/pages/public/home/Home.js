import React, { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import Teams from "../../../components/shared/team/Teams";
import { Button, Container, Grid } from "@material-ui/core";
import "./home.scss";
import Blog from "../../../components/shared/blog/Blog";
import AOS from 'aos';
import "aos/dist/aos.css";
import QuickApp from "../../../application/quick/QuickApp";
import {
  logo,
  logo2,
  logo3,
  services1,
  services2,
  services3,
  services4,
  worksImg1,
  worksImg2,
  worksImg3,
  choose1,
  choose2,
  choose3,
  choose4,
  choose5,
  choose6,
  centerImage,
  banner,
} from "../../../core/Images";
import Testimonials from "../../../components/shared/testimonial/Testimonials";
import Partner from "../../../components/shared/partner/Partner";
import PartnerLogo from "../../../components/shared/partner-logo/PartnerLogo";
import Marble from "../../../components/shared/marble/Marble";
import DigitalMortagage from "../../../components/shared/digital-mortagage/DigitalMortagage";
import MortgageRate from "../../../components/shared/mortgage-rate/MortgageRate";
import Calculator from "../../../components/shared/calculator/Calculator";
import QuickThanks from "../../../components/popup/QuickThanks";
import QuickFormCompletion from "../../../components/popup/QuickFormCompletion";

const Home = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  return (
    <>
    <QuickFormCompletion/>
    <QuickThanks/>
    {/* banner start here */}
      <section className="banner">
        <img src={banner} alt="img" className="banner-img"/>
        <Container>
          <Grid container>
            <Grid lg={6} item data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
              <div className="heading"  >
                <h1>
                  Get the <span>Mortgage</span><br/> that's right for you
                </h1>
              </div>
              <div className="line"></div>
              <p>
                Searching doesn't affect your credit Compare dozens of lenders
              </p>
              <Button variant="contained">Get Started Now</Button>
            </Grid>
          </Grid>
        </Container>
      </section>
    {/* banner end here */}  

    {/* award winning start here */}
      <section className="award-winning">
        <Container>
          <Grid container className="align-items-center">
            <Grid sm={6} md={6} lg={6} item>
              <div className="award-heading">
                <h2>
                  <span className="strt-line">WE ARE CANADA’S LEADING</span>
                  AWARD WINNING
                  <span> MORTGAGE BROKERAGE.</span>
                </h2>
              </div>
            </Grid>
            <Grid sm={6} md={6} lg={6} item>
              <ul className="award-logos d-flex justify-content-between align-items-center">
                <li>
                  <img src={logo} alt="logo" />
                </li>
                <li>
                  <img src={logo2} alt="logo" />
                </li>
                <li>
                  <img src={logo3} alt="logo" />
                </li>
              </ul>
            </Grid>
          </Grid>
        </Container>
      </section>
    {/* award winning end here */}

   {/* Testimonial Section Start */}
      <Testimonials />
   {/* Testimonial Section End */}

    {/* how it works start */}
      <section className="how-it-works">
        <Container>
          <div className="heading">
            <h3>
              <span>How</span> it works
            </h3>
          </div>
          <Grid container>
            <Grid sm={4} md={4} lg={4} item data-aos="zoom-in-right" data-aos-delay="200" data-aos-duration="1000">
              <div className="how-it-works-inner">
                <div className="top-content">
                  <h5>Step 1</h5>
                  <figure>
                    <img src={worksImg1} alt="img" />
                    <span></span>
                  </figure>
                </div>
                <div className="info-text">Fill Quick 2 Min Application</div>
              </div>
            </Grid>
            <Grid sm={4} md={4} lg={4} item data-aos="zoom-in-down" data-aos-delay="200" data-aos-duration="1000">
              <div className="how-it-works-inner">
                <div className="top-content">
                  <h5>Step 2</h5>
                  <figure>
                    <img src={worksImg2} alt="img" />
                    <span></span>
                  </figure>
                </div>
                <div className="info-text">Get Approved For Lowest Rate</div>
              </div>
            </Grid>
            <Grid sm={4} md={4} lg={4} item data-aos="zoom-in-left" data-aos-delay="200" data-aos-duration="1000">
              <div className="how-it-works-inner">
                <div className="top-content">
                  <h5>Step 3</h5>
                  <figure>
                    <img src={worksImg3} alt="img" />
                    <span></span>
                  </figure>
                </div>
                <div className="info-text">
                  Get Funds & Save Thousands Instantly
                </div>
              </div>
            </Grid>
          </Grid>
          <div className="d-flex justify-content-center mt-60">
            <Button variant="contained">
              Get Started Now
            </Button>
          </div>
        </Container>
      </section>
    {/* how it works end */}

    {/* why choose rateshop start */}
      <section className="why-choose-rateshop">
        <Container>
          <div className="heading">
            <h2>
              <span>Why</span> Choose RateShop
            </h2>
          </div>
          <div className="choose-rate-content">
            <div className="center-img" >
              <img src={centerImage} alt="center Image"  data-aos="zoom-in" data-aos-delay="600" data-aos-duration="1000"/>
            </div>
            <Grid container>
              <Grid sm={4} md={4} lg={4} item>
                <div className="choose-innner" data-aos="fade-right" data-aos-delay="600" data-aos-duration="1000">
                  <figure>
                    <img src={choose1} alt="Image" />
                  </figure>
                  <h5 className="why-choose-title">Cutting-Edge Technology</h5>
                </div>
              </Grid>
              <Grid sm={4} md={4} lg={4} item></Grid>
              <Grid sm={4} md={4} lg={4} item>
                <div className="choose-innner" data-aos="fade-left" data-aos-delay="600" data-aos-duration="1000">
                  <figure>
                    <img src={choose2} alt="Image" />
                  </figure>
                  <h5 className="why-choose-title">
                    Solution For Any <br/>Income & Credit
                  </h5>
                </div>
              </Grid>
              <Grid sm={4} md={4} lg={4} item className="left-center">
                <div className="choose-innner" data-aos="fade-right" data-aos-delay="600" data-aos-duration="1000">
                  <figure>
                    <img src={choose3} alt="Image" />
                  </figure>
                  <h5 className="why-choose-title">65+ Lenders</h5>
                </div>
              </Grid>
              <Grid sm={4} md={4} lg={4} item></Grid>
              <Grid sm={4} md={4} lg={4} item className="right-center">
                <div className="choose-innner"  data-aos="fade-left" data-aos-delay="600" data-aos-duration="1000">
                  <figure>
                    <img src={choose4} alt="Image" />
                  </figure>
                  <h5 className="why-choose-title">200+ Mortgage Experts</h5>
                </div>
              </Grid>
              <Grid sm={4} md={4} lg={4} item>
                <div className="choose-innner"  data-aos="fade-right" data-aos-delay="600" data-aos-duration="1000">
                  <figure>
                    <img src={choose5} alt="Image" />
                  </figure>
                  <h5 className="why-choose-title">Lowest Rate Guaranteed</h5>
                </div>
              </Grid>
              <Grid sm={4} md={4} lg={4} item></Grid>
              <Grid sm={4} md={4} lg={4} item>
                <div className="choose-innner" data-aos="fade-left" data-aos-delay="600" data-aos-duration="1000">
                  <figure>
                    <img src={choose6} alt="Image" />
                  </figure>
                  <h5 className="why-choose-title">Rated 5 Stars on Google</h5>
                </div>
              </Grid>
            </Grid>
            <div className="d-flex justify-content-center mt-20">
              <Button variant="contained">
                Get Started Now
              </Button>
            </div>
          </div>
        </Container>
      </section>
    {/* why choose rateshop end */}

    {/* Quick App Start*/}
        <QuickApp/>
    {/* Quick App End*/}

    {/* What looking for start here  */}

    {/* <section className="looking-for">
        <Container>
          <div className="heading">
            <h2>
              <span>What</span> are you looking to do?
            </h2>
          </div>
          <Grid container>
            <Grid sm={6} md={8} lg={8} item></Grid>
            <Grid sm={6} md={4} lg={4} item>
              <div className="sevices-outer services0" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
                <img src={services1} alt="services" />
                <h4>
                  <NavLink to="">A Purchase</NavLink>
                </h4>
              </div>
            </Grid>
            <Grid sm={6} md={4} lg={4} item>
              <div className="sevices-outer services" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                <img src={services2} alt="services" />
                <h4>
                  <NavLink to="">A Refinace</NavLink>
                </h4>
              </div>
            </Grid>
            <Grid sm={6} md={4} lg={4} item>
              <div className="sevices-outer services1" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                <img src={services3} alt="services" />
                <h4>
                  <NavLink to="">A Renewal/Switch</NavLink>
                </h4>
              </div>
            </Grid>
            <Grid sm={6} md={4} lg={4} item>
              <div className="sevices-outer services2" data-aos="fade-right" data-aos-delay="400" data-aos-duration="1000">
                <img src={services4} alt="services" />
                <h4>
                  <NavLink to="">A Home Equity line</NavLink>
                </h4>
              </div>
            </Grid>
          </Grid>
          <Grid md={12} lg={12} item className="mt-80 d-flex justify-content-center">
            <Button variant="contained">
              Apply Now
            </Button>
          </Grid>
          <div className="shape-1">
            <img src="" alt=""/>
          </div>
        </Container>
      </section> */}
  
      {/* Calculator Section Start */}
         <Calculator />
      {/* Calculator Section End */}
      
      {/* Mortgage Rates Section Start */}
        <MortgageRate/>
      {/* Mortgage Rates Section End */}

      {/* Digital Mortagage Section Start */}
         <DigitalMortagage/>
      {/* Digital Mortagage Section End */}

      {/* Marble Section Start */}
         <Marble/>
      {/* Marble Section End */}

      {/* Team Section Start */}
         <Teams />
      {/* Team Section End */}

      {/* Blog Section Start */}
         <Blog />
      {/* Blog Section End */}

      {/* Partner Logo Start*/}
         <PartnerLogo/>
      {/* Partner Logo End*/}

      {/* partner logo Start*/}
        <Partner/>
      {/* partner logo End*/}
    </>
  );
};

export default Home;
