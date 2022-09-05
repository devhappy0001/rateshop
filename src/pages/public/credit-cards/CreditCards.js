import React, { useState,useEffect } from "react";
import { Button, Container, Grid,AccordionSummary,AccordionDetails,Typography} from "@material-ui/core";
import "./CreditCards.scss";
import AOS from 'aos';
import "aos/dist/aos.css";
import {
    creditcardbanner,
    visacard,
    visainfinitecard,
    creditcard,
    mastercard,
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

const CreditCards = () => {
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
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const [creditcardselect, setcreditcard] = useState('');
    const creditcardHandler = (e) => {
        setcreditcard(e.target.value);
    }
    const [rewardcard, setrewardcard] = useState('');
    const rewardHandler = (e) => {
        setrewardcard(e.target.value);
    }
    return (<>

        {/* hero banner section start  */}
            <section className='common-image-bg credit-card-banner'>
                <Container>
                    <Grid container>
                        <Grid xs={12} sm={6} md={6} lg={6}>
                            <div className='banner-content'>
                                <div className="heading">
                                    <h1>Best <span className="com-back-head">credit cards</span><br/> for you</h1>
                                </div>
                            </div>
                        </Grid>
                        <Grid xs={12} sm={6} md={6} lg={6}>
                            <div className='com-banner-img'>
                                <img src={creditcardbanner} alt="credit card banner"/>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        {/* hero banner section end  */}
         {/* credit card compare section start */}
         <section className="common-card-compare credit-card-compare">
             <Container>
                 <Grid container>
                     <Grid xs={12} sm={12} md={12} lg={5}>
                        <div className="heading">
                            <h3><span>Compare</span> Credit Cards</h3>
                        </div>
                     </Grid>
                     <Grid xs={12} sm={12} md={12} lg={7}>
                         <div className="inner-com-select">

                         <SelectUI
                            labelId="label"
                            id="select"
                            default
                            style={{ width: '100%' }}
                            value={creditcardselect}
                            onChange={creditcardHandler}
                            displayEmpty
                            className="inner-select"
                            items={[{ label: 'My Cradit Card is', value: '', disabled: true }, { label: 'Visa', value: 'USA' }]}
                        >
                        </SelectUI>
                        <SelectUI
                            labelId="label"
                            id="select"
                            default
                            style={{ width: '100%' }}
                            value={rewardcard}
                            onChange={rewardHandler}
                            displayEmpty
                            className="inner-select"
                            items={[{ label: 'Reward Cards', value: '', disabled: true }, { label: 'gold', value: 'USA' }]}
                        >
                        </SelectUI>
                            <Button variant="contained" color="primary">Find Best Cards</Button>
                         </div>
                     </Grid>
                 </Grid>
             </Container>
         </section>
         {/* credit card compare section end */}

        {/* credit card com slider start */}
            <section class="compare-com-slider credit-compare-slider">
                <Container>
                    <Grid container>
                        <Grid lg={12}>
                            <div className="compare-slider">
                            <OwlCarousel {...options} >
                                <CardCommon imageName={mastercard} title="Mastercard">
                                    <span>Tangerine World</span>
                                    <Button variant="contained" color="primary">Apply Now</Button>
                                </CardCommon>    
                                <CardCommon imageName={visacard} title="Visa Card">
                                    <span>SCENE</span>
                                    <Button variant="contained" color="primary">Apply Now</Button>
                                </CardCommon>
                                <CardCommon imageName={visainfinitecard} title="Visa Infinite Card">
                                    <span>Scotia Momentum</span>
                                    <Button variant="contained" color="primary">Apply Now</Button>
                                </CardCommon>
                                <CardCommon imageName={creditcard} title="Credit Card">
                                    <span>Scotia Momentum</span>
                                    <Button variant="contained" color="primary">Apply Now</Button>
                                </CardCommon>
                                <CardCommon imageName={mastercard} title="Mastercard">
                                    <span>Tangerine World</span>
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
        {/* credit card com slider start */}

        {/* common accordian section start here */}
            <section className="com-accordian-question credit-accordian">
                <Container>
                    <Grid container>
                        <Grid sm={12} md={12} lg={12}>
                            <div className="accordian-inner">
                                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="accordian-main">
                                    <AccordionSummary expandIcon={expanded === 'panel1'?<MinimizeIcon/>:<AddIcon/>}rols="accordian1" id="accordian1" className='accordian-title'>
                                        <Typography><h4>Best Canadian credit card</h4></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className='accordian-discription'>
                                        <Typography>
                                            <p>There is no one “best credit card in Canada,” but rather a lot of credit cards that are best for different people, depending on their spending habits. Someone that doesn’t own a car won’t get as much value out of the TD Cash Back Visa Infinite, which gives 3% back on gas. That’s why it’s important to compare credit cards in Canada to find the one (or few) that fit your spending the best.</p>
                                            <p>Even if two people have the same spending habits, they may both have different best Canadian credit cards because of how they want their rewards. Travel rewards cards are very popular, but some people prefer the simplicity and flexibility of cash back. Therefore, the best rewards card in Canada may not actually be the best credit card for someone, even if they would get a lot of points.</p>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="accordian-main">
                                    <AccordionSummary expandIcon={expanded === 'panel2'?<MinimizeIcon/>:<AddIcon/>} aria-controls="accordian2" id="accordian2" className='accordian-title'>
                                        <Typography><h4>First – the changes to rewards.</h4></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className='accordian-discription'>
                                        <Typography>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                            sit amet blandit leo lobortis eget.</p>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className="accordian-main">
                                    <AccordionSummary expandIcon={expanded === 'panel3'?<MinimizeIcon/>:<AddIcon/>} aria-controls="accordian3" id="accordian3" className='accordian-title'>
                                        <Typography><h4>Second – the removal of the foreign exchange fee.</h4></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className='accordian-discription'>
                                        <Typography>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                            sit amet blandit leo lobortis eget.</p>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className="accordian-main">
                                    <AccordionSummary expandIcon={expanded === 'panel4'?<MinimizeIcon/>:<AddIcon/>} aria-controls="accordian4" id="accordian4" className='accordian-title'>
                                        <Typography><h4>Third – the flexibility of Scotia points.</h4></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className='accordian-discription'>
                                        <Typography>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                            sit amet blandit leo lobortis eget.</p>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className="accordian-main">
                                    <AccordionSummary expandIcon={expanded === 'panel5'?<MinimizeIcon/>:<AddIcon/>} aria-controls="accordian5" id="accordian5" className='accordian-title'>
                                        <Typography><h4>The biggest changes.</h4></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className='accordian-discription'>
                                        <Typography>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                            sit amet blandit leo lobortis eget.</p>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} className="accordian-main">
                                    <AccordionSummary expandIcon={expanded === 'panel6'?<MinimizeIcon/>:<AddIcon/>} aria-controls="accordian6" id="accordian6" className='accordian-title'>
                                        <Typography><h4>Other changes.</h4></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className='accordian-discription'>
                                        <Typography>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                            sit amet blandit leo lobortis eget.</p>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} className="accordian-main">
                                    <AccordionSummary expandIcon={expanded === 'panel7'?<MinimizeIcon/>:<AddIcon/>} aria-controls="accordian7" id="accordian7" className='accordian-title'>
                                        <Typography><h4>Capital One Aspire Travel Platinum Mastercard.</h4></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className='accordian-discription'>
                                        <Typography>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                            sit amet blandit leo lobortis eget.</p>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} className="accordian-main">
                                    <AccordionSummary expandIcon={expanded === 'panel8'?<MinimizeIcon/>:<AddIcon/>} aria-controls="accordian8" id="accordian8" className='accordian-title'>
                                        <Typography><h4>Roger’s World Elite Mastercard.</h4></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                            sit amet blandit leo lobortis eget.</p>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')} className="accordian-main">
                                    <AccordionSummary expandIcon={expanded === 'panel9'?<MinimizeIcon/>:<AddIcon/>} aria-controls="accordian9" id="accordian9" className='accordian-title'>
                                        <Typography><h4>American Express Essential.</h4></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className='accordian-discription'>
                                        <Typography>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                            sit amet blandit leo lobortis eget.</p>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')} className="accordian-main">
                                    <AccordionSummary expandIcon={expanded === 'panel10'?<MinimizeIcon/>:<AddIcon/>} aria-controls="accordian10" id="accordian10" className='accordian-title'>
                                        <Typography><h4>Refresh Financial Secured Visa.</h4></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className='accordian-discription'>
                                        <Typography>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                            sit amet blandit leo lobortis eget.</p>
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

export default CreditCards