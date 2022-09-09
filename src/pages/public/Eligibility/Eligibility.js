import React, { useEffect } from "react"; 
import AOS from 'aos';
import "aos/dist/aos.css"; 
import { Button, Container, Grid,Radio,RadioGroup,FormControlLabel, TextField,Checkbox} from "@material-ui/core";  
import Partner from '../../../components/shared/partner/Partner';
import './Eligibility.scss';
import {
    EstimateSvg,EncryptedSvg
}
from "../../../core/ImgsesSvg";
const Eligibility = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (<>
        {/* Eligibility sec start here */}
        <section className="cards-wrap">
            <Container className="mt-200">
                <Grid container>
                    <Grid item  xs={12} sm={12} md={12} lg={12} spacing={2}>
                        <ul className="step-nav d-flex">
                            <li className="filled">
                                <span>1</span><p>Card type</p>
                            </li>
                            <li  className="filled">
                                <span>2</span><p>ELIGIBILITY</p>
                            </li>
                            <li>
                                <span>3</span><p>RESULTS</p>
                            </li>
                        </ul>
                        <div className="estimate-time-title">
                            <p> {<EstimateSvg/>} <span>Estimated 1 minute to complete</span></p>
                            <h1>CardFinder is moments away from showing your personalized card matches</h1>
                        </div> 
                        {/* wanting a new card */}
                        <div className="card-form-fields">
                            <div className="card-title">
                                <h3>What’s your top reason for wanting a new card?</h3> 
                            </div> 
                            <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue=""
                                    name="radio-buttons-group"
                                >
                                <div className="form-fields d-flex">
                                    <div className="field-wrapper w-30">
                                        <FormControlLabel value="Earn" className="blue-checkRadio" control={<Radio />} label="Earn rewards" />
                                    </div> 
                                    <div className="field-wrapper w-30">
                                        <FormControlLabel value="interest" className="blue-checkRadio" control={<Radio />} label="Pay low interest" /> 
                                    </div>  
                                </div> 
                            </RadioGroup>
                        </div>
                        {/* reward type */}                        
                        <div className="card-form-fields">
                            <div className="card-title">
                                <h3>Please select your preferred reward type.</h3> 
                            </div>
                            <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue=""
                                    name="radio-buttons-group1"
                                >
                                <div className="form-fields d-flex">
                                    <div className="field-wrapper w-30">
                                        <FormControlLabel value="Travel" className="blue-checkRadio" control={<Radio />} label="Travel" />
                                    </div> 
                                    <div className="field-wrapper w-30">
                                        <FormControlLabel value="Cash" className="blue-checkRadio" control={<Radio />} label="Cash back" /> 
                                    </div> 
                                    <div className="field-wrapper w-30">
                                        <FormControlLabel value="All" className="blue-checkRadio" control={<Radio />} label="All of them" /> 
                                    </div> 
                                </div> 
                            </RadioGroup>                            
                        </div>
                        {/* credit card in a typical month */}                        
                        <div className="card-form-fields">
                            <div className="card-title">
                                <h3 className="max-975">How much do you spend on your credit card in a typical month?</h3> 
                            </div>
                            <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue=""
                                    name="radio-buttons-group2"
                                >
                                <div className="form-fields d-flex">
                                    <div className="field-wrapper w-30">
                                        <FormControlLabel value="1000" className="blue-checkRadio" control={<Radio />} label="Less than $1,000" />
                                    </div> 
                                    <div className="field-wrapper w-30">
                                        <FormControlLabel value="1100" className="blue-checkRadio" control={<Radio />} label="$1,000 - $1,999" /> 
                                    </div> 
                                    <div className="field-wrapper w-30">
                                        <FormControlLabel value="2000" className="blue-checkRadio" control={<Radio />} label="$2,000 - $2,999" /> 
                                    </div> 
                                    <div className="field-wrapper w-30">
                                        <FormControlLabel value="3000" className="blue-checkRadio" control={<Radio />} label="$3,000 - $4,999" /> 
                                    </div> 
                                    <div className="field-wrapper w-30">
                                        <FormControlLabel value="5000" className="blue-checkRadio" control={<Radio />} label="$5,000+" /> 
                                    </div> 
                                </div> 
                            </RadioGroup>  
                        </div>
                        {/* card features */}                        
                        <div className="card-form-fields">
                            <div className="card-title">
                                <h3 className="max-975">Which of the following card features are the most important to you? You can select up to 4 features.</h3> 
                                <p>(Optional)         You can select up to 4 features.</p>
                            </div> 
                            <div className="form-fields d-flex">
                                <div className="field-wrapper w-30">
                                    <FormControlLabel className="blue-checkRadio"
                                        control={
                                        <Checkbox   name="jason" />
                                        }
                                        label="
                                        Baggage loss insurance
                                        "
                                    />
                                </div> 
                                <div className="field-wrapper w-30">
                                    <FormControlLabel className="blue-checkRadio"
                                        control={
                                        <Checkbox   name="jason" />
                                        }
                                        label="
                                        Car rental insurance"
                                    />
                                </div> 
                                <div className="field-wrapper w-30">
                                    <FormControlLabel className="blue-checkRadio"
                                        control={
                                        <Checkbox   name="jason" />
                                        }
                                        label="Flight delay insurance"
                                    />
                                </div> 
                                <div className="field-wrapper w-30">
                                    <FormControlLabel className="blue-checkRadio"
                                        control={
                                        <Checkbox   name="jason" />
                                        }
                                        label="
                                        Lounge access"
                                    />
                                </div> 
                                <div className="field-wrapper w-30">
                                    <FormControlLabel className="blue-checkRadio"
                                        control={
                                        <Checkbox   name="jason" />
                                        }
                                        label="
                                        No foreign exchange fee"
                                    />
                                </div> 
                                <div className="field-wrapper w-30">
                                    <FormControlLabel className="blue-checkRadio"
                                        control={
                                        <Checkbox   name="jason" />
                                        }
                                        label="
                                        Travel emergency medical"
                                    />
                                </div> 
                                <div className="field-wrapper w-30">
                                    <FormControlLabel className="blue-checkRadio"
                                        control={
                                        <Checkbox   name="jason" />
                                        }
                                        label="
                                        Trip cancellation"
                                    />
                                </div> 
                            </div> 
                        </div> 
                        {/* back and card btn */}
                        <div className="step-btns d-flex justify-content-end">  
                            <Button variant="contained" color="primary">Continue</Button>
                        </div>
                        {/* cards form fields end */}
                    </Grid>
                </Grid>
            </Container>
        </section> 
        {/* cards sec end here  */}
         {/* partner logo Start*/}
         <Partner/>
    {/* partner logo End*/}
    </>)
}

export default Eligibility