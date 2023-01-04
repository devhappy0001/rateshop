import React, { useEffect } from "react";
import { Button, Container, Grid,
    // AccordionSummary,AccordionDetails,Typography, TextField
} from "@material-ui/core";
import AOS from 'aos';
import "aos/dist/aos.css";
import {
    contactmap,
    location,
    call,
    career,
    email,
    phone,
    facebook,
    linkedin,
    twitter,
    rss,
}
from "../../../core/Images";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import Testimonials from '../../../components/shared/testimonial/Testimonials';
import Blog from '../../../components/shared/blog/Blog';
import PartnerLogo from '../../../components/shared/partner-logo/PartnerLogo';
import Partner from '../../../components/shared/partner/Partner';
// import CardCommon from "../../../components/shared/card-common/CardCommon";
// import Accordion from '@material-ui/core/Accordion';
// import AddIcon from '@material-ui/icons/Add';
// import MinimizeIcon from '@material-ui/icons/Minimize';
// import SelectUI from "../../../components/ui/select/SelectUI";
// import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import './contact.scss'
import { NavLink } from "react-router-dom";
const Contact = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []); 
    return (<>
    {/* contact banner section start here */}
        <section className='contact-main'>
            <div className='contact-inner'>
                <div className='contact-detail'>
                    <Container>
                        <Grid container>
                            <Grid xs={12} sm={12} md={6} lg={6} item  className="cs-p0">
                                <div className="detail-inner">
                                    <div className='heading'>
                                        <h3><span>Contact</span> Information</h3>
                                        <p>Licence # - Rateshop Inc. 12733</p>
                                    </div>
                                    <ul>
                                        <li>
                                            <div className="contact-icon">
                                                <img src={location} alt="Loaction"/>
                                            </div>
                                            <p>1200 Derry Rd E<br/>
                                            Mississauga, Ontario L5T 0B3<br/>
                                            Canada</p>
                                        </li>
                                        <li>
                                            <NavLink to="">
                                                <div className="contact-icon">
                                                    <img src={call} alt="call"/>
                                                </div> 
                                                416-827-2626
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="">
                                                <div className="contact-icon">
                                                    <img src={phone} alt="phone"/>
                                                </div>
                                                800-264-5855
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="">
                                                <div className="contact-icon">
                                                    <img src={email} alt="email"/>
                                                </div>
                                                info@rateshop.ca
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="">
                                                <div className="contact-icon">
                                                    <img src={career} alt="career"/>
                                                </div>
                                                Careers
                                            </NavLink>
                                        </li>
                                    </ul>
                                    <div className='contact-button'>
                                        <Button variant="contained" color="primary">Book Appointment</Button>
                                        <Button variant="contained" color="primary">About RateShop</Button>
                                    </div>
                                </div>
                            </Grid>
                            <Grid lg={6} item  className="cs-p0"></Grid>
                        </Grid>
                    </Container>
                   
                </div>
                <div className="conatact-map">
                    <img src={contactmap} alt="contact map"/>
                </div>
            </div>
        </section>
    {/* contact banner section end here */}
    {/* contact alternate section start here */}
        <section className="contact-alternate">
            <Container>
                <Grid container>
                    <Grid xs={12} sm={12} md={12} lg={12} item  className="cs-p0">
                        <div className="alternate-inner">
                            <div className="heading">
                                <h3>Alternate way to Connect with Us</h3>
                            </div>
                            <p>We definitely love supporting our customers through social media. Drop us a comment through your preferred social network...</p>
                            <ul className="contact-social">
                                <li>
                                    <NavLink to="">
                                        <img src={facebook} alt="facebook"/>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="">
                                        <img src={twitter} alt="twitter"/>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="">
                                        <img src={linkedin} alt="linkedin"/>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="">
                                        <img src={rss} alt="rss"/>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    {/* contact alternate section start here */}

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
        </>)
}

export default Contact