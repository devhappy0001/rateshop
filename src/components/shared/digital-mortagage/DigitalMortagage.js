import React,{useState} from 'react';
import { 
    Container,
    Grid,
    Button,
    Input,
    Slider } from "@material-ui/core";

const DigitalMortagage = () => {

    const [value1, setValue1] = useState(30);

    const handleSliderChange = (event, newValue1) => {
        setValue1(newValue1);
    };

    const handleInputChange = (event) => {
        setValue1(event.target.value === "" ? "" : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value1 < 0) {
          setValue1(0);
        } else if (value1 > 100) {
          setValue1(100);
        }
    };

    return (
        <section className="digital-mortgage">
            <Container>
                <div className="heading">
                    <h3>
                        <span>Get</span> started with the Digital Mortgage Experience
                    </h3>
                    <p>Prequalify or apply for your mortgage in minutes</p>
                </div>
                <Grid container className="align-items-center">
                    <Grid sm={6} md={6} lg={6} item className="payment-col">
                        <div className="payment-slider">
                            <p>Purchase price</p>
                            <h3>
                                <sup>$</sup>
                                <Input
                                    // className={classes.input}
                                    value={value1}
                                    onChange={handleInputChange}
                                    onBlur={handleBlur}
                                    inputProps={{
                                        step: 10,
                                        min: 0,
                                        max: 100,
                                        type: "number",
                                        "aria-labelledby": "input-slider",
                                    }}
                                />
                            </h3>
                            <Grid item className="payment-slide">
                                <Slider
                                    value={typeof value1 === "number" ? value1 : 0}
                                    onChange={handleSliderChange}
                                    aria-labelledby="input-slider"
                                />
                            </Grid>
                            <div className="slider-text d-flex justify-content-between">
                                <p>$60,000</p>
                                <p>$2.5 million</p>
                            </div>
                        </div>
                        {/* <div className="payment-slider">
                <p>Down payment </p>
                <h3>
                  <sup>$</sup>
                  <Input
                    // className={classes.input}
                    value={value1}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    inputProps={{
                      step: 10,
                      min: 0,
                      max: 100,
                      type: "number",
                      "aria-labelledby": "input-slider",
                    }}
                  />
                </h3>
                <Grid item xs>
                  <Slider
                    value={typeof value1 === "number" ? value1 : 0}
                    onChange={handleSliderChange}
                    aria-labelledby="input-slider"
                  />
                </Grid>

                <div className="slider-text">
                  <p>5% or more of purchase price</p>
                </div>
              </div> */}
                        {/* <Grid container>
                <Grid lg={6} item>
                  <FormControl className="period-zipcode" component="fieldset">
                    <FormLabel component="legend">Period</FormLabel>
                    <RadioGroup
                      aria-label="variable"
                      name="gender1"
                      value={tabContextValue}
                      onChange={handleTabContextChange}
                    >
                      <FormControlLabel
                        value="variable"
                        control={<Radio color="primary" />}
                        label="5/1 ARM variable"
                      />
                      <FormControlLabel
                        value="fixed"
                        control={<Radio color="primary" />}
                        label="15-year fixed"
                      />
                      <FormControlLabel
                        value="fixed1"
                        control={<Radio color="primary" />}
                        label="30-year fixed"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid lg={6} item>
                  <label className="period-zipcode">Zip Code</label>
                  <h4>95464</h4>
                </Grid>
              </Grid> */}
                    </Grid>
                    <Grid sm={6} md={6} lg={6} item className="payment-col">
                        <div className="payment-slider">
                            <p>Down payment</p>
                            <h3>
                                <sup>$</sup>
                                <Input
                                    // className={classes.input}
                                    value={value1}
                                    onChange={handleInputChange}
                                    onBlur={handleBlur}
                                    inputProps={{
                                        step: 10,
                                        min: 0,
                                        max: 100,
                                        type: "number",
                                        "aria-labelledby": "input-slider",
                                    }}
                                />
                            </h3>
                            <Grid item className="payment-slide">
                                <Slider
                                    value={typeof value1 === "number" ? value1 : 0}
                                    onChange={handleSliderChange}
                                    aria-labelledby="input-slider"
                                />
                            </Grid>
                            <div className="slider-text d-flex justify-content-between">
                                <p>5% or more of purchase price</p>
                                {/* <p>$2.5 million</p> */}
                            </div>
                        </div>
                        {/* <Grid container>
                <Grid lg={6} item>
                  <FormControl className="period-zipcode" component="fieldset">
                    <FormLabel component="legend">Period</FormLabel>
                    <RadioGroup
                      aria-label="variable"
                      name="gender1"
                      value={tabContextValue}
                      onChange={handleTabContextChange}
                    >
                      <FormControlLabel
                        value="variable"
                        control={<Radio color="primary" />}
                        label="5/1 ARM variable"
                      />
                      <FormControlLabel
                        value="fixed"
                        control={<Radio color="primary" />}
                        label="15-year fixed"
                      />
                      <FormControlLabel
                        value="fixed1"
                        control={<Radio color="primary" />}
                        label="30-year fixed"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid lg={6} item>
                  <label className="period-zipcode">Zip Code</label>
                  <h4>95464</h4>
                </Grid>
              </Grid> */}
                    </Grid>
                    {/* <Grid lg={5} item>
              <div className="right-payment-sec">
                <h4>Your total payment will be</h4>
                <h2><sup>$</sup>984</h2>
                <ul>
                  <li>
                    <p>Rate<span>4.250%</span></p>
                  </li>
                  <li>
                    <p>APR<span>4.418%</span></p>
                  </li>
                  <li>
                    <p>Points<span>0.397</span></p>
                  </li>
                </ul>
                <Button variant="contained" color="secondary">
                  Get Started
                </Button>

              </div>
            </Grid> */}
                </Grid>
                <div className="d-flex justify-content-center">
                    <Button variant="contained">Get started</Button>
                </div>
            </Container>
        </section>
    );
}

export default DigitalMortagage;