import React from 'react';
import { 
    Container,
    Grid,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import {
    homevalue,
    cmhcinsurance,
    landtransfer,
    affordabilitycalc,
    paymentcalc,
} from "../../../core/Images";
const Calculator = () => {

    return (
        <section className="calculator">
            <Container>
                <Grid container className="align-items-center">
                    <Grid sm={12} md={12} lg={12} item>
                        <div className="heading">
                            <h3>Calculators</h3>
                        </div>
                        <ul className="cal-inner">
                            <li data-aos="zoom-in-down" data-aos-delay="300" data-aos-duration="1000">
                                <NavLink to="/">
                                    <img src={paymentcalc} alt="Mortgage Payment Calculator" />
                                    <span>Mortgage Payment Calculator</span>
                                </NavLink>
                            </li>
                            <li data-aos="zoom-in-down" data-aos-delay="500" data-aos-duration="1000">
                                <NavLink to="/">
                                    <img src={affordabilitycalc} alt="Mortgage Payment Calculator" />
                                    <span>Affordability Calculator</span>
                                </NavLink>
                            </li>
                            <li data-aos="zoom-in-down" data-aos-delay="700" data-aos-duration="1000">
                                <NavLink to="/">
                                    <img src={landtransfer} alt="Mortgage Payment Calculator" />
                                    <span>Land Transfer Tax Calculator</span>
                                </NavLink>
                            </li>
                            <li data-aos="zoom-in-down" data-aos-delay="900" data-aos-duration="1000">
                                <NavLink to="/">
                                    <img src={cmhcinsurance} alt="Mortgage Payment Calculator" />
                                    <span>CMHC Insurance Calculator</span>
                                </NavLink>
                            </li>
                            <li data-aos="zoom-in-down" data-aos-delay="1100" data-aos-duration="1000">
                                <NavLink to="/">
                                    <img src={homevalue} alt="Mortgage Payment Calculator" />
                                    <span>Home Value Calculator</span>
                                </NavLink>
                            </li>
                        </ul>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

export default Calculator;