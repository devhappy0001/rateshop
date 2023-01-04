import React, { useState, useEffect } from "react";
import { Button, Container, Grid,  TextField, } from "@material-ui/core";
import './agentsDirectory.scss';
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
import Partner from "../../../components/shared/partner/Partner";

const AgentsDirectory = () => {

 
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    
    return (
        <>
            <section className='agent-directory-banner'>
                <Container>
                    <Grid container>
                        <Grid lg={12} xs={12} item className="cs-p0">
                            <div className='banner-content'>
                                <div className="heading text-center">
                                    <h1>Agents <span className="com-back-head">Directory</span></h1>
                                </div>
                                <div className="agents-directory-search"> 
                                    <RadioGroup
                                        defaultValue=""
                                        name="radio-buttons-group"
                                    > 
                                        <FormControlLabel value="yes" control={<Radio />} label="Expert" /> 
                                        <FormControlLabel value="no" control={<Radio />} label="Office" /> 
                                    </RadioGroup>
                                    <TextField id="standard-basic" placeholder="Postal code, city, province or agent " />
                                    <Button variant="contained" className="search-btn">
                                        Search
                                    </Button>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            {/* Directory listing */}
            <section className='agent-directory-listing'>
                <Container>
                    <h2 className="result-found-title">Found 1-10 of 142 Results</h2>
                    <Grid container> 
                        <div className="directory-listing-wrap">
                        {agentListing.map((item) =>
                            <div className="directory-listing-inner"  key={item.id }>
                                <div className="agent-img">
                                    <figure>
                                        <img src={item.image}></img>
                                    </figure>
                                </div>
                                <div className="agent-details">
                                    <div className="agent-name">
                                        <h3>{item.name }</h3>
                                        <h4 className="agent-position">{item.designation}</h4>
                                    </div>
                                    <div className="agent-details-links">
                                        <ul>
                                            <li>
                                                <a href={'tel:' + item.phone1}>
                                                    <span><CallIcon/></span> {item.phone1}
                                                </a>
                                            </li>
                                            <li>
                                                <a href={'tel:' + item.phone2}>
                                                    <span><PhoneAndroidIcon/></span> {item.phone2}
                                                </a>
                                            </li>
                                            <li>
                                                <a href={'mailto:' + item.email}>
                                                    <span><MailIcon/></span>Send Me a Message
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="social-icons-details-btn">
                                        <ul className="social-icons">
                                            <li>
                                                <a href={item.twitter}><TwitterIcon/></a>
                                            </li>
                                            <li>
                                                <a href={item.facebook}><FacebookIcon/></a>
                                            </li>
                                            <li>
                                                <a href={item.instagram}><InstagramIcon/></a>
                                            </li>
                                        </ul>
                                        <div className="detail-btn">
                                            <Button variant="contained">Detail</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )}
                        </div>
                    </Grid>
                    <div className="cs-apgination">
                        <Pagination count={10} />
                    </div>
                </Container>
            </section> 
                 {/* partner logo Start*/}
        <Partner/>
      {/* partner logo End*/}
        </>
    )
}

export default AgentsDirectory