import React, { useEffect } from "react"; 
import AOS from 'aos';
import "aos/dist/aos.css"; 
import { Button, Container, Grid,Radio,RadioGroup,FormControlLabel} from "@material-ui/core";   
import './Result.scss';
import {
    StarSvg,TickSvg
}
from "../../../core/ImgsesSvg";
import {
    koho,home,bmo
}
from "../../../core/Images";
const Result = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (<>
        {/* Result sec start here */}
            <section className="best-results">
                <Container className="mt-200">
                    <Grid container spacing={2}>
                        <Grid item  xs={12} sm={12} md={12} lg={12} >
                            <h1>Here are your best credit cards</h1>

                            <h3 className="text-center cs-heading">Select credit score</h3>
                            <div className="card-types">
                                <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue=""
                                        name="radio-buttons-group-1"
                                    >  
                                    <ul>
                                        <li><FormControlLabel value="excellent" className="blue-checkRadio cicle-icon" control={<Radio />} label="Excellent" /></li>
                                        <li><FormControlLabel value="good" className="blue-checkRadio cicle-icon" control={<Radio />} label="Good" /></li>
                                        <li><FormControlLabel value="fair" className="blue-checkRadio cicle-icon" control={<Radio />} label="Fair" /></li>
                                        <li><FormControlLabel value="poor" className="blue-checkRadio cicle-icon" control={<Radio />} label="Poor" /></li>
                                    </ul>
                                </RadioGroup>
                            </div>
                            <h3 className="text-center cs-heading">Select Card Type</h3>
                            <div className="card-types">
                                <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue=""
                                        name="radio-buttons-group"
                                    >  
                                    <ul>
                                        <li><FormControlLabel value="reward" className="blue-checkRadio cicle-icon" control={<Radio />} label="Reward Cards" /></li>
                                        <li><FormControlLabel value="low interest" className="blue-checkRadio cicle-icon" control={<Radio />} label="Low Interest Cards" /></li>
                                        <li><FormControlLabel value="balance transfer" className="blue-checkRadio cicle-icon" control={<Radio />} label="Balance Transfer Cards" /></li>
                                        <li><FormControlLabel value="Buisness card" className="blue-checkRadio cicle-icon" control={<Radio />} label="Business Cards" /></li>
                                        <li><FormControlLabel value="credit-builder" className="blue-checkRadio cicle-icon" control={<Radio />} label="Credit Builder Cards" /></li>
                                        <li><FormControlLabel value="us-dollar" className="blue-checkRadio cicle-icon" control={<Radio />} label="US Dollar Cards" /></li> 
                                    </ul>
                                </RadioGroup>
                            </div>
                            {/* <div className="edit-my-answers"> 
                                <Button variant="contained" color="secondary">edit my answers</Button>
                            </div> */}
                        </Grid>
                    </Grid>
                </Container>
            </section>
            {/* cards listings */}
            <section className="card-listings">
                <Container>
                    <Grid container spacing={0}>
                        <Grid item  className="cs-p0"   xs={12} sm={12} md={12} lg={12} >
                             <div className="cards-wrapper">
                                <div className="card-inner d-flex flex-wrap">
                                    <div className="card-left-img">
                                        <figure>
                                            <img src={bmo}/>
                                        </figure>
                                    </div>
                                    <div className="right-card-details">
                                        {/*  */}
                                        <div className="right-top-details">
                                            <div className="title-rating">
                                                <h3>BMO AIR MILES® MasterCard®</h3>
                                                <div className="card-rating">
                                                    <ul>
                                                        <li className="active"><StarSvg/></li>
                                                        <li className="active"><StarSvg/></li>
                                                        <li className="active"><StarSvg/></li>
                                                        <li><StarSvg/></li>
                                                        <li><StarSvg/></li>
                                                    </ul>
                                                    <p>1 review</p>
                                                </div>
                                                <div className="card-badge">
                                                    <p>Travel</p>
                                                </div>
                                            </div>
                                            <div className="earning-approval">
                                                <div className="earning-approval-inner">
                                                    <div className="featues">
                                                        <p>featured</p>
                                                    </div>
                                                    <div className="card-earn">
                                                        <p>Earn <span>$25</span>/yr</p>
                                                    </div>
                                                    <div className="card-short-info">
                                                        <p>based on spending $500/mo after $0 annual fee</p>
                                                    </div>
                                                    <div className="card-approval"> 
                                                        <p><TickSvg/> Approval likelihood: GOOD</p>
                                                    </div>
                                                </div>
                                                <Button variant="contained" color="secondary">go to site</Button>
                                            </div>
                                        </div>
                                        {/*  */}
                                        <div className="redemption-flexibility">
                                            <h3>Redemption flexibility</h3>
                                            <div className="redemption-status">
                                                <ul>
                                                    <li className="active">
                                                        <span></span>
                                                    </li>
                                                    <li>
                                                        <span></span>
                                                        </li>
                                                    <li>
                                                        <span></span>
                                                    </li>
                                                </ul>
                                                <p>LOW</p>
                                            </div>
                                            <p>Redeem through your Air miles account, limited to certain airlines and dates</p>
                                        </div>
                                        {/* Earn Rewards */}
                                        <div className="earn-rewards">
                                            <h3>Earn rewards</h3>
                                            <ul>
                                                <li>
                                                    <h5>0.04 points/$1</h5>
                                                    <p>On everywhere</p>
                                                </li>
                                                <li>
                                                    <h5>0.12 points/$1</h5>
                                                    <p>On other purchases, Air Miles Partners</p>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* Card details */}
                                        <div className="inner-card-details">
                                            <h3>Card details</h3>
                                            <ul>
                                                <li>Limited time offer: Get 1,500 AIR MILES Bonus Miles!* That’s enough for $150  towards purchases with AIR MILES Cash*</li>
                                                <li>Get a 1.99% introductory interest rate on Balance Transfers for 9 months*, 1% fee applies to balance amounts transferred*.</li> 
                                                <li>Get 3x the Miles for every $25 spent at participating AIR MILES Partners*</li> 
                                                <li>Get 1x the Miles for every $25 spent everywhere else*</li> 
                                                <li>Cash Advance Interest 22.99% (21.99% for Quebec residents)</li> 
                                                <li>The offer may vary in Quebec.</li>
                                            </ul>
                                        </div>
                                        {/* See more button */}
                                        <div className="see-more-btn">
                                            <Button variant="contained" color="primary">see more</Button>
                                        </div>
                                        {/* Go to site button */}
                                        <div className="go-site-btn">
                                            <Button variant="contained" color="secondary">go to site</Button>
                                        </div>
                                        {/* Read less button */}
                                        <div className="read-less-btn">
                                            <Button   color="secondary"><span></span>read less</Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-bottom-details">
                                    <ul className="d-flex flex-wrap">
                                        <li>
                                            <p>Welcome bonus</p>
                                            <h5>1,500 pts</h5>
                                            <p>$158 value</p>
                                        </li>
                                        <li>
                                            <p>Annual fee</p>
                                            <h5>$0</h5> 
                                        </li>
                                        <li>
                                            <p>Purchase interest: 19.99%</p>
                                            <p>Cash advance: 22.99%</p>
                                            <p>Balance transfer: 22.99%</p> 
                                        </li>
                                        <li>
                                            <p>Credit recommended: 660+</p>
                                            <p>Min. income: $15,000/yr</p> 
                                        </li>
                                    </ul>
                                </div>  
                             </div>
                             <div className="cards-wrapper">
                                <div className="card-inner d-flex flex-wrap">
                                    <div className="card-left-img">
                                        <figure>
                                            <img src={home}/>
                                        </figure>
                                    </div>
                                    <div className="right-card-details">
                                        {/*  */}
                                        <div className="right-top-details">
                                            <div className="title-rating">
                                                <h3>Home Trust Preferred Visa</h3>
                                                <div className="card-rating">
                                                    <ul>
                                                        <li><StarSvg/></li>
                                                        <li><StarSvg/></li>
                                                        <li><StarSvg/></li>
                                                        <li><StarSvg/></li>
                                                        <li><StarSvg/></li>
                                                    </ul>
                                                    <p>No reviews yet</p>
                                                </div>
                                                <div className="card-badge">
                                                    <p>Travel</p>
                                                </div>
                                            </div>
                                            <div className="earning-approval">
                                                <div className="earning-approval-inner">
                                                    <div className="featues">
                                                        <p>featured</p>
                                                    </div>
                                                    <div className="card-earn">
                                                        <p>Earn <span>$60</span>/yr</p>
                                                    </div>
                                                    <div className="card-short-info">
                                                        <p>based on spending $500/mo after $0 annual fee</p>
                                                    </div>
                                                    <div className="card-approval"> 
                                                        <p><TickSvg/> Approval likelihood: GOOD</p>
                                                    </div>
                                                </div>
                                                <Button variant="contained" color="secondary">go to site</Button>
                                            </div>
                                        </div>
                                        {/*  */}
                                        <div className="redemption-flexibility">
                                            <h3>Redemption flexibility</h3>
                                            <div className="redemption-status">
                                                <ul>
                                                    <li className="active">
                                                        <span></span>
                                                    </li>
                                                    <li className="active">
                                                        <span></span>
                                                        </li>
                                                    <li className="active">
                                                        <span></span>
                                                    </li>
                                                </ul>
                                                <p>HIGH</p>
                                            </div>
                                            <p>Redeem points against any purchase charged to your card</p>
                                        </div>
                                        {/* Earn Rewards */}
                                        <div className="earn-rewards">
                                            <h3>Earn rewards</h3>
                                            <ul>
                                                <li>
                                                    <h5>0.04 points/$1</h5>
                                                    <p>On everywhere</p>
                                                </li>
                                                <li>
                                                    <h5>0.12 points/$1</h5>
                                                    <p>On other purchases, Air Miles Partners</p>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* Card details */}
                                        <div className="inner-card-details">
                                            <h3>Card details</h3>
                                            <ul>
                                                <li>Limited time offer: Get 1,500 AIR MILES Bonus Miles!* That’s enough for $150  towards purchases with AIR MILES Cash*</li>
                                                <li>Get a 1.99% introductory interest rate on Balance Transfers for 9 months*, 1% fee applies to balance amounts transferred*.</li> 
                                                <li>Get 3x the Miles for every $25 spent at participating AIR MILES Partners*</li> 
                                                <li>Get 1x the Miles for every $25 spent everywhere else*</li> 
                                                <li>Cash Advance Interest 22.99% (21.99% for Quebec residents)</li> 
                                                <li>The offer may vary in Quebec.</li>
                                            </ul>
                                        </div>
                                        {/* See more button */}
                                        <div className="see-more-btn">
                                            <Button variant="contained" color="primary">see more</Button>
                                        </div>
                                        {/* Go to site button */}
                                        <div className="go-site-btn">
                                            <Button variant="contained" color="secondary">go to site</Button>
                                        </div>
                                        {/* Read less button */}
                                        <div className="read-less-btn">
                                            <Button   color="secondary"><span></span>read less</Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-bottom-details">
                                    <ul className="d-flex flex-wrap">
                                        <li>
                                            <p></p>
                                            <h5></h5>
                                            <p></p>
                                        </li>
                                        <li>
                                            <p>Annual fee</p>
                                            <h5>$0</h5> 
                                        </li>
                                        <li>
                                            <p>Purchase interest: 19.99%</p>
                                            <p>Cash advance: 19.99%</p>
                                            <p>Balance transfer: N/A</p> 
                                        </li>
                                        <li>
                                            <p>Credit recommended: 660+</p>
                                            <p>Min. income: $0</p> 
                                        </li>
                                    </ul>
                                </div>  
                             </div>
                             {/* koho card */}
                             <div className="cards-wrapper">
                                <div className="card-inner d-flex flex-wrap">
                                    <div className="card-left-img">
                                        <figure>
                                            <img src={koho}/>
                                        </figure>
                                    </div>
                                    <div className="right-card-details">
                                        {/*  */}
                                        <div className="right-top-details">
                                            <div className="title-rating">
                                                <h3>BMO AIR MILES® MasterCard®</h3>
                                                <div className="card-rating">
                                                    <ul>
                                                        <li><StarSvg/></li>
                                                        <li><StarSvg/></li>
                                                        <li><StarSvg/></li>
                                                        <li><StarSvg/></li>
                                                        <li><StarSvg/></li>
                                                    </ul>
                                                    <p>No reviews yet</p>
                                                </div>
                                                <div className="card-badge">
                                                    <p>Travel</p>
                                                </div>
                                            </div>
                                            <div className="earning-approval">
                                                <div className="earning-approval-inner">
                                                    <div className="featues">
                                                        <p>featured</p>
                                                    </div>
                                                    <div className="card-earn">
                                                        <p>Earn <span>$58</span>/yr</p>
                                                    </div>
                                                    <div className="card-short-info">
                                                        <p>based on spending $500/mo after $0 annual fee</p>
                                                    </div>
                                                    <div className="card-approval"> 
                                                        <p><TickSvg/> Approval likelihood: GOOD</p>
                                                    </div>
                                                </div>
                                                <Button variant="contained" color="secondary">go to site</Button>
                                            </div>
                                        </div>
                                        {/*  */}
                                        <div className="redemption-flexibility">
                                            <h3>Redemption flexibility</h3>
                                            <div className="redemption-status">
                                                <ul>
                                                    <li className="active">
                                                        <span></span>
                                                    </li>
                                                    <li className="active">
                                                        <span></span>
                                                        </li>
                                                    <li className="active">
                                                        <span></span>
                                                    </li>
                                                </ul>
                                                <p>HIGH</p>
                                            </div>
                                            <p>Redeem points against any purchase charged to your card</p>
                                        </div>
                                        {/* Earn Rewards */}
                                        <div className="earn-rewards">
                                            <h3>Earn rewards</h3>
                                            <ul>
                                                <li>
                                                    <h5>0.04 points/$1</h5>
                                                    <p>On everywhere</p>
                                                </li>
                                                <li>
                                                    <h5>0.12 points/$1</h5>
                                                    <p>On other purchases, Air Miles Partners</p>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* Card details */}
                                        <div className="inner-card-details">
                                            <h3>Card details</h3>
                                            <ul>
                                                <li>Limited time offer: Get 1,500 AIR MILES Bonus Miles!* That’s enough for $150  towards purchases with AIR MILES Cash*</li>
                                                <li>Get a 1.99% introductory interest rate on Balance Transfers for 9 months*, 1% fee applies to balance amounts transferred*.</li> 
                                                <li>Get 3x the Miles for every $25 spent at participating AIR MILES Partners*</li> 
                                                <li>Get 1x the Miles for every $25 spent everywhere else*</li> 
                                                <li>Cash Advance Interest 22.99% (21.99% for Quebec residents)</li> 
                                                <li>The offer may vary in Quebec.</li>
                                            </ul>
                                        </div>
                                        {/* See more button */}
                                        <div className="see-more-btn">
                                            <Button variant="contained" color="primary">see more</Button>
                                        </div>
                                        {/* Go to site button */}
                                        <div className="go-site-btn">
                                            <Button variant="contained" color="secondary">go to site</Button>
                                        </div>
                                        {/* Read less button */}
                                        <div className="read-less-btn">
                                            <Button   color="secondary"><span></span>read less</Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-bottom-details">
                                    <ul className="d-flex flex-wrap">
                                        <li>
                                            <p></p>
                                            <h5></h5>
                                            <p></p>
                                        </li>
                                        <li>
                                            <p>Annual fee</p>
                                            <h5>$84</h5> 
                                        </li>
                                        <li>
                                            <p>Purchase interest: N/A</p>
                                            <p>Cash advance: N/A</p>
                                            <p>Balance transfer: N/A</p> 
                                        </li>
                                        <li>
                                            <p>Credit recommended: 300+</p>
                                            <p>Min. income: $0</p> 
                                        </li>
                                    </ul>
                                </div>  
                             </div> 
                             <div className="show-more-btn">
                                <Button variant="contained" color="secondary">Show More</Button> 
                            </div>
                             <div className="info-text">
                                <p><span>Disclaimer</span>: Financial institutions pay us for connecting them with customers, including by paying for advertisements, clicks, or when someone applies for/is approved for a product. Terms and conditions apply between you and the provider of the product - please be sure to review them. Product information and details vary for Quebec. The content provided on our site is for information only; it is not meant to be relied on or used in lieu of advice from a professional. Partners/Advertisers are not responsible for the accuracy of information on our site. However, not all products we list are tied to compensation for us. Our industry-leading education centres and calculators are available 24/7, free of charge, and with no obligation to purchase. To learn more, visit our <a>About us</a> page.</p>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        {/* Result sec start here */}
 
    </>)
}

export default Result