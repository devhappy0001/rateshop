import React, { useState,useEffect } from "react";
import { Button, Container, Grid } from "@material-ui/core";
import "./Mortgages.scss";
import { NavLink } from "react-router-dom";
import AOS from 'aos';
import "aos/dist/aos.css";
import {
    renewing,
    hoursapproval,
    b2b,
    cmls,
    logodesjardins,
    manulifelogo,
    howitwork,
}
from "../../../core/Images";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import DigitalMortagage from '../../../components/shared/digital-mortagage/DigitalMortagage';
import QuickApp from '../../../application/quick/QuickApp';
import Testimonials from '../../../components/shared/testimonial/Testimonials';
import Blog from '../../../components/shared/blog/Blog';
import PartnerLogo from '../../../components/shared/partner-logo/PartnerLogo';
import Partner from '../../../components/shared/partner/Partner';
import CardCommon from "../../../components/shared/card-common/CardCommon";

const Mortgages = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
      
        var options=  {
            item:4,
            className:"owl-theme",
            margin:20,
            responsiveClass: true,
            autoplay:false,
            dots:true,
            nav:false,
            responsive: {
              0: {
                  items: 1,
              },
              575: {
                  items: 2,
              },
              991: {
                  items: 3,
              },
              1300: {
                  items: 4,
              }
            }
          }
    return (<>
    {/* Mortagage Banner Section Start */}
        <section className='com-bg-banner mortgage-banner'>
            <Container>
                <Grid container>
                    <Grid xs={12} sm={12} md={12} lg={12}>
                        <div className="banner-content">
                            <div className="heading">
                                <h1>Shop <span className='com-back-head'>mortgage rates</span> that<br/> you actually qualify for</h1>
                            </div>
                            <ul>
                                <li>
                                    <NavLink to="#">
                                        <div className='ban-icon-box'>
                                            <span className="ban-icon">
                                                <img src={hoursapproval} alt="24 Hour Approval" />
                                            </span>
                                            <p>24 Hour Approval</p>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">
                                        <div className='ban-icon-box'>
                                            <span className="ban-icon">
                                                <img src={renewing} alt="renewing/refinancing" />
                                            </span>
                                            <p>I'm<br/>renewing/refinancing</p>
                                        </div>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>                       
                    </Grid>
                </Grid>
            </Container>
        </section>
    {/* Mortagage Banner Section End */}

        <section class="compare-com-slider">
            <Container>
                <Grid container>
                    <Grid lg={12}>
                        <div className="compare-slider">
                        <OwlCarousel {...options} >
                            <CardCommon imageName={cmls}>
                                <h3>2.30%</h3>
                                <span>5-yr Variable</span>
                                <Button variant="contained" color="primary">Inquire</Button>
                            </CardCommon>    
                            <CardCommon imageName={logodesjardins}>
                                    <h3>2.30%</h3>
                                    <span>5-yr Variable</span>
                                    <Button variant="contained" color="primary">Inquire</Button>
                            </CardCommon>
                           
                            <CardCommon imageName={b2b}>
                                     <h3>2.30%</h3>
                                    <span>5-yr Variable</span>
                                    <Button variant="contained" color="primary">Inquire</Button>
                            </CardCommon>
                            <CardCommon imageName={manulifelogo}>
                                    <h3>2.30%</h3>
                                    <span>5-yr Variable</span>
                                    <Button variant="contained" color="primary">Inquire</Button>
                            </CardCommon>
                            <CardCommon imageName={cmls}>
                                <h3>2.30%</h3>
                                <span>5-yr Variable</span>
                                <Button variant="contained" color="primary">Inquire</Button>
                            </CardCommon>    
                        </OwlCarousel>
                        <div className='compare-btn'>
                            <Button variant="contained" color="secondary">Compare all</Button>
                        </div>
                        </div>
                    </Grid>

                </Grid>
            </Container>
        </section>
        {/* Digital Mortagage Section Start */}
            <DigitalMortagage/>
        {/* Digital Mortagage Section End */}
        
        <section className="how-it-works-com">
            <Container>
                <div className="heading">
                    <h3>
                        <span>How</span> it works
                    </h3>
                </div>
                <Grid container>
                    <Grid sm={5} md={5} lg={5}>
                        <div className="how-work-inner">
                            <ul>
                                <li>Fill Quick 2 Min Application</li>
                                <li>Get Approved For Lowest Rate</li>
                                <li>Get Funds & Save Thousands Instantly</li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid sm={7} md={7} lg={7}>
                        <div className="how-work-img">
                            <img src={howitwork} alt="How it works" />
                        </div>
                    </Grid>
                </Grid>
                <div className='get-started'>
                    <Button variant="contained" color="secondary">Get Started Now</Button>
                </div>
            </Container>
        </section>

        {/* Quick App Start*/}
            <QuickApp/>
        {/* Quick App End*/}

        {/* Testimonial Section Start */}
            <Testimonials/>
        {/* Testimonial Section End */}

        {/* Blog Section Start */}
            <Blog/>
        {/* Blog Section End */}

        {/* Partner Logo Start*/}
            <PartnerLogo/>
        {/* Partner Logo End*/}

        {/* partner logo Start*/}
            <Partner/>
        {/* partner logo End*/}
        </>
    )
}

export default Mortgages