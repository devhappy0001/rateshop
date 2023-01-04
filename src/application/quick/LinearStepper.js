import React, { useState } from "react";
import {Typography,Button,Stepper,Step,StepLabel,Grid} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {useForm,FormProvider} from "react-hook-form";
import {chatrobot}from "../../core/Images";
import { NavLink } from "react-router-dom";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import StepFour from "./steps/StepFour";
import StepFive from "./steps/StepFive";
import StepSix from "./steps/StepSix";
import StepSeven from "./steps/StepSeven";
import StepEight from "./steps/StepEight";
import StepNine from "./steps/StepNine";
import request from "../../api/public/request";

const useStyles = makeStyles((theme) => ({
    button: {
        marginRight: theme.spacing(1),
    },
}));

function getSteps() {
    return ["step-1","step-2","step-3","step-4","step-5","step-6","step-7","step-8","step-9"];
}

const StepWrapper = (props) => {

    let classes = `step-com-main ${props.className}`;
    return (<div className={classes} >{props.children}</div>);
}

const StepOneForm = (props) => {

    return (
        <StepWrapper className="steps1">
           <StepOne {...props}/>
        </StepWrapper>
    );
}

const StepTwoForm = (props) => {

    return (
        <StepWrapper className="steps1">
           <StepTwo {...props} />
        </StepWrapper>
    );

}

const StepThreeForm = (props) => {

    return (
        <StepWrapper className="steps3">
           <StepThree {...props}/>
        </StepWrapper>
    );
}

const StepFourForm = (props) => {

    return (
        <StepWrapper className="steps4">
          <StepFour {...props} />
        </StepWrapper>
    );
}

const StepFiveForm = (props) => {

    return (
        <StepWrapper className="steps5">
         <StepFive {...props} />
        </StepWrapper>
    );
}

const StepSixForm = (props) => {

    return (
        <StepWrapper className="steps6">
          <StepSix {...props}/>
        </StepWrapper>
    );
}
const StepSevenForm = (props) => {

    return (
        <StepWrapper className="steps7">
          <StepSeven {...props} />
        </StepWrapper>
    )
}
const StepEightForm = (props) => {

    return (
        <StepWrapper className="steps8">
           <StepEight {...props}/>
        </StepWrapper>
    )
}

const StepNineForm = (props) => {

    return (
        <StepWrapper className="steps9">
           <StepNine {...props} />
        </StepWrapper>
    )
}

function getStepContent(props) {

    const { activeStep: step } = props;

    switch (step) {
        case 0:
            return <StepOneForm {...props} />;
        case 1:
            return <StepTwoForm {...props} />;
        case 2:
            return <StepThreeForm {...props} />;
        case 3:
            return <StepFourForm {...props} />;
        case 4:
            return <StepFiveForm  {...props} />;
        case 5:
            return <StepSixForm {...props}/>;
        case 6:
            return <StepSevenForm {...props}/>;
        case 7:
            return <StepEightForm {...props}/>;
        case 8:
            return <StepNineForm {...props}/>;
        default:
            return "unknown step";
    }
}

const LinearStepper = () => {

    const classes = useStyles();

    const [activeStep, setActiveStep]      = useState(4);
    const [position, setPosition]          = useState(3);
    const [purchasePrice,setPurchasePrice] = useState('');

    const steps = getSteps();
    const methods = useForm({

        defaultValues: {

            "mortgageType"   : "",
            "intended"       : "",
            "purchase_price" : "",
        }
    });

    const handleBack = () => {
        setActiveStep((step) => (step - 1));
    };

    const handleNext = (data) => {

        console.log(data);

        if(activeStep <= 7)
        {
           setActiveStep((step) => (step + 1));
        }
        else
        {
            request('POST','http://127.0.0.1/Testing/api.php',data)
            .then((response) => {
                
                console.log(response)
            })
            .catch((error) => {

                console.log(error);
            })
          
        }
    };

    return (
        
        <div className="quick-form-inner">
            {/* <div className="quick-steps">
                {activeStep + 1} of 10
           </div> */}
           <Grid container className="step-bottom mobile-chat">
                <Grid sm={12} md={12} lg={12} item className="quick-chat">
                    <div className="chat-massage">
                        <NavLink to="/">
                            <img src={chatrobot} alt="chat robot"/>
                        </NavLink>
                        <div className="chat-messgae-text"> Hi👋 I'm MAT! Your Mortgage Approval Tool. 🏠 Want the Lowest Mortgage Rate Guarantee?✨</div>
                    </div>
                </Grid>                
            </Grid>
            <Stepper alternativeLabel activeStep={activeStep} className="steps-detail">
                {
                    steps.map((step, index) => {

                        return (
                            <Step key={index} className="quick-step-count">
                                <StepLabel >
                                    <span className="step-span"></span>
                                </StepLabel>
                            </Step>
                        );
                    })
                }
            </Stepper>
            {activeStep === steps.length ? (
                <Typography variant="h4" align="center">
                    Thank You
                </Typography>
            ) : (
                <>   
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(handleNext)}>
                            
                            {getStepContent({ activeStep, position, setPosition,purchasePrice,setPurchasePrice,setActiveStep,handleNext })}
                            <Grid container className="step-bottom">
                                <Grid sm={12} md={6} lg={6} item  className="cs-p0 quick-chat desktop-chat">
                                    <div className="chat-massage">
                                        <NavLink to="/">
                                            <img src={chatrobot} alt="chat robot"/>
                                        </NavLink>
                                        <div className="chat-messgae-text"> Hi👋 I'm MAT! Your Mortgage Approval Tool. 🏠 Want the Lowest Mortgage Rate Guarantee?✨</div>
                                    </div>
                                </Grid>
                                <Grid sm={12} md={6} lg={6} item  className="cs-p0  prev-next-btn">
                                    {
                                        activeStep !== 0 && <Button
                                            className={classes.button}
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                            variant="contained"
                                            color="primary"
                                        >
                                            back
                                        </Button>
                                    }

                                    <Button
                                        className={classes.button}
                                        variant="contained"
                                        color="secondary"
                                        // onClick={handleNext}
                                        type="submit"

                                    >
                                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </FormProvider>
                </>
            )}
        </div>
    );
}

export default LinearStepper;