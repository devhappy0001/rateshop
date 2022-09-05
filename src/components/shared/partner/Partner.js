import React from 'react';
import { Container, Grid } from "@material-ui/core";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {
    company1,
    company2,
    company3,
    company4,
    company5,
    company6,
} from "../../../core/Images";

const Partner = () => {

    var options=  {
        item:6,
        className:"owl-theme",
        margin:20,
        responsiveClass: true,
        autoplay:true,
        dots:false,
        nav:false,
        responsive: {
          0: {
              items: 2,
          },
          480: {
              items: 3,
          },
          960: {
            items: 4,
          },
          1025: {
              items: 5,
          },
          1300: {
              items: 6,
          }
        }
      }

    return (

        <section className="partner-logo">
            <Container>
                <div className="partner-logo-wrap">
                    <Grid container className="align-items-center">

                        <Grid item sm={12} md={12} lg={12}>
                            <OwlCarousel
                                {...options}
                            >
                                <img src={company1} alt="partner" />
                                {/* </Grid> */}
                                {/* <Grid item sm={4} md={2} lg={2}> */}
                                <img src={company2} alt="partner" />
                                {/* </Grid> */}
                                {/* <Grid item sm={4} md={2}  lg={2}> */}
                                <img src={company3} alt="partner" />
                                {/* </Grid> */}
                                {/* <Grid item sm={4} md={2} lg={2}> */}
                                <img src={company4} alt="partner" />
                                {/* </Grid> */}
                                {/* <Grid item sm={4} md={2} lg={2}> */}
                                <img src={company5} alt="partner" />
                                {/* </Grid> */}
                                {/* <Grid item sm={4} md={2} lg={2}> */}
                                <img src={company6} alt="partner" />
                            </OwlCarousel>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </section>
    );
}

export default Partner;