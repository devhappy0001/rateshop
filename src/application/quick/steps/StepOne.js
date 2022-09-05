import React from 'react';
import {useFormContext} from "react-hook-form";

const QuickRadio = (props, ref) => {

    const {
        id,
        label,
        name,
        value,
        image,
        description,
        data_id=null,
        register = () => { },
        clickEventHandler = () => {}
    } = props;

    return (

        <div className="step-radio-outer">
            <input
                type="radio"
                name={name}
                value={value}
                data-id={data_id}
                id={id}
                {...register(name, { required: {value:true,message:'This field is required.'} })}
                onClick={(e) => {clickEventHandler()}}

            />
            <label htmlFor={id} >
                {image && <img src={image} />}
                <h4>{label}</h4>
            </label>
            {description && <span>{description}</span>}
        </div>
    );
}

const StepOne = (props) => {

    const { setPosition,setActiveStep,handleNext } = props;

    const { control, register,formState:{errors},handleSubmit } = useFormContext();

    const mortgageTypes = [

        {
            id:"mortgageType1",
            name:"mortgageType",
            label:"A Purchase",
            value:"purchase",
            description:"Pre-Approvals & New Purchases",
            image:"https://www.rateshop.ca/themes/frontend/getQuote/images/purchasers.png" ,
        },
        {
            id:"mortgageType2",
            name:"mortgageType",
            label:"A Refinance",
            value:"refinance",
            description:"Debt Consolidation & One Lower Payment",
            image:"https://www.rateshop.ca/themes/frontend/getQuote/images/refinancers.png",
        },
        {
            id:"mortgageType3",
            name:"mortgageType",
            label:"A Renewal/Switch",
            value:"renewal-switch",
            description:"Same Mortgage Balance & Lower Rates",
            image:"https://www.rateshop.ca/themes/frontend/getQuote/images/purchasers.png",
        },
        {
            id:"mortgageType4",
            name:"mortgageType",
            label:"A Home Equity Line",
            value:"home-enquiry",
            description:"Access Home Equity Loans in 24 hours",
            image:"https://www.rateshop.ca/themes/frontend/getQuote/images/refinancers.png",
        }
    ];

    
    return (

        <>
            <div className="heading">
                <h4>What are you <span>looking</span> to do? </h4>
            </div>
            <div className="step-radio-box" onChange={(e) => { setPosition(e.target.getAttribute('data-id')); handleSubmit(handleNext)(); }}>
                {mortgageTypes && mortgageTypes.map((mortgageType,index) => (

                    <QuickRadio
                        
                        data_id     = {index+1}
                        id          = {mortgageType.id}
                        name        = {mortgageType.name}
                        label       = {mortgageType.label}
                        value       = {mortgageType.value}
                        description = {mortgageType.description}
                        image       = {mortgageType.image}
                        key         = {mortgageType.id}
                        register    = {register}
                    />

                ))}
            </div>
            <div>{errors.mortgageType && errors.mortgageType.message}</div>
        </>
    );
}

export default StepOne;