import React from 'react';
import { Container } from "@material-ui/core";
import {
    csLogo1,
    csLogo2,
    csLogo3,
    csLogo4,
    csLogo5,
    csLogo6,
    csLogo7,
    csLogo8,
    csLogo9,
    csLogo10,
    csLogo12,
    csLogo13,
    csLogo14,
    csLogo15,
    csLogo16,
    csLogo17,
    csLogo18,
    csLogo19,

} from "../../../core/Images";

const PartnerLogo = () => {

    return (
        <section className="cs-partner-logo">
            <Container>
                <div className="partner-logo-wrap">
                    <div className="heading">
                        <h3>As Seen And heard on</h3>
                    </div>
                    <ul className="d-flex align-items-center justify-content-center">
                        <li>
                            <figure>
                                <img src={csLogo1} alt="partner" />
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src={csLogo2} alt="partner" />
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src={csLogo3} alt="partner" />
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src={csLogo4} alt="partner" />
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src={csLogo5} alt="partner" />
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src={csLogo6} alt="partner" />
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src={csLogo7} alt="partner" />
                            </figure>
                        </li>
                    </ul>
                </div>
                <div className="partner-logo-wrap">
                    <div className="heading mt-40">
                        <h3>accreditations and accolades</h3>
                    </div>
                    <ul className="d-flex align-items-center justify-content-center">
                        <li>
                            <figure>
                                <img src={csLogo8} alt="partner" />
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src={csLogo9} alt="partner" />
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src={csLogo10} alt="partner" />
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src={csLogo12} alt="partner" />
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src={csLogo13} alt="partner" />
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src={csLogo14} alt="partner" />
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src={csLogo15} alt="partner" />
                            </figure>
                        </li>
                    </ul>
                </div>
                <div className="partner-logo-wrap">
                    <div className="heading mt-40">
                        <h3>Mortgage resources</h3>
                    </div>
                    <ul className="d-flex align-items-center justify-content-center">
                        <li>
                            <figure>
                                <img src={csLogo16} alt="partner" />
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src={csLogo17} alt="partner" />
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src={csLogo18} alt="partner" />
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src={csLogo19} alt="partner" />
                            </figure>
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    );
}

export default PartnerLogo;