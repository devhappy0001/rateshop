import React, { useEffect } from "react"; 
import AOS from 'aos';
import "aos/dist/aos.css"; 
import { Button, Container, Grid,Radio,RadioGroup,FormControlLabel, TextField,Checkbox} from "@material-ui/core";  
import Partner from '../../../components/shared/partner/Partner';
import './Cards.scss';
import {
    EstimateSvg,EncryptedSvg
}
from "../../../core/ImgsesSvg";
const Cards = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (<>
        {/* Cards sec start here */}
        <section className="cards-wrap">
            <Container className="mt-200">
                <Grid container>
                    <Grid item  xs={12} sm={12} md={12} lg={12} spacing={2}>
                        <ul className="step-nav d-flex">
                            <li className="filled">
                                <span>1</span><p>Card type</p>
                            </li>
                            <li>
                                <span>2</span><p>ELIGIBILITY</p>
                            </li>
                            <li>
                                <span>3</span><p>RESULTS</p>
                            </li>
                        </ul>
                        <div className="estimate-time-title">
                            <p> {<EstimateSvg/>} <span>Estimated 1 minute to complete</span></p>
                            <h1>Tell us a bit about yourself</h1>
                        </div>
                        <div className="short-des-btn">
                            <p>Your details will be used to perform a soft credit check, which will help us find the cards you’re most eligible for. This will not affect your credit score.</p>
                            <Button variant="contained" color="secondary" className="tertiary">{<EncryptedSvg/>} RateShop.ca ensures your information is safe and encrypted.</Button>
                        </div>
                        {/* cards form fields start */}
                        <div className="card-form-fields">
                            <div className="card-title">
                                <h3>What is your name?</h3>
                                <p>In order to get an accurate check, we need your legal name.</p>
                            </div>
                            <div className="form-fields d-flex">
                                <div className="field-wrapper w-30">
                                    <TextField
                                        id="first-name"
                                        label="First Name"
                                        type="test" 
                                        variant="filled"
                                        className="blue-bordered"
                                    />
                                </div>
                                <div className="field-wrapper w-30">
                                    <TextField
                                        id="last-name"
                                        label="Last Name"
                                        type="test" 
                                        variant="filled"
                                        className="blue-bordered"
                                    />
                                </div>
                            </div> 
                        </div>
                        {/* date of birth */}                        
                        <div className="card-form-fields">
                            <div className="card-title">
                                <h3>What is your date of birth?</h3> 
                            </div>
                            <div className="form-fields d-flex">
                                <div className="field-wrapper w-30">
                                    <TextField
                                        id="first-name"
                                        className="blue-bordered"
                                        label="MM / DD / YYYY"
                                        type="date" 
                                        variant="filled"
                                        defaultValue="2017-05-24"
                                        sx={{ width: 220 }}
                                        InputLabelProps={{
                                          shrink: true,
                                        }}
                                    /> 
                                </div> 
                            </div> 
                        </div>
                        {/* Address */}                        
                        <div className="card-form-fields">
                            <div className="card-title">
                                <h3>What is your address?</h3> 
                            </div>
                            <div className="form-fields d-flex">
                                <div className="field-wrapper w-30">
                                    <TextField
                                        id="first-name"
                                        label="MM / DD / YYYY"
                                        type="test" 
                                        variant="filled"
                                        className="blue-bordered"
                                    />
                                </div>
                                <div className="field-wrapper w-30">
                                    <TextField
                                        id="last-name"
                                        label="Unit"
                                        type="test" 
                                        variant="filled"
                                        className="blue-bordered"
                                    />
                                </div>
                                <div className="field-wrapper w-40">
                                    <TextField
                                        id="last-name"
                                        label="Street name"
                                        type="test" 
                                        variant="filled"
                                        className="blue-bordered"
                                    />
                                </div>
                                <div className="field-wrapper w-30">
                                    <TextField
                                        id="last-name"
                                        label="Strret"
                                        type="test" 
                                        variant="filled"
                                        className="blue-bordered"
                                    />
                                </div>
                                <div className="field-wrapper w-30">
                                    <TextField
                                        id="last-name"
                                        label="Direction"
                                        type="test" 
                                        variant="filled"
                                        className="blue-bordered"
                                    />
                                </div>
                                <div className="field-wrapper w-40">
                                    <TextField
                                        id="last-name"
                                        label="City"
                                        type="test" 
                                        variant="filled"
                                        className="blue-bordered"
                                    />
                                </div>
                                <div className="field-wrapper w-30">
                                    <TextField
                                        id="last-name"
                                        label="Country"
                                        type="test" 
                                        variant="filled"
                                        className="blue-bordered"
                                    />
                                </div>
                                <div className="field-wrapper w-30">
                                    <TextField
                                        id="last-name"
                                        label="Postal Code"
                                        type="test" 
                                        variant="filled"
                                        className="blue-bordered"
                                    />
                                </div> 
                            </div> 
                        </div>
                        {/* Annual Income */}                        
                        <div className="card-form-fields">
                            <div className="card-title">
                                <h3>What is your annual income?</h3> 
                            </div>
                            <div className="form-fields d-flex">
                                <div className="field-wrapper w-30">
                                    <FormControlLabel className="blue-checkRadio"
                                        control={
                                        <Checkbox   name="jason" />
                                        }
                                        label="$0 - $14,999"
                                    />
                                </div> 
                                <div className="field-wrapper w-30">
                                    <FormControlLabel className="blue-checkRadio"
                                        control={
                                        <Checkbox   name="jason" />
                                        }
                                        label="$15,000 - $39,999"
                                    />
                                </div> 
                                <div className="field-wrapper w-30">
                                    <FormControlLabel className="blue-checkRadio"
                                        control={
                                        <Checkbox   name="jason" />
                                        }
                                        label="$40,000 - $59,999"
                                    />
                                </div> 
                                <div className="field-wrapper w-30">
                                    <FormControlLabel className="blue-checkRadio"
                                        control={
                                        <Checkbox   name="jason" />
                                        }
                                        label="$60,000 - $79,999"
                                    />
                                </div> 
                                <div className="field-wrapper w-30">
                                    <FormControlLabel className="blue-checkRadio"
                                        control={
                                        <Checkbox   name="jason" />
                                        }
                                        label="$80,000+"
                                    />
                                </div> 
                                <div className="field-wrapper w-30">
                                    <FormControlLabel className="blue-checkRadio"
                                        control={
                                        <Checkbox   name="jason" />
                                        }
                                        label="Prefer not to say"
                                    />
                                </div> 
                            </div> 
                        </div>
                        {/* credit score */}                        
                        <div className="card-form-fields">
                            <div className="card-title">
                                <h3>Do you know your credit score?</h3> 
                            </div>
                            <div className="form-fields d-flex">
                                <div className="field-wrapper w-30">
                                    <FormControlLabel className="blue-checkRadio"
                                        control={
                                        <Checkbox   name="jason" />
                                        }
                                        label="It’s Excellent (760+)"
                                    />
                                </div> 
                                <div className="field-wrapper w-30">
                                    <FormControlLabel className="blue-checkRadio"
                                        control={
                                        <Checkbox   name="jason" />
                                        }
                                        label="It’s Very Good (725-759)"
                                    />
                                </div> 
                                <div className="field-wrapper w-30">
                                    <FormControlLabel className="blue-checkRadio"
                                        control={
                                        <Checkbox   name="jason" />
                                        }
                                        label="It’s Good (660-724)"
                                    />
                                </div> 
                                <div className="field-wrapper w-30">
                                    <FormControlLabel className="blue-checkRadio"
                                        control={
                                        <Checkbox   name="jason" />
                                        }
                                        label="It’s Fair (560-659)"
                                    />
                                </div> 
                                <div className="field-wrapper w-30">
                                    <FormControlLabel className="blue-checkRadio"
                                        control={
                                        <Checkbox   name="jason" />
                                        }
                                        label="It’s Poor (below 560)"
                                    />
                                </div> 
                                <div className="field-wrapper w-30">
                                    <FormControlLabel className="blue-checkRadio"
                                        control={
                                        <Checkbox   name="jason" />
                                        }
                                        label="No, I don’t know it"
                                    />
                                </div> 
                            </div> 
                        </div>
                        {/* personalized card matches*/}                        
                        <div className="card-form-fields">
                            <div className="card-title">
                                <h3>Do you want to save your personalized card matches so you can revisit them instantly?</h3> 
                            </div>
                            <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue=""
                                    name="radio-buttons-group"
                                >
                                <div className="form-fields d-flex">
                                    <div className="field-wrapper w-30">
                                        <FormControlLabel value="yes" className="blue-checkRadio" control={<Radio />} label="Yes" />
                                    </div> 
                                    <div className="field-wrapper w-30">
                                        <FormControlLabel value="no" className="blue-checkRadio" control={<Radio />} label="No" /> 
                                    </div>  
                                </div> 
                            </RadioGroup>
                        </div>
                        {/* back and card btn */}
                        <div className="step-btns d-flex justify-content-end"> 
                            <Button variant="contained" color="secondary">Back</Button>
                            <Button variant="contained" color="primary">see my cards</Button>
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

export default Cards