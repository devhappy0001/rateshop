import { Container, Grid } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './footer.scss'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import shape1 from "../../../../assets/public/images/shape3.png";
import shape2 from "../../../../assets/public/images/shape4.png";
const Footer = () => {

    return (

        <footer>
            <Container>
                <div className='footer-shapes'>
                    <img src={shape1} alt="" className='shape-1'/>
                    <img src={shape2} alt="" className='shape-2'/>
                </div>
                <Grid container>
                    <Grid item sm={6} md={5} lg={5}>
                        <div className='links-title'>
                            <h4>Quick Links</h4>
                        </div>
                        <ul className='footer-links'>
                            <li>
                                <NavLink to="">Get Pre-qualified in 60 Sec </NavLink>
                            </li>
                            <li>
                                <NavLink to=""> Commercial Mortgages</NavLink>
                            </li>
                            <li>
                                <NavLink to="">Get a Home Equity Loan </NavLink>
                            </li>
                            <li>
                                <NavLink to="">Get a Home Equity Line of Credit (HELOC) </NavLink>
                            </li>
                            <li>
                                <NavLink to=""> Low or Bad Credit Mortgage Approvals</NavLink>
                            </li>
                            <li>
                                <NavLink to="">Get a Mortgage After Consumer Proposal </NavLink>
                            </li>
                            <li>
                                <NavLink to="">Mortgages For Self Employed </NavLink>
                            </li>
                            <li>
                                <NavLink to=""> Residential Construction Mortgages</NavLink>
                            </li>
                            <li>
                                <NavLink to="">Private Mortgages Toronto </NavLink>
                            </li>
                            <li>
                                <NavLink to="">Widgets</NavLink>
                            </li>
                            <li>
                                <NavLink to="">Home Value</NavLink>
                            </li>
                            <li>
                                <NavLink to="/agent-directory">Agents</NavLink>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item sm={6} md={4} lg={4}>
                        <div className='links-title'>
                            <h4>Contact Information</h4>
                        </div> 
                        <ul className='footer-links contact-information'>
                            <li>
                                <NavLink to="">#1200 Derry Road East, Unit 23
                                    Mississauga, ON L5T 0B3, Canada </NavLink>
                            </li>
                            <li>
                                <NavLink to="">  416-827-2626</NavLink>
                            </li>
                            <li>
                                <NavLink to=""> 800-264-5855</NavLink>
                            </li>
                            <li>
                                <NavLink to="">info@rateshop.ca </NavLink>
                            </li>
                            <li>
                                <NavLink to="">Login </NavLink>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item sm={6} md={3} lg={3}>
                        <div className='social-icons'>
                            <ul className='d-flex align-items-center'>
                                <li>
                                    <NavLink to="">
                                        <FacebookIcon />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="">
                                        <TwitterIcon />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="">
                                        <InstagramIcon />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="">
                                        <LinkedInIcon />
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item sm={12} md={12} lg={12}>
                        <div className='copright'>
                            <p>Copyright 2018. All Rights Reserved. RateShop.ca</p>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}

export default Footer