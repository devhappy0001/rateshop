import React, { useState,useEffect } from "react";
import { Button, Container, Grid } from "@material-ui/core";
import "./Loans.scss";
import { NavLink } from "react-router-dom";
import AOS from 'aos';
import "aos/dist/aos.css";
import {
    howitworkslider,
    renovation,
    emergencies,
    debtconsolidation,
    education,
    businesscapital,
    lifeevents,
    stresstest,
    homebuyer,
    blogbig,
    housing,
    hour,
    approval,
    application,
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
const Loans = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (<>
    {/* Loan Banner Section Start */}
        <section className='com-bg-banner loan-banner'>
            <Container>
                <Grid container>
                    <Grid xs={12} sm={12} md={12} lg={12}>
                        <div className="banner-content">
                            <div className="heading">
                                <h1> <span className='com-back-head'>Get the loan</span><br/> that's right for you</h1>
                            </div>
                            <ul>
                                <li>
                                    <NavLink to="#">
                                        <div className='ban-icon-box'>
                                            <p>Searching doesn't<br/> affect your credit</p>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">
                                        <div className='ban-icon-box'>
                                            <p>Compare dozens of<br/> lenders</p>
                                        </div>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>                       
                    </Grid>
                </Grid>
            </Container>
        </section>
    {/* Loan Banner Section End */}
    {/* Lender Network Section End */}
    <section className='lender-network'>
        <Container>
            <div className="heading">
            <h3>
                <span>Our</span> Lender Network
            </h3>
        </div>
        <div className="net-parent">
            <Grid container>
                <Grid xs={12} sm={6} md={4} lg={4}>
                    <div className="network-box">
                        <div className="network-con-inner">
                            <div className="net-img">
                                <img src={hour} alt="hour"/>
                            </div>
                            <div className="network-content">
                                <h4>24-Hour Funding</h4>
                                <p>Get your money in<br/> as little as a day</p>
                            </div>
                        </div>
                        <div className="network-shape">
                            <div className="shape-icon"></div>
                        </div>
                    </div>
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={4}>
                    <div className="network-box">
                        <div className="network-con-inner">
                            <div className="net-img">
                                <img src={application} alt="application"/>
                            </div>                            
                            <div className="network-content">
                                <h4>$1,000,000,000+</h4>
                                <p>In loan applications</p>
                            </div>
                        </div>
                        <div className="network-shape">
                            <div className="shape-icon"></div>
                        </div>
                    </div>
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={4}>
                    <div className="network-box">
                        <div className="network-con-inner">
                            <div className="net-img">
                                <img src={approval} alt="approval"/>
                            </div>
                            <div className="network-content">
                                <h4>Canada-Wide Loans</h4>
                                <p>National approvals</p>
                            </div>
                        </div>
                        <div className="network-shape">
                            <div className="shape-icon"></div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
        </Container>
    </section>
    {/* Lender Network Section End */}

    {/* Loan how it works Section Start */}

        <section className="how-it-works-slider">
        <Container>
            <div className="heading">
                <h3>
                    <span>How</span> it works
                </h3>
            </div>
            <Grid container>
                <Grid sm={5} md={5} lg={5}>
                    <div className="work-slider-inner">
                        <ul>
                            <li>
                                <h4>Complete Form</h4>
                                <p>It only takes about a minute</p>
                            </li>
                            <li>
                                <h4>Compare Offers</h4>
                                <p>Choose the loan offer that's best for you</p>
                            </li>
                            <li>
                               <h4>Get your Cash</h4>
                               <p>Receive your funds in as little as one business day</p>
                            </li>
                        </ul>
                    </div>
                </Grid>
                <Grid sm={7} md={7} lg={7}>
                    <div className="how-slider-img">
                        <img src={howitworkslider} alt="How it works" />
                    </div>
                </Grid>
            </Grid>
            <div className='loan-get-started'>
                <Button variant="contained" color="secondary">Get Started Now</Button>
            </div>
        </Container>
    </section>
    {/* Loan how it works Section end */}
    {/*what use your loan Section Start */}
    <section className="what-use-loan-sec">
        <Container>
            <div className="heading">
                <h3>
                    <span>What</span> can you use your loan for?
                </h3>
            </div>
            <Grid container>
                <Grid xs={12} sm={6} md={4} lg={4}>
                    <div className="what-use-loan-box">
                        <div className="what-use-box-content">
                            <figure>
                                <img src={renovation} alt="renovation" />
                            </figure>
                            <h4>Renovation</h4>
                        </div>
                        <p>Upgrade the appearance of your home by updating the flooring, tiles, paint, or even do a full remodel for a more comfortable living area.</p>
                    </div>
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={4}>
                    <div className="what-use-loan-box">
                        <div className="what-use-box-content">
                            <figure>
                                <img src={debtconsolidation} alt="Debt Consolidation" />
                            </figure>
                            <h4>Debt Consolidation</h4>
                        </div>
                        <p>Pay off your outstanding credit card debts and other loans and merge them into a single, manageable loan. It’s time to get rid of several minimum monthly payments.</p>
                    </div>
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={4}>
                    <div className="what-use-loan-box">
                        <div className="what-use-box-content">
                            <figure>
                                <img src={education} alt="education" />
                            </figure>
                            <h4>Education</h4>
                        </div>
                        <p>Upgrade your skills by going to college, or help send your children off to university. Help make up the difference that government loans leave.</p>
                    </div>
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={4}>
                    <div className="what-use-loan-box">
                        <div className="what-use-box-content">
                            <figure>
                                <img src={businesscapital} alt="Business Capital" />
                            </figure>
                            <h4>Business Capital</h4>
                        </div>
                        <p>Finance your business’s everyday operations like rent, payroll, and debt payments if you face unstable or unpredictable revenue throughout the year.</p>
                    </div>
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={4}>
                    <div className="what-use-loan-box">
                        <div className="what-use-box-content">
                            <figure>
                                <img src={emergencies} alt="emergencies" />
                            </figure>
                            <h4>Emergencies</h4>
                        </div>
                        <p>Manage your unexpected expenses like auto repairs, medical expenses, home repairs, dental bills, and others quickly and easily in an emergency.</p>
                    </div>
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={4}>
                    <div className="what-use-loan-box">
                        <div className="what-use-box-content">
                            <figure>
                                <img src={lifeevents} alt="Life Events" />
                            </figure>
                            <h4>Life Events</h4>
                        </div>
                        <p>Stay prepared for everything that life might have planned for you, from buying a home or vehicle to getting married.</p>
                    </div>
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={12}>
                    <div className="what-use-loan-btn">
                        <Button variant="contained" color="primary">Apply Now</Button>
                    </div>
                </Grid>
            </Grid>
        </Container>
    </section>
    {/* what use your loan Section Start */}
    {/*how use your loan Section Start */}
    <section className="how-use-loan-sec">
        <Container>
            <div className="why-credit-card">
                <div className="heading">
                    <h3>
                        <span>How</span> can you use your loan for?
                    </h3>
                </div>
                <div className="why-credit-bg">
                    <Grid container>
                        <Grid sm={12} md={6} lg={6}>
                            <div className="why-credit-img">
                                <img src={blogbig} alt="blogbig"/>
                            </div>
                        </Grid>
                        <Grid sm={12} md={6} lg={6}>
                            <div className="why-credit-text">
                                <h4>Why Credit Card Debt Is So Expensive – <br></br>What the Banks Won't Tell You</h4>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className="how-use-inner">
                <Grid container>
                    <Grid sm={6} md={4} lg={4}>
                        <div className="how-use-inner-box">
                            <img src={housing} alt="housing"/>
                            <h5>In Mortgage & Housing News Today</h5>
                            <p>Sears Canada is once again making headlines despite having gone out of business nearly 12 months ago. This time, the issue is extended warranties; or rather, the lack of warranties.</p>
                        </div>
                    </Grid>
                    <Grid sm={6} md={4} lg={4}>
                        <div className="how-use-inner-box">
                            <img src={homebuyer} alt="homebuyer"/>
                            <h5>Guide to Every First Time Homebuyer Program in Canada</h5>
                            <p>Sears Canada is once again making headlines despite having gone out of business nearly 12 months ago. This time, the issue is extended warranties; or rather, the lack of warranties.</p>
                        </div>
                    </Grid>
                    <Grid sm={6} md={4} lg={4} className="last-child">
                        <div className="how-use-inner-box">
                            <img src={stresstest} alt="stresstest"/>
                            <h5>What Is the Mortgage Stress Test in Canada?</h5>
                            <p>Sears Canada is once again making headlines despite having gone out of business nearly 12 months ago. This time, the issue is extended warranties; or rather, the lack of warranties.</p>
                        </div>
                    </Grid>
                </Grid>
            </div>
           
        </Container>
    </section>
    {/*how use your loan Section End */}

    {/*connect leader Section End */}
    <section className="connect-with-leader">
        <Container>
            <div className="connect-inner">
                <Grid container>
                    <Grid xs={12} sm={6} md={6} lg={8}>
                        <div className="connect-text">
                            <h3>Connect With a Lender In As Fast As Five Minutes</h3>
                        </div>
                    </Grid>
                    <Grid xs={12} sm={6} md={6} lg={4}>
                        <div className="connect-btn">
                            <Button variant="contained" color="secondary">Get Started Now</Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Container>
    </section>
    {/*connect leader Section End */}
    {/* Testimonial Section Start */}
        <Testimonials  title="Important Disclosures. Please Read Carefully." description="** Loans are subject to borrower qualifications, application verification, and final credit approval.
Products and services described, as well as interest rates, are subject to change and may differ
as a result of individual conditions." className="testimonial-head" />
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

export default Loans