import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Container, Grid , Button} from "@material-ui/core/";
import './testimonials.scss';
import StarIcon from '@material-ui/icons/Star';
import { NavLink } from "react-router-dom";
import { Quoteicon } from '../../../core/Images'
import {
    GoogleSvg,
    FacebookSvg
  } from "../../../core/ImgsesSvg";
import classNames  from 'classnames';
const Testimonials = (props) => {

    const {title,description,className} = props;

    var options=  {
        item:2,
        className:"owl-theme",
        margin:20,
        responsiveClass: true,
        autoplay:true,
        dots:false,
        nav:true,
        responsive: {
          0: {
              items: 1,
          },
          768: {
              items: 2,
          },
          960: {
            items: 1,
          },
          992: {
              items: 2,
          }
        }
      }

    return (
        <>
            <section className={classNames('testimonial', className)}>
                <Container>
                    {
                        title && description && 
                        <div className="testimonail-title">
                            <div className="heading">
                                <h3>{title}</h3>
                            </div>
                            <p>{description}</p>
                        </div>

                    }
                    <div className="testimonial-outer">
                        <div className="quote-icon">
                            <img src={Quoteicon} alt="quote"/>
                        </div>
                        <Grid container className="align-items-center">
                            <Grid sm={12} md={4} item lg={4} >
                                <div className="heading">
                                    <h3><span>Test</span>imonials</h3>
                                </div>
                            </Grid>
                            <Grid sm={12} md={8} item lg={8} >
                                <OwlCarousel
                                    // items={2}
                                    // className="owl-theme"
                                    // loop
                                    // nav
                                    // margin={40}
                                    // autoplay={true}
                                    // dots={false}
                                    {...options}
                                >
                                    <div className="testimonial-wrap">
                                        <div className="quote-icon">
                                            <GoogleSvg/>
                                        </div>
                                        <div className="rating">
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />  
                                        </div>
                                        <div className="testimonia-text">
                                            <p>Ali, Sundeep, Marina, Sam- the
                                                whole team is awesome to work
                                                with. As a realtor I rely on their
                                                experience for getting...</p>
                                            <NavLink to="">Read more...</NavLink>
                                            <div className="info-details">
                                                <div className="info-img">
                                                    <img src="https://www.rateshop.ca/upload/testimonial/avatar-male-silhouette-hi.png" alt="customer-profile"/>
                                                </div>
                                                <div className="info-content">
                                                    <h4>DChase Belair</h4>
                                                    <p>Principle Broker</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-wrap">
                                        <div className="quote-icon">
                                              <FacebookSvg/>
                                        </div>
                                        <div className="rating">
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />  
                                        </div>
                                        <div className="testimonia-text">
                                            <p>Ali, Sundeep, Marina, Sam- the
                                                whole team is awesome to work
                                                with. As a realtor I rely on their
                                                experience for getting...</p>
                                            <NavLink to="">Read more...</NavLink>
                                            <div className="info-details">
                                                <div className="info-img">
                                                    <img src="https://www.rateshop.ca/upload/testimonial/avatar-male-silhouette-hi.png" alt="customer-profile"/>
                                                </div>
                                                <div className="info-content">
                                                    <h4>DChase Belair</h4>
                                                    <p>Principle Broker</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-wrap">
                                        <div className="quote-icon">
                                              <GoogleSvg/>
                                        </div>
                                        <div className="rating">
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />  
                                        </div>
                                        <div className="testimonia-text">
                                            <p>Ali, Sundeep, Marina, Sam- the
                                                whole team is awesome to work
                                                with. As a realtor I rely on their
                                                experience for getting...</p>
                                            <NavLink to="">Read more...</NavLink>
                                            <div className="info-details">
                                                <div className="info-img">
                                                    <img src="https://www.rateshop.ca/upload/testimonial/avatar-male-silhouette-hi.png" alt="customer-profile"/>
                                                </div>
                                                <div className="info-content">
                                                    <h4>DChase Belair</h4>
                                                    <p>Principle Broker</p>     
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </Grid>
                        </Grid>
                    </div>
                    <div className="test-get-started">
                        <Button variant="contained">Get Started Now</Button>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Testimonials;
