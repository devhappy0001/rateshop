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
                    <Grid container>
                        <Grid item  xs={12} sm={12} md={12} lg={12} spacing={2}>
                            <h1>Here are your best credit cards</h1>
                            <div className="card-types">
                                <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue=""
                                        name="radio-buttons-group"
                                    >  
                                    <ul>
                                        <li><FormControlLabel value="Travel" className="blue-checkRadio cicle-icon" control={<Radio />} label="Travel" /></li>
                                        <li><FormControlLabel value="Cash back" className="blue-checkRadio cicle-icon" control={<Radio />} label="Cash back" /></li>
                                        <li><FormControlLabel value="Low" className="blue-checkRadio cicle-icon" control={<Radio />} label="Low interest" /></li>
                                        <li><FormControlLabel value="Secured" className="blue-checkRadio cicle-icon" control={<Radio />} label="Secured" /></li>
                                    </ul>
                                </RadioGroup>
                            </div>
                            <div className="edit-my-answers"> 
                                <Button variant="contained" color="secondary">edit my answers</Button>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            {/* cards listings */}
            <section className="card-listings">
                <Container>
                    <Grid container>
                        <Grid item  xs={12} sm={12} md={12} lg={12} spacing={2}>
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
                                                        <li><StarSvg/></li>
                                                        <li><StarSvg/></li>
                                                        <li><StarSvg/></li>
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
                                            <Button variant=" " color="secondary">read less</Button>
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
                                            <Button variant=" " color="secondary">read less</Button>
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
                                            <Button variant=" " color="secondary">read less</Button>
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
                        </Grid>
                    </Grid>
                </Container>
            </section>
        {/* Result sec start here */}
 
    </>)
}

export default Result