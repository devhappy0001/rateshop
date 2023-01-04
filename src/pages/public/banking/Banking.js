import React, { useState,useEffect } from "react";
import { Button, Container, Grid,AccordionSummary,AccordionDetails,Typography, TextField,} from "@material-ui/core";
import './banking.scss'
import AOS from 'aos';
import "aos/dist/aos.css";
import {
    bankingbanner,
    chequing,
    business,
    children,
    savings,
    senior,
    student,
    eqbank,
    alternabank,
    tangerine,
}
from "../../../core/Images";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Testimonials from '../../../components/shared/testimonial/Testimonials';
import Blog from '../../../components/shared/blog/Blog';
import PartnerLogo from '../../../components/shared/partner-logo/PartnerLogo';
import Partner from '../../../components/shared/partner/Partner';
import CardCommon from "../../../components/shared/card-common/CardCommon";
import Accordion from '@material-ui/core/Accordion';
import AddIcon from '@material-ui/icons/Add';
import MinimizeIcon from '@material-ui/icons/Minimize';
import SelectUI from "../../../components/ui/select/SelectUI";

const Banking = () => {

    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const [network, setnetwork] = useState('');
    const networkHandler = (e) => {
        setnetwork(e.target.value);
    }
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
    return (
        <>
        {/* hero banner section start */}

        <section className='common-image-bg banking-banner'>
            <Container>
                <Grid container>
                    <Grid lg={6} item  className="cs-p0">
                        <div className='banner-content'>
                            <div className="heading">
                                <h1>Find The Best <br/><span className="com-back-head">Bank Accounts</span></h1>
                            </div>
                        </div>
                    </Grid>
                    <Grid lg={6} item  className="cs-p0">
                        <div className='com-banner-img'>
                            <img src={bankingbanner} alt="banking banner"/>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
        
        {/* hero banner section start */}
        {/* common card compare section start */}
         <section className="common-card-compare credit-card-compare">
             <Container>
                 <Grid container>
                     <Grid  xs={12} sm={12} md={12} lg={5} item  className="cs-p0">
                        <div className="heading">
                            <h3><span>Compare</span> Bank Accounts</h3>
                        </div>
                     </Grid>
                     <Grid  xs={12} sm={12} md={12} lg={7} item  className="cs-p0">
                         <div className="inner-com-select">
                            <TextField
                                id="first-name"
                                variant="outlined"
                                placeholder="Toronto, ON, Australia"
                                fullWidth
                                margin="normal"
                                error={true}
                                className="inner-input"
                            />
                            <SelectUI
                                labelId="label"
                                id="select"
                                default
                                style={{ width: '100%' }}
                                value={network}
                                onChange={networkHandler}
                                displayEmpty
                                className="inner-select"
                                items={[{ label: 'All Networks', value: '', disabled: true }, { label: 'gold', value: 'USA' }]}
                            >
                            </SelectUI>
                            <Button variant="contained" color="primary">Search</Button>
                         </div>
                     </Grid>
                 </Grid>
             </Container>
         </section>
        {/* common card compare section end  */}

        {/* com card box with image section start here*/}
            <section className="com-img-box banking-image-box">
                <Container>
                    <Grid container>
                        <Grid xs={6} sm={4} md={3} lg={2} item  className="cs-p0 img-col-box">
                            <div className="image-box">
                                <img src={chequing} alt="Chequing"/>
                                <h3>Chequing</h3>
                            </div>
                        </Grid>
                        <Grid xs={6} sm={4} md={3} lg={2} item  className="cs-p0 img-col-box">
                            <div className="image-box">
                                <img src={savings} alt="Savings"/>
                                <h3>Savings</h3>
                            </div>
                        </Grid>
                        <Grid xs={6} sm={4} md={3} lg={2} item  className="cs-p0 img-col-box">
                            <div className="image-box">
                                <img src={children} alt="Children"/>
                                <h3>Children</h3>
                            </div>
                        </Grid>
                        <Grid xs={6} sm={4} md={3} lg={2} item  className="cs-p0 img-col-box">
                            <div className="image-box">
                                <img src={student} alt="Student"/>
                                <h3>Student</h3>
                            </div>
                        </Grid>
                        <Grid xs={6} sm={4} md={3} lg={2} item  className="cs-p0 img-col-box">
                            <div className="image-box">
                                <img src={senior} alt="Senior"/>
                                <h3>Senior</h3>
                            </div>
                        </Grid>
                        <Grid xs={6} sm={4} md={3} lg={2} item  className="cs-p0 img-col-box">
                            <div className="image-box">
                                <img src={business} alt="Business"/>
                                <h3>Business</h3>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        {/* com card box with image section start here*/}


        {/* banking comapre slider section start here */}
          <section className="compare-com-slider banking-compare-slider">
                <Container>
                    <Grid container>
                        <Grid lg={12} item  className="cs-p0">
                            <div className="compare-slider">
                            <OwlCarousel {...options} >
                                <CardCommon imageName={eqbank}>
                                    <h3>2.30%</h3>
                                    <span>No account fees</span>
                                    <Button variant="contained" color="primary">Apply Now</Button>
                                </CardCommon>    
                                <CardCommon imageName={tangerine}>
                                    <h3>2.30%</h3>
                                    <span>No account fees</span>
                                    <Button variant="contained" color="primary">Apply Now</Button>
                                </CardCommon>
                                <CardCommon imageName={tangerine}>
                                    <h3>2.30%</h3>
                                    <span>No account fees</span>
                                    <Button variant="contained" color="primary">Apply Now</Button>
                                </CardCommon>
                                <CardCommon imageName={alternabank}>
                                    <h3>2.30%</h3>
                                    <span>No account fees</span>
                                    <Button variant="contained" color="primary">Apply Now</Button>
                                </CardCommon>
                                <CardCommon imageName={eqbank}>
                                    <h3>2.30%</h3>
                                    <span>No account fees</span>
                                    <Button variant="contained" color="primary">Apply Now</Button>
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
          {/* banking comapre slider section end here */}
            {/* common accordian section start here */}
            <section className="com-accordian-question banking-accordian">
                <Container>
                    <Grid container>
                        <Grid sm={12} md={12} lg={12} item  className="cs-p0">
                            <div className="accordian-inner">
                                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="accordian-main">
                                    <AccordionSummary expandIcon={expanded === 'panel1'?<MinimizeIcon/>:<AddIcon/>}rols="accordian1" id="accordian1" className='accordian-title'>
                                        <Typography><span>Compare Bank Accounts.</span></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className='accordian-discription'>
                                        <Typography>
                                             Bank accounts aren’t something that we think about very often. Most people get a youth account when they’re very young from the same institution that their parents bank at, then stay with them forever.<br></br>
                                            It may not occur to you, but you could actually be paying substantial bank fees without realizing you are, or that you don’t even have to! There are plenty of free banking options that offer the exact same features you would get from a Big 5 bank account. <br></br>
                                             “What’s the catch?” you might ask. But I’ll ask you, “What’s the catch with your current bank account?” Usually, they catches are minimum balances or $10 - $15 per month just for having somewhere to put your money. It doesn’t have to be this way! <br></br>
                                             If you’re fed up with paying high fees for the privilege of saving your own money, then it’s time to compare bank accounts. But don’t limit your search to one of the other big banks – take a look at smaller banks, online banks, or even credit unions. They often offer better service or better fees, and sometimes both! 
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="accordian-main">
                                    <AccordionSummary expandIcon={expanded === 'panel2'?<MinimizeIcon/>:<AddIcon/>} aria-controls="accordian2" id="accordian2" className='accordian-title'>
                                        <Typography><span>How to compare bank accounts in Canada.</span></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className='accordian-discription'>
                                        <Typography>
                                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                            sit amet blandit leo lobortis eget. 
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className="accordian-main">
                                    <AccordionSummary expandIcon={expanded === 'panel3'?<MinimizeIcon/>:<AddIcon/>} aria-controls="accordian3" id="accordian3" className='accordian-title'>
                                        <Typography><span>Monthly Fees.</span></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className='accordian-discription'>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                            sit amet blandit leo lobortis eget. 
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className="accordian-main">
                                    <AccordionSummary expandIcon={expanded === 'panel4'?<MinimizeIcon/>:<AddIcon/>} aria-controls="accordian4" id="accordian4" className='accordian-title'>
                                        <Typography><span>Free Interac e-Transfers.</span></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className='accordian-discription'>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                            sit amet blandit leo lobortis eget. 
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className="accordian-main">
                                    <AccordionSummary expandIcon={expanded === 'panel5'?<MinimizeIcon/>:<AddIcon/>} aria-controls="accordian5" id="accordian5" className='accordian-title'>
                                        <Typography><span>Interest Rate.</span></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className='accordian-discription'>
                                        <Typography>
                                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                            sit amet blandit leo lobortis eget. 
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} className="accordian-main">
                                    <AccordionSummary expandIcon={expanded === 'panel6'?<MinimizeIcon/>:<AddIcon/>} aria-controls="accordian6" id="accordian6" className='accordian-title'>
                                        <Typography><span>Putting it together.</span></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className='accordian-discription'>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                            sit amet blandit leo lobortis eget. 
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} className="accordian-main">
                                    <AccordionSummary expandIcon={expanded === 'panel7'?<MinimizeIcon/>:<AddIcon/>} aria-controls="accordian7" id="accordian7" className='accordian-title'>
                                        <Typography><span>Best Business Bank Accounts.</span></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className='accordian-discription'>
                                        <Typography>
                                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                            sit amet blandit leo lobortis eget. 
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        {/* common accordian section start here */}

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

export default Banking