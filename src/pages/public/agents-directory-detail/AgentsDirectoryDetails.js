import React, { useState, useEffect } from "react";
import { Button, Container, Grid, TextField, } from "@material-ui/core";
import './agentsDirectoryDetails.scss';
import AOS from 'aos';
import "aos/dist/aos.css";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { agentListing } from '../../constant';
import CallIcon from '@material-ui/icons/Call';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailIcon from '@material-ui/icons/Mail';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import Pagination from '@material-ui/lab/Pagination';
import Testimonials from "../../../components/shared/testimonial/Testimonials";
import Partner from "../../../components/shared/partner/Partner";
import PartnerLogo from "../../../components/shared/partner-logo/PartnerLogo";
import ApplyForm from "../../../components/shared/apply-form/applyForm";

const AgentsDirectoryDetails = () => {


    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <>
            {/* Directory listing */}
            <section className='agent-directory-detail'>
                <Container>
                    <Grid container>
                        <Grid container item lg={8} spacing={3}>
                            <div className="directory-listing-inner" >
                                <div className="agent-img">
                                    <figure>
                                        {/* <img src={item.image}></img> */}
                                    </figure>
                                </div>
                                <div className="agent-details">
                                    <div className="agent-name">
                                        <h3>Michael Squeo <span className="license-number">Agent License #: M08010447</span></h3>
                                        <h4 className="agent-position">Mortgage Broker</h4>
                                    </div>
                                    <div className="agent-details-links">
                                        <ul>
                                            <li>
                                                <a href='tel:(416) 827-2626'>
                                                    <span><CallIcon /></span>(416) 827-2626
                                                </a>
                                            </li>
                                            <li>
                                                <a href='tel:6476575455'>
                                                    <span><PhoneAndroidIcon /></span> (416) 827-2626
                                                </a>
                                            </li>
                                            <li>
                                                <a href='tel:8006350523'>
                                                    <span><MailIcon /></span> (416) 827-2626
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="verified-icons">
                                        <ul>
                                            <li>
                                                <figure>
                                                    <img src=""></img>
                                                </figure>
                                            </li>
                                            <li>
                                                <figure>
                                                    <img src=""></img>
                                                </figure>
                                            </li>
                                            <li>
                                                <figure>
                                                    <img src=""></img>
                                                </figure>
                                            </li>
                                            <li>
                                                <figure>
                                                    <img src=""></img>
                                                </figure>
                                            </li>
                                            <li>
                                                <figure>
                                                    <img src=""></img>
                                                </figure>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid container item lg={4} spacing={3}>
                            <div className="referral-partner">
                                <h3>SIGNUP AS A REFERRAL PARTNER</h3>
                                <div className="qr-code">
                                    <figure>
                                        <img src="" alt=""></img>
                                    </figure>
                                </div>
                                <p>Scan QR Code</p>
                            </div>
                        </Grid>
                        <Grid container item lg={8} spacing={3}>
                            <div className="agent-detail-info">
                                <p>Being part of the real estate and mortgage industry for over 20 years. I have affiliated myself with Rateshop Inc. one of the fastest growing independent mortgage brokerages in Ontario. With my experience in developing and growing businesses and having a</p>
                                <ul className="apply-download-btn">
                                    <li>
                                        <Button variant="contained" color="secondary">
                                            Apply Online
                                        </Button>
                                    </li>
                                    <li>
                                        <Button variant="contained" color="primary">
                                            Download Pdf
                                        </Button>
                                    </li>
                                    <li>
                                        <Button variant="contained" color="secondary">
                                            Book Appointment
                                        </Button>
                                    </li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid container item lg={4} spacing={3}>
                            <div className="advisor-assured">
                                <figure>
                                    <img src="" alt=""></img>
                                </figure>
                                <div className="advisor-assured-text">
                                    <h4>Advisor Assessed in:</h4>
                                    <ul>
                                        <li>Certified Product Expert</li>
                                        <li>120+ Hours in Training</li>
                                        <li>Service Guaranteed</li>
                                        <li>Lending Pro</li>
                                        <li>Lowest Rates</li>
                                    </ul>
                                </div>
                            </div>
                        </Grid>
                        <Grid container item lg={8} spacing={3}>
                            <div className="pre-qualification">
                                <h3>START YOUR PRE-QUALIFICATIONS NOW</h3>
                                <ul className="pre-qualification-steps">
                                    <li>
                                        <div className="pre-qualification-inner">
                                            <h4>Expert Mortgage Advice</h4>
                                            <div className="pre-qualification-text">
                                                <h3>STEP 1: LEARN</h3>
                                                <p>We'll open with a discovery phase. we want to know about you, your goals and your ideas home loan scenario</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="pre-qualification-inner">
                                            <h4>65+ Lenders to Compare</h4>
                                            <div className="pre-qualification-text">
                                                <h3>STEP 2: LEARN</h3>
                                                <p>Together we will plan for your rates, programs,payments and more. With our experienced Advisors, you will get the unbaised, honest advise you deserve</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="pre-qualification-inner">
                                            <h4>Get ready to close</h4>
                                            <div className="pre-qualification-text">
                                                <h3>STEP 3: LEARN</h3>
                                                <p>After selecting right plan for you we will finish processing loan and will prepare you to close . Your new home awaits.</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="best-mortgage-rates">
                                <h3>BEST MORTGAGE RATES</h3>
                                <ul className="best-mortgage-list">
                                    <li>
                                        <div className="mortgage-inner">
                                            <p>Lowest Purchase 5-YR Variable</p>
                                            <h4>4.4%</h4>
                                            <Button variant="contained" color="primary">
                                                Get this rate
                                            </Button>
                                            <Button variant="contained" color="secondary">
                                                Compare
                                            </Button>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mortgage-inner">
                                            <p>Lowest Purchase 5-YR Variable</p>
                                            <h4>4.95%</h4>
                                            <Button variant="contained" color="primary">
                                                Get this rate
                                            </Button>
                                            <Button variant="contained" color="secondary">
                                                Compare
                                            </Button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid container item lg={4} spacing={3}>
                            {/* Apply form */}
                            <ApplyForm/>
                            <Button variant="contained" className="calculators-btn" color="secondary">
                                Calculators
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            {/* Testimonial Section Start */}
            <Testimonials />
            {/* Testimonial Section End */}
            {/* Partner Logo Start*/}
            <PartnerLogo />
            {/* Partner Logo End*/}
            {/* partner logo Start*/}
            <Partner />
            {/* partner logo End*/}
        </>
    )
}

export default AgentsDirectoryDetails