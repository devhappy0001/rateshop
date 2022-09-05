import React,{useState} from 'react';
import { 
    Container,
    Button,
    AppBar,
    Tab
} from "@material-ui/core";
import {
    TabContext,
    TabList,
    TabPanel
} from "@material-ui/lab";
import {
    MortgageSvg,
    CreditCardSvg,
    BankingSvg,
    InsuranceSvg,
    InvestingSvg,
    LoanSvg,
} from "../../../core/ImgsesSvg";

const MortgageRate = () => {

    //States
    const [tabContextValue, setTabContextValue] = useState("1");
    //Handle-States
    const handleTabContextChange = (event, newValue) => {
        setTabContextValue(newValue);
    };

    return (
        <section className="mortgage-rates">
            <Container>
                <div className="heading">
                    <h3>
                        <span>Best</span> Mortgage Rates
                    </h3>
                </div>
                {/* <Grid lg={12}>
                    <div className="mortgage-inn-btn">
                        <NavLink to=""><span><HomeIcon/></span><p>I'm buying a home</p></NavLink>
                        <NavLink to=""><span><LoopIcon/></span><p>I'm renewing/refinancing</p></NavLink>
                    </div>
                </Grid> */}
                <div className="mortgage-tabs">
                    <TabContext value={tabContextValue}>
                        <AppBar position="static">
                            <TabList
                                onChange={handleTabContextChange}
                                aria-label="simple tabs example"
                            >
                                <Tab icon={<MortgageSvg />} label="Mortgage" value="1" />
                                <Tab
                                    icon={<CreditCardSvg />}
                                    label="Credit cards"
                                    value="2"
                                />
                                <Tab icon={<BankingSvg />} label="Banking" value="3" />
                                <Tab icon={<InvestingSvg />} label="Investing" value="4" />
                                <Tab icon={<InsuranceSvg />} label="Insurance" value="5" />
                                <Tab icon={<LoanSvg />} label="Loans" value="6" />
                            </TabList>
                        </AppBar>
                        <div className="tab-content">
                            <TabPanel value="1">
                                <div className="mortgage-content">
                                    <div className="mortgage-wrap">
                                        <div className="left-sec">
                                            <h4>
                                                11<span>%</span>
                                            </h4>
                                        </div>
                                        <div className="right-text">
                                            <h5>
                                                Lowest Purchase<span>5-YR Variable</span>
                                            </h5>
                                        </div>
                                        <div className="mortage-btns">
                                            <Button variant="contained" color="secondary">
                                                Get this rate
                                            </Button>
                                            <Button variant="contained" color="primary">Compare</Button>
                                        </div>
                                    </div>
                                    <div className="mortgage-wrap">
                                        <div className="left-sec">
                                            <h4>
                                                1.45<span>%</span>
                                            </h4>
                                        </div>
                                        <div className="right-text">
                                            <h5>
                                                Lowest Refinance<span>5-YR Variable</span>
                                            </h5>
                                        </div>
                                        <div className="mortage-btns">
                                            <Button variant="contained" color="secondary">
                                                Get this rate
                                            </Button>
                                            <Button variant="contained" color="primary">Compare</Button>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel value="2">Item Two</TabPanel>
                            <TabPanel value="3">Item Three</TabPanel>
                            <TabPanel value="4">Item Three</TabPanel>
                            <TabPanel value="5">Item Three</TabPanel>
                            <TabPanel value="6">Item Three</TabPanel>
                        </div>
                    </TabContext>
                </div>
                <div className="d-flex justify-content-center mt-50">
                    <Button variant="contained">
                        Get Started Now
                    </Button>
                </div>
            </Container>
        </section>
    );
}

export default MortgageRate;