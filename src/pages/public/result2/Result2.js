import React, { useEffect } from "react"; 
import AOS from 'aos';
import "aos/dist/aos.css"; 
import { Button, Container, Grid, TextField} from "@material-ui/core";   
import './Result2.scss'; 
import {
    duca,highInterest,eqbank,savingBanner
}
from "../../../core/Images";
import Testimonials from "../../../components/shared/testimonial/Testimonials";
import Partner from "../../../components/shared/partner/Partner";
import PartnerLogo from "../../../components/shared/partner-logo/PartnerLogo"; 
import Blog from "../../../components/shared/blog/Blog";

const Result = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (<>
        {/* interest saving start here */}
         <section className="interest-savings">
            <img src={savingBanner} alt="" className="saving-bg"/>
            <Container >
                <Grid container>
                    <Grid item  xs={12} sm={12} md={12} lg={12} spacing={2} className="d-flex justify-content-center">
                        <h1>The best high interest savings <span>accounts in Canada for 2022</span></h1> 
                    </Grid>
                </Grid>
            </Container>
         </section>
        {/* Compare saving start here */}
        <section className="compare-saving">
            <Container>
                <Grid container>
                    <Grid item  xs={12} sm={12} md={12} lg={12} spacing={2}>
                        <div className="compare-saving-wrap">
                            <ul className="d-flex align-items-center">
                                <li>
                                    <h3>Compare savings accounts</h3>
                                    <p>Rates updated: May 28, 2022, 8:21 a.m.</p>
                                </li>
                                <li> 
                                    <TextField
                                        id="first-name"
                                        label="Choose location"
                                        type="test" 
                                        variant="filled"
                                        className="blue-bordered"
                                    />
                                </li>
                            </ul>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
        {/* advertising disclosure */}
        <section className="advertising-disclosure">
            <Container>
                <Grid container>
                    <Grid item  xs={12} sm={12} md={12} lg={12} spacing={2}>
                        <div className="advertising-disclosure-inner">
                            <p>advertising disclosure</p>
                            <h3>Viewing <span>high interest</span> with a balance of <span>$5,000</span></h3>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
        {/* bank listing */}
        <section className="bank-listing">
            <Container>
                <Grid container>
                    <Grid item  xs={12} sm={12} md={12} lg={12} spacing={2}>
                         <div className="banking-listing-inner">
                               <div className="bank-listing-top">
                                    <div className="listing-top-left">
                                        {/* bank name logo */}
                                        <div className="bank-name-logo">
                                            <figure>
                                                <img src={eqbank} alt="" />
                                            </figure>
                                            <h3>EQ Bank Savings Plus Account</h3>
                                        </div>
                                        {/* bank-fees */}
                                        <div className="bank-fees">
                                            <ul>
                                                <li className="d-flex align-items-center">
                                                    <span>Monthly fee</span>
                                                    <span>$0.00</span>
                                                </li>
                                                <li className="d-flex align-items-center">
                                                    <span>Transaction fees</span>
                                                    <span>$0.00</span>
                                                </li>
                                                <li className="d-flex align-items-center">
                                                    <span>E-transfer</span>
                                                    <span>$0.00</span>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* other information */}
                                        <div className="other-information">
                                            <h3>Other information</h3>
                                            <ul>
                                                <li>Joining EQ Bank gets you $150**</li>
                                                <li>Not available in Quebec</li>
                                                <li>Individual and Joint Accounts available</li>
                                                <li>Interest is taxable</li>
                                                <li>Free Interac e-Transfers®.</li>
                                                <li>Free e-transfers and no monthly fees</li>
                                            </ul>
                                        </div>
                                        {/* Read less button */}
                                        <div className="read-less-btn">
                                            <Button variant=" " color=""><span></span>read less</Button>
                                        </div>
                                    </div>
                                    <div className="listing-top-right">
                                        <div className="listing-right-card">
                                            <h4>1.50%</h4>
                                            <p>$75 first year return based on $5,000 balance</p>
                                        </div>
                                        <Button variant="contained" color="secondary">go to site</Button> 
                                    </div>
                                </div> 
                               <div className="bank-listing-bottom">
                                    <ul className="d-flex align-items-start">
                                        <li>
                                            <p>Interest calculated: daily</p>
                                            <p>Interest paid: monthly</p> 
                                        </li>
                                        <li>
                                            <p>Minimum balance: $0</p>
                                            <p>(required)</p> 
                                        </li>
                                        <li>
                                            <p>Insurance: CDIC eligible</p> 
                                        </li>
                                    </ul>
                                </div> 
                         </div>
                         <div className="banking-listing-inner">
                               <div className="bank-listing-top">
                                    <div className="listing-top-left">
                                        {/* bank name logo */}
                                        <div className="bank-name-logo">
                                            <figure>
                                                <img src={duca} alt="" />
                                            </figure>
                                            <h3>EQ Bank Savings Plus Account</h3>
                                        </div>
                                        {/* bank-fees */}
                                        <div className="bank-fees">
                                            <ul>
                                                <li className="d-flex align-items-center">
                                                    <span>Monthly fee</span>
                                                    <span>$0.00</span>
                                                </li>
                                                <li className="d-flex align-items-center">
                                                    <span>Transaction fees</span>
                                                    <span>$0.00</span>
                                                </li>
                                                <li className="d-flex align-items-center">
                                                    <span>E-transfer</span>
                                                    <span>$0.00</span>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* other information */}
                                        <div className="other-information">
                                            <h3>Other information</h3>
                                            <ul>
                                                <li>Joining EQ Bank gets you $150**</li>
                                                <li>Not available in Quebec</li>
                                                <li>Individual and Joint Accounts available</li>
                                                <li>Interest is taxable</li>
                                                <li>Free Interac e-Transfers®.</li>
                                                <li>Free e-transfers and no monthly fees</li>
                                            </ul>
                                        </div>
                                        {/* Read less button */}
                                        <div className="read-less-btn">
                                            <Button variant=" " color=""><span></span>read less</Button>
                                        </div>
                                    </div>
                                    <div className="listing-top-right">
                                        <div className="listing-right-card">
                                            <h4>2.50%</h4>
                                            <p>$83 first year return based on $5,000 balance</p>
                                        </div>
                                        <Button variant="contained" color="secondary">go to site</Button> 
                                    </div>
                                </div> 
                               <div className="bank-listing-bottom">
                                    <ul className="d-flex align-items-start">
                                        <li>
                                            <p>Interest calculated: daily</p>
                                            <p>Interest paid: monthly</p> 
                                        </li>
                                        <li>
                                            <p>Minimum balance: $0</p>
                                            <p>(required)</p> 
                                        </li>
                                        <li>
                                            <p>Insurance: CDIC eligible</p> 
                                        </li>
                                    </ul>
                                </div> 
                         </div>
                         <div className="banking-listing-inner">
                               <div className="bank-listing-top">
                                    <div className="listing-top-left">
                                        {/* bank name logo */}
                                        <div className="bank-name-logo">
                                            <figure>
                                                <img src={highInterest} alt="" />
                                            </figure>
                                            <h3>Wyth High Interest Savings Account</h3>
                                        </div>
                                        {/* bank-fees */}
                                        <div className="bank-fees">
                                            <ul>
                                                <li className="d-flex align-items-center">
                                                    <span>Monthly fee</span>
                                                    <span>$0.00</span>
                                                </li>
                                                <li className="d-flex align-items-center">
                                                    <span>Transaction fees</span>
                                                    <span>$0.00</span>
                                                </li>
                                                <li className="d-flex align-items-center">
                                                    <span>E-transfer</span>
                                                    <span>$0.00</span>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* other information */}
                                        <div className="other-information">
                                            <h3>Other information</h3>
                                            <ul>
                                                <li>Joining EQ Bank gets you $150**</li>
                                                <li>Not available in Quebec</li>
                                                <li>Individual and Joint Accounts available</li>
                                                <li>Interest is taxable</li>
                                                <li>Free Interac e-Transfers®.</li>
                                                <li>Free e-transfers and no monthly fees</li>
                                            </ul>
                                        </div>
                                        {/* Read less button */}
                                        <div className="read-less-btn">
                                            <Button variant=" " color=""><span></span>read less</Button>
                                        </div>
                                    </div>
                                    <div className="listing-top-right">
                                        <div className="listing-right-card">
                                            <h4>1.60%</h4>
                                            <p>$80 first year return based on $5,000 balance</p>
                                        </div>
                                        <Button variant="contained" color="secondary">go to site</Button> 
                                    </div>
                                </div> 
                               <div className="bank-listing-bottom">
                                    <ul className="d-flex align-items-start">
                                        <li>
                                            <p>Interest calculated: daily</p>
                                            <p>Interest paid: monthly</p> 
                                        </li>
                                        <li>
                                            <p>Minimum balance: $0</p>
                                            <p>(required)</p> 
                                        </li>
                                        <li>
                                            <p>Insurance: CDIC eligible</p> 
                                        </li>
                                    </ul>
                                </div> 
                         </div>
                         <div className="show-more-btn">
                             <Button variant="contained" color="secondary">Show More</Button> 
                         </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
        {/* Testimonials */}
        <Testimonials/>

        {/* Blog */}
        <Blog/>

        {/* Partner Logo */}
        <PartnerLogo/>

        {/* Partner */}
        <Partner/>
 
    </>)
}

export default Result