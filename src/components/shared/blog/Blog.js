import React from 'react'
import { Button, Container, Grid } from "@material-ui/core";
import {
    
    blog1,
    blog2,
    blog3,
    blogShape
    
} from '../../../core/Images'
import './blog.scss'

const Blog = () => {

    return (

        <>
            <section className="blogs">
                <Container>
                    <div className="shape">
                        <img src={blogShape} alt=""/>
                    </div>
                    <Grid container className="blog-container">
                        <Grid sm={12} md={12} lg={12} item>
                            <div className="heading">
                                <h3>
                                    <span>Our</span> Blog
                                </h3>
                            </div>
                        </Grid>
                        <Grid item sm={6} md={6} lg={4} className="right-blogs" data-aos="zoom-out-right" data-aos-delay="100" data-aos-duration="1000">
                            <div className="blog-outer">
                                <div className="img-wrap">
                                    <figure>
                                        <img src={blog1} alt="Image" />
                                    </figure>
                                </div>
                                <div className="blog-text">
                                    <p>
                                        <a  href="http://localhost:3000/">Exciting News! RateShop Has Been Awarded CMP Top Mortgage...</a>
                                    </p>
                                    {/* <p className="posted-date">Posted at: 2021-09-27</p> */}
                                </div>
                            </div>
                        </Grid>
                        <Grid item sm={6} md={6} lg={4} className="right-blogs" data-aos="zoom-out-right" data-aos-delay="200" data-aos-duration="1000">
                            <div className="blog-outer">
                                <div className="img-wrap">
                                    <figure>
                                        <img src={blog2} alt="Image" />
                                    </figure>
                                </div>
                                <div className="blog-text">
                                    <p>
                                        <a href="http://localhost:3000/">Exciting News! RateShop Has Been Awarded CMP Top Mortgage...</a>
                                    </p>
                                    {/* <p className="posted-date">Posted at: 2021-09-27</p> */}
                                </div>
                            </div>
                        </Grid>
                        <Grid item sm={6} md={6} lg={4} className="right-blogs" data-aos="zoom-out-right" data-aos-delay="300" data-aos-duration="1000">
                        <div className="blog-outer">
                                <div className="img-wrap">
                                    <figure>
                                        <img src={blog3} alt="Image" />
                                    </figure>
                                </div>
                                <div className="blog-text">
                                    <p>
                                        <a href="http://localhost:3000/">Exciting News! RateShop Has Been Awarded CMP Top Mortgage...</a>
                                    </p>
                                    {/* <p className="posted-date">Posted at: 2021-09-27</p> */}
                                </div>
                            </div>
                        </Grid>
                        <Grid item sm={12} md={12} lg={12} className="right-blogs">
                            <div className="blog-btn d-flex justify-content-center">
                                <Button variant="contained">
                                    View All Blog
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            {/* <section className="blogs">
                <Container>
                    <div className="shape">
                        <img src={blogShape} alt=""/>
                    </div>
                    <Grid container>
                        <Grid sm={6} md={6} lg={6} item>
                            <div className="heading">
                                <h3>
                                    <span>Our</span> Blog
                                </h3>
                            </div>

                            <div className="blog-outer">
                                <div className="img-wrap">
                                    <figure>
                                        <img src={blog1} alt="" />
                                    </figure>
                                </div>
                                <div className="blog-text">
                                    <p>
                                        <a  href="http://localhost:3000/">Exciting News! RateShop Has Been Awarded CMP Top Mortgage...</a>
                                    </p>
                                </div>
                            </div>

                            <div className="blog-btn d-flex justify-content-center">
                                <Button variant="contained" color="secondary">
                                    View All Blog
                                </Button>
                            </div>
                        </Grid>
                        <Grid item sm={6} md={6} lg={6} className="right-blogs">
                            <div className="blog-outer">
                                <div className="img-wrap">
                                    <figure>
                                        <img src={blog2} alt="" />
                                    </figure>
                                </div>
                                <div className="blog-text">
                                    <p>
                                        <a href="http://localhost:3000/">Exciting News! RateShop Has Been Awarded CMP Top Mortgage...</a>
                                    </p>
                                </div>
                            </div>
                            <div className="blog-outer">
                                <div className="img-wrap">
                                    <figure>
                                        <img src={blog3} alt="" />
                                    </figure>
                                </div>
                                <div className="blog-text">
                                    <p>
                                        <a href="http://localhost:3000/">Exciting News! RateShop Has Been Awarded CMP Top Mortgage...</a>
                                    </p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </section> */}
        </>
    );
}

export default Blog