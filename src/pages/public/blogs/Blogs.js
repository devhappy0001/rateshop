import React, { useEffect } from "react";
import { Button, Container, Grid} from "@material-ui/core";
import AOS from 'aos';
import "aos/dist/aos.css";
import {
    blogimg1,
    blogimg2,
    blogimg3,
    blogimg4,
    latestblog1,
    latestblog2,
    latestblog3,
    latestblog4,
    latestblog5,
    latestblog6,
}
from "../../../core/Images";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import Testimonials from '../../../components/shared/testimonial/Testimonials';
// import Blog from '../../../components/shared/blog/Blog';
import PartnerLogo from '../../../components/shared/partner-logo/PartnerLogo';
import Partner from '../../../components/shared/partner/Partner';
// import CardCommon from "../../../components/shared/card-common/CardCommon";
// import Accordion from '@material-ui/core/Accordion';
// import AddIcon from '@material-ui/icons/Add';
// import MinimizeIcon from '@material-ui/icons/Minimize';
// import SelectUI from "../../../components/ui/select/SelectUI";
// import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { NavLink } from "react-router-dom";
import './Blogs.scss'
const Blogs = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (<>
    {/* blog banner section start here */}
        <section className="common-image-bg blog-banner">
            <Container>
                <Grid container>
                    <Grid xs={12} sm={12} md={12} lg={12} item  className="cs-p0">
                        <div className="banner-content"> 
                            <div className="heading">
                                <h1>OUR <span className="com-back-head">BLOGS</span></h1>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    {/* blog banner section end here */}
    {/* blog top section start here */}
        <section className="top-blog">
            <Container>
                <Grid container className="top-blog-container">
                    <Grid xs={12} sm={6} md={4} lg={3} item  className="cs-p0 blog-col">
                        <div className="blog-inner">
                            <NavLink to="">
                                <figure>
                                    <img src={blogimg1} alt="blog"/>
                                </figure>
                                <p>RateShop is excited to announce the launch of its partnership with Marble Financial Inc.</p>
                            </NavLink>
                        </div>
                    </Grid>
                    <Grid xs={12} sm={6} md={4} lg={3} item  className="cs-p0 blog-col">
                        <div className="blog-inner">
                            <NavLink to="">
                                <figure>
                                    <img src={blogimg2} alt="blog"/>
                                </figure>
                                <p>Amazing News! RateShop Has Won Toronto Readers' Choice Award 2021!</p>
                            </NavLink>
                        </div>
                    </Grid>
                    <Grid xs={12} sm={6} md={4} lg={3} item  className="cs-p0 blog-col">
                        <div className="blog-inner">
                            <NavLink to="">
                                <figure>
                                    <img src={blogimg3} alt="blog"/>
                                </figure>
                                <p>Exciting News! RateShop Has Been Awarded CMP Top Mortgage Brokerage 2021</p>
                            </NavLink>
                        </div>
                    </Grid>
                    <Grid xs={12} sm={6} md={4} lg={3} item  className="cs-p0 blog-col">
                        <div className="blog-inner">
                            <NavLink to="">
                                <figure>
                                    <img src={blogimg4} alt="blog"/>
                                </figure>
                                <p>Best No-Fee Cashback Credit Cards for 2019</p>
                            </NavLink>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    {/* blog top section ends here */}
    {/* latest blog section start here */}
        <section className="latest-blog">
            <Container>
                <Grid container>
                    <Grid sm={12} md={9} lg={9} item  className="cs-p0">
                        <div className="latest-blog-left">
                            <div className="heading">
                                <h3><span>Latest</span> Blogs</h3>
                            </div>
                            <Grid container>
                                <Grid sm={6} md={6} lg={6} item  className="cs-p0 latest-blog-col">
                                    <div className="blog-content-box blog-left">
                                        <figure>
                                            <img src={latestblog1} alt="blog"/>
                                        </figure>
                                        <div className="blog-text-inner">
                                            <h3> <NavLink to="">Bank of Canada Keeps Interest Rate at 1.25%</NavLink></h3>
                                            <p>The Bank of Canada made an announcement this morning, April 18th, 2018, that prime rate will stay at 1.25 per cent. This is the second time in a row that the Bank of Canada has not increased interest....</p>
                                            <Button variant="contained" color="primary">Read Article</Button>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid sm={6} md={6} lg={6} item  className="cs-p0 latest-blog-col">
                                    <div className="blog-content-box blog-right">
                                        <figure>
                                            <img src={latestblog2} alt="blog"/>
                                        </figure>
                                        <div className="blog-text-inner">
                                            <h3><NavLink to="">25% Increase in Home Sales Across Toronto and Vancouver</NavLink></h3>
                                            <p>There has been a substantial surge in sales of 25% (Toronto) and 29% (Vancouver) during October-November when compared to last season. There has been a noticeable increase in demand leading to soarin...</p>
                                            <Button variant="contained" color="primary">Read Article</Button>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid sm={6} md={6} lg={6} item  className="cs-p0 latest-blog-col">
                                    <div className="blog-content-box blog-left">
                                        <figure>
                                            <img src={latestblog3} alt="blog"/>
                                        </figure>
                                        <div className="blog-text-inner">
                                            <h3><NavLink to="">Competitive Mortgage Rates in Canada Hit New Lows – Can They Drop Lower?</NavLink></h3>
                                            <p>Is it time for homebuyers to take advantage of Canada’s mortgage rates? With the rates dropping significantly, it’s become an interesting option for those wanting to lock in a good deal. The answ...</p>
                                            <Button variant="contained" color="primary">Read Article</Button>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid sm={6} md={6} lg={6} item  className="cs-p0 latest-blog-col">
                                    <div className="blog-content-box blog-right">
                                        <figure>
                                            <img src={latestblog4} alt="blog"/>
                                        </figure>
                                        <div className="blog-text-inner">
                                            <h3><NavLink to="">What to Keep in Mind When Comparing GIC Interest Rates in Canada</NavLink></h3>
                                            <p>Have you ever felt your money could be working harder for you, if only you weren’t afraid of the risk?  To boost your return while still keeping your principals safe, consider a Guaranteed Investme...</p>
                                            <Button variant="contained" color="primary">Read Article</Button>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid sm={6} md={6} lg={6} item  className="cs-p0 latest-blog-col">
                                    <div className="blog-content-box blog-left">
                                        <figure>
                                            <img src={latestblog5} alt="blog"/>
                                        </figure>
                                        <div className="blog-text-inner">
                                            <h3><NavLink to="">Crucial FAQs to Consider with the Mortgage Pre-approval Process</NavLink></h3>
                                            <p>If you've come up with a decision to buy a home, the first step you should take isn't necessarily relating to the listing of a new home.  Before that process, you need to know roughly how much money ...</p>
                                            <Button variant="contained" color="primary">Read Article</Button>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid sm={6} md={6} lg={6} item  className="cs-p0 latest-blog-col">
                                    <div className="blog-content-box blog-right">
                                        <figure>
                                            <img src={latestblog6} alt="blog"/>
                                        </figure>
                                        <div className="blog-text-inner">
                                            <h3><NavLink to="">Ultimate Guide to the Best Investment Options in Canada</NavLink></h3>
                                            <p>All of us understand the importance of hard work and smart work.  But often, the secret to financial success is more than what you are investing in.  The smarter you are about your investments, the...</p>
                                            <Button variant="contained" color="primary">Read Article</Button>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                            <div className="view-all-blogs">
                                <Button variant="contained" color="primary">View All Blog</Button>
                            </div>
                        </div>
                    </Grid>
                    <Grid sm={12} md={3} lg={3} item  className="cs-p0">
                        <div className="latest-blog-right">
                            <div className="right-blog-box">
                                <h4>Blog by topic</h4>
                                <ul>
                                    <li>
                                        <NavLink to="">Mortgage</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="">Credit Score</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="">Insurance</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="">Investing</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="">Banking</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="">Credit Cards</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="right-blog-box">
                                <h4>Most Popular Posts</h4>
                                <ul>
                                    <li>
                                        <NavLink to="">Canadian Financial Institution Numbers for All Banks</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="">How Much House Can I Afford on $75k? </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="">How Much Are CIBC Aventura Points Worth? </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="">Self-Employed Canadians Will Have an Easier Time with CMHC in 2018</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Grid>
                    
                </Grid>
            </Container>
        </section>
    {/* latest blog section ends here */}
    {/* Partner Logo Start*/}
        <PartnerLogo/>
    {/* Partner Logo End*/}

    {/* partner logo Start*/}
        <Partner/>
    {/* partner logo End*/}
    </>)
}

export default Blogs