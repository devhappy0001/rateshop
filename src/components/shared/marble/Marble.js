import React from 'react';
import { Container, Grid } from "@material-ui/core";
import {
    marble,
    marbleRightImg,
} from "../../../core/Images";

const Marble = () => {

    return (
        <section className="marble-credit-score">
            <Container>
                <div className="heading">
                    <h3>
                        <img src={marble} alt="marble" />
                        Imporved Credit score & Manage Debt
                    </h3>
                </div>
            </Container>
            <div className="marble-inner">
                <Container>
                    <Grid container className="align-items-center">
                        <Grid sm={6} md={5} lg={5} item>
                            <ul className="marble-list">
                                <li data-aos="zoom-in-down" data-aos-delay="100" data-aos-duration="1000">
                                    <h4>Credit monitoring and improvement</h4>
                                    <p>Access your TransUnion credit score for free!</p>
                                </li>
                                <li data-aos="zoom-in-down" data-aos-delay="200" data-aos-duration="1000">
                                    <h4>Convenience of Use</h4>
                                    <p>Complete application within 15 minutes </p>
                                </li>
                                <li data-aos="zoom-in-down" data-aos-delay="300" data-aos-duration="1000">
                                    <h4>Individualized Guidance</h4>
                                    <p>Powered by artificial intelligence </p>
                                </li>
                                <li data-aos="zoom-in-down" data-aos-delay="400" data-aos-duration="1000">
                                    <h4>Expert Suggestions & Analysis</h4>
                                    <p>Guidance every step of the way </p>
                                </li>
                                <li data-aos="zoom-in-down" data-aos-delay="500" data-aos-duration="1000">
                                    <h4>Online Course For Informed Decision Making</h4>
                                    <p>Courses taught by seasoned experts </p>
                                </li>
                            </ul>
                        </Grid>
                        <Grid sm={6} md={7} lg={7} item>
                            <figure data-aos="zoom-out-left" data-aos-delay="300" data-aos-duration="1000">
                                <img src={marbleRightImg} alt="img" />
                            </figure>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </section>
    );
}

export default Marble;