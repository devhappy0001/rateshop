import React, { useState,useEffect } from "react";
import { Button, Container, Grid,AccordionSummary,AccordionDetails,Typography, TextField} from "@material-ui/core";
import AOS from 'aos';
import "aos/dist/aos.css";
import {
    insurancebanner,
    homeinsurance,
    businessinsurance,
    lifeinsurance,
    rentersinsurance,
    travelinsurance,
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
import Accordion from '@material-ui/core/Accordion';
import AddIcon from '@material-ui/icons/Add';
import MinimizeIcon from '@material-ui/icons/Minimize';
import SelectUI from "../../../components/ui/select/SelectUI";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import './insurance.scss'
const Insurance = () => {
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (_event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const [insurance, setinsurance] = useState('');
    const insuranceHandler = (e) => {
        setinsurance(e.target.value);
    }
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);  
    return (<>
    {/* hero banner section start  */}
        <section className='common-image-bg insurance-banner'>
            <Container>
                <Grid container>
                    <Grid xs={12} sm={6} md={6} lg={6} item  className="cs-p0">
                        <div className='banner-content'>
                            <div className="heading">
                                <h1><span className="com-back-head">Insurance</span> at<br/> your fingertips</h1>
                            </div>
                            <ul>
                                <li><CheckCircleIcon/>Quick Instant Quotes</li>
                                <li><CheckCircleIcon/>Compare Multiple Insurance Quotes</li>
                                <li><CheckCircleIcon/>Same Day Policy Options</li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid xs={12} sm={6} md={6} lg={6} item  className="cs-p0">
                        <div className='com-banner-img'>
                            <img src={insurancebanner} alt="credit card banner"/>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    {/* hero banner section end  */}
    {/* com card box with image section start here*/}
    <section className="com-img-box insurance-image-box">
        <Container>
            <Grid container className="justify-center">
                <Grid xs={6} sm={4} md={3} lg={2} item  className="cs-p0 img-col-box">
                    <div className="image-box">
                        <img src={rentersinsurance} alt="Renters"/>
                        <h3>Renters<br/> Insurance</h3>
                    </div>
                </Grid>
                <Grid xs={6} sm={4} md={3} lg={2} item  className="cs-p0 img-col-box">
                    <div className="image-box">
                        <img src={homeinsurance} alt="Home"/>
                        <h3>Home Insurance</h3>
                    </div>
                </Grid>
                <Grid xs={6} sm={4} md={3} lg={2} item  className="cs-p0 img-col-box">
                    <div className="image-box">
                        <img src={travelinsurance} alt="Travel"/>
                        <h3>Travel Insurance</h3>
                    </div>
                </Grid>
                <Grid xs={6} sm={4} md={3} lg={2} item  className="cs-p0 img-col-box">
                    <div className="image-box">
                        <img src={lifeinsurance} alt="Life"/>
                        <h3>Life Insurance</h3>
                    </div>
                </Grid>
                <Grid xs={6} sm={4} md={3} lg={2} item  className="cs-p0 img-col-box">
                    <div className="image-box">
                        <img src={businessinsurance} alt="Business"/>
                        <h3>Business Insurance</h3>
                    </div>
                </Grid>
            </Grid>
        </Container>
    </section>
{/* com card box with image section start here*/}
{/* common card compare section start */}
    <section className="common-card-compare insurance-compare">
        <Container>
            <Grid container className="justify-center">
                <Grid sx={12} sm={12} md={12} lg={8} item  className="cs-p0">
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
                        value={insurance}
                        onChange={insuranceHandler}
                        displayEmpty
                        className="inner-select"
                        items={[{ label: 'Homeowner', value: '', disabled: true }, { label: 'gold', value: 'USA' }]}
                    >
                    </SelectUI>
                    <Button variant="contained" color="primary">Get Started</Button>
                    </div>
                </Grid>
            </Grid>
        </Container>
    </section>
{/* common card compare section end  */}
{/* common accordian section start here */}
    <section className="com-accordian-question insurance-accordian">
        <Container>
            <Grid container>
                <Grid sm={12} md={12} lg={12} item  className="cs-p0">
                    <div className="accordian-inner">
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="accordian-main">
                            <AccordionSummary expandIcon={expanded === 'panel1'?<MinimizeIcon/>:<AddIcon/>}rols="accordian1" id="accordian1" className='accordian-title'>
                                <Typography><span>How To Compare Insurance Rates.</span></Typography>
                            </AccordionSummary>
                            <AccordionDetails className='accordian-discription'>
                                <Typography>
                                    1. Fill out our online insurance quote form in as little as 5 minutes<br></br>
                                    2. Compare your insurance quotes. Change your information (like made/model of car, or amount of deductible) to see if you can save even more money<br></br>
                                    3. Apply online instantly<br></br>
                                    Anyone that wants to drive in Canada needs car insurance, and about 2/3rds of Canadians own at least one vehicle. That’s a lot of money being paid in car insurance premiums!<br></br>
                                    Many homeowners and even renters also take out home insurance policies, which can actually end up being cheaper than many auto insurance policies, depending on your level of coverage. Even if it’s cheaper on average, you still want to find the best price.<br></br>
                                    Paying insurance can be especially painful if you’ve never had to make a claim. If you don’t claim anything, you never see the benefit of insurance. It can feel like a real drain on your finances, and you may want to just get the cheapest option available so that you can minimize your monthly insurance expense. But that may not be the best way to handle insurance either, since if you do need to make a claim, you may find that you don’t have enough coverage!<br></br>
                                    The best way to save a lot of money on your home, auto, and life insurance policies is to shop around for the best deals before you buy. And the best way to shop for the best deals is to compare insurance quotes online.<br></br>
                                    Ontario has some of the highest insurance rates in the country. If you don’t compare insurance quotes in Ontario, you’re likely overpaying. In fact, Ontarians have been overpaying for car insurance for years! Staying with the same company year-over-year doesn’t automatically give you the best car insurance deal, so be sure to compare insurance rates at least once a year to see if you could be saving money. 
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="accordian-main">
                            <AccordionSummary expandIcon={expanded === 'panel2'?<MinimizeIcon/>:<AddIcon/>} aria-controls="accordian2" id="accordian2" className='accordian-title'>
                                <Typography><span>Why compare insurance in Ontario?</span></Typography>
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
                                <Typography><span>What affects car insurance rates?</span></Typography>
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
                                <Typography><span>Driving history</span></Typography>
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
                                <Typography><span>Location</span></Typography>
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
                                <Typography><span>Coverage</span></Typography>
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
                                <Typography><span>What affects home insurance?</span></Typography>
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
    </>)
}

export default Insurance