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

const StepSix = (props) => {
    
    const {handleNext} = props;
    const {register,handleSubmit} = useFormContext();

    return (

        <>
            <div className="heading">
                <h4>What's your <span>credit</span> like?</h4>
            </div>
            <div className="step-radio-box" onChange={handleSubmit(handleNext)}>
                <QuickRadio
                    id="credit_score_1"
                    name="credit_score"
                    label="Poor(600 or less)"
                    image="https://www.rateshop.ca/themes/frontend/getQuote/images/star1.svg"
                    key="1"
                    value="poor"
                    register={register}
                />
                <QuickRadio
                    id="credit_score_2"
                    name="credit_score"
                    label="Fair(600 to 680)"
                    image="https://www.rateshop.ca/themes/frontend/getQuote/images/star2.svg"
                    key="2"
                    value="fair"
                    register={register}
                />
                <QuickRadio
                    id="credit_score_3"
                    name="credit_score"
                    label="Good(680 to 720)"
                    image="https://www.rateshop.ca/themes/frontend/getQuote/images/star3.svg"
                    key="3"
                    value="good"
                    register={register}
                />
                <QuickRadio
                    id="credit_score_4"
                    name="credit_score"
                    label="Excellent(720+)"
                    image="https://www.rateshop.ca/themes/frontend/getQuote/images/star4.svg"
                    key="4"
                    value="excellent"
                    register={register}
                />
            </div>
        </>
    );
}

export default StepSix;