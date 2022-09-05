import React from 'react';
import { useFormContext } from 'react-hook-form';

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

const StepSeven = (props) => {
    
    const {handleNext} = props;
    const {register,handleSubmit} = useFormContext();

    return (

        <>
            <div className="heading">
                <h4>What <span>Rewards</span> do You Prefer</h4>
            </div>
            <div className="step-radio-box" onChange={handleSubmit(handleNext)}>
                <QuickRadio
                    id="reward_type_1"
                    name="reward_type"
                    label="Free Legals"
                    value="Free Legals"
                    image="https://www.rateshop.ca/themes/frontend/getQuote/images/3.png"
                    key="1"
                    register={register}
                />
                <QuickRadio
                    id="reward_type_2"
                    name="reward_type"
                    label="Free Appraisal"
                    value="Free Appraisal"
                    image="https://www.rateshop.ca/themes/frontend/getQuote/images/5.png"
                    key="2"
                    register={register}
                />
                <QuickRadio
                    id="reward_type_3"
                    name="reward_type"
                    label="upto $2500 in Cashback"
                    value="upto $2500 in Cashback"
                    image="https://www.rateshop.ca/themes/frontend/getQuote/images/4.png"
                    key="3"
                    register={register}
                />
            </div>
        </>
    );
    
}

export default StepSeven;