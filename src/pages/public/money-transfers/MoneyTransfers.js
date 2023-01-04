import React, { useState,useEffect } from "react";
import { Button, Container, Grid,AccordionSummary,AccordionDetails,Typography, TextField} from "@material-ui/core";
import "./money-transfers.scss";
import AOS from 'aos';
import "aos/dist/aos.css";
import {
    currenciesdirect,
    ofx,
    transferwise,
    worldfirst,
    worldremit,
}
from "../../../core/Images";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import Testimonials from '../../../components/shared/testimonial/Testimonials';
import Blog from '../../../components/shared/blog/Blog';
import PartnerLogo from '../../../components/shared/partner-logo/PartnerLogo';
import Partner from '../../../components/shared/partner/Partner';
import Accordion from '@material-ui/core/Accordion';
import AddIcon from '@material-ui/icons/Add';
import MinimizeIcon from '@material-ui/icons/Minimize';
import SelectUI from "../../../components/ui/select/SelectUI";

const MoneyTranfers = () => {
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
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
    return (
        <>
    {/* Hero Banner Section Start */}
        <section className='com-bg-banner money-transfer-banner'>
            <Container>
                <Grid container>
                    <Grid xs={12} sm={12} md={12} lg={12} item  className="cs-p0">
                        <div className="banner-content">
                            <div className="heading">
                                <h1>Find the best <br/><span className='com-back-head'>foreign exchange rates</span></h1>
                            </div>
                            
                        </div>                       
                    </Grid>
                </Grid>
            </Container>
        </section>
    {/* Hero Banner Section End */}
    {/* common card compare section start */}
        <section className="common-card-compare moneytransfer-card-compare">
            <Container>
                <Grid container className="justify-center">
                    <Grid xs={12} sm={12} md={12} lg={12} item  className="cs-p0">
                        <div className="inner-com-select">
                            <div className="money-sending">
                                <div className="money-sending-feild">
                                    <span>I am sending</span>
                                    <TextField
                                        id="first-name"
                                        variant="outlined"
                                        placeholder="10,000"
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
                                        items={[{ label: 'CAD', value: '', disabled: true }, { label: 'gold', value: 'USA' }]}
                                    > </SelectUI>
                                </div>
                                <span className="comapre-to">to</span>
                                <SelectUI
                                    labelId="label"
                                    id="select"
                                    default
                                    style={{ width: '100%' }}
                                    value={insurance}
                                    onChange={insuranceHandler}
                                    displayEmpty
                                    className="inner-select"
                                    items={[{ label: 'USD - United States', value: '', disabled: true }, { label: 'gold', value: 'USA' }]}
                                >
                                </SelectUI>
                            </div>
                            <div className="money-compare-btn">
                                <Button variant="contained" color="secondary">Compare Now</Button>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    {/* common card compare section end  */}
    {/* company we compare section start here */}
    <section className="company-compare">
        <div className="heading">
            <h3>Companies We Compare</h3>
        </div>
        <Container>
            <Grid container className="justify-center">                
                <Grid xs={12} sm={12} md={12} lg={12} item  className="cs-p0">
                    <ul className="company-inner-box">
                        <li>
                            <div className="company-img">
                                <img src={ofx} alt="ofx"/>
                            </div>
                        </li>
                        <li>
                            <div className="company-img">
                                <img src={transferwise} alt="transfer wise"/>
                            </div>
                        </li>
                        <li>
                            <div className="company-img">
                                <img src={worldfirst} alt="worldfirst"/>
                            </div>
                        </li>
                        <li>
                            <div className="company-img">
                                <img src={worldremit} alt="worldremit"/>
                            </div>
                        </li>
                        <li>
                            <div className="company-img">
                                <img src={currenciesdirect} alt="currencies direct"/>
                            </div>
                        </li>
                    </ul>
                </Grid>
            </Grid>
        </Container>
    </section>
    {/* company we compare section start here */}
    {/* common accordian section start here */}
        <section className="com-accordian-question moneytransfer-accordian">
            <Container>
                <Grid container>
                    <Grid sm={12} md={12} lg={12} item  className="cs-p0">
                        <div className="accordian-inner">
                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="accordian-main">
                                <AccordionSummary expandIcon={expanded === 'panel1'?<MinimizeIcon/>:<AddIcon/>}rols="accordian1" id="accordian1" className='accordian-title'>
                                    <Typography><span>What is an international money transfer?</span></Typography>
                                </AccordionSummary>
                                <AccordionDetails className='accordian-discription'>
                                    <Typography>
                                        An international money transfer, or remittance, is when you send currency from country to another. The currency you send is converted to the currency of your choice, but is most often converted into the official currency of the recipient's country. If you were to send Canadian dollars to India, for example, it would be converted into Indian rupees before being received.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="accordian-main">
                                <AccordionSummary expandIcon={expanded === 'panel2'?<MinimizeIcon/>:<AddIcon/>} aria-controls="accordian2" id="accordian2" className='accordian-title'>
                                    <Typography><span>What does an international money transfer cost?</span></Typography>
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
                                    <Typography><span>Example Transfer</span></Typography>
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
                                    <Typography><span>How to save money on transfers</span></Typography>
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

export default MoneyTranfers