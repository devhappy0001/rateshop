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
                {image && <img src={image} alt="Rateshop"/>}
                <h4>{label}</h4>
            </label>
            {description && <span>{description}</span>}
        </div>
    );
}


const StepTwo = (props) => {

    const {handleNext} = props;

    const { control, register,formState:{errors},handleSubmit } = useFormContext();
  
    const intendedTypes = [

        {
            id:"intended1",
            name:"intended",
            label:"Owner Occupied",
            value:"freeLegals",
            description:"Primary Residence",
            image:"https://www.rateshop.ca/themes/frontend/getQuote/images/primaryrs.png"
        },
        {
            id:"intended2",
            name:"intended",
            label:"Investment",
            value:"freeAppraisal",
            description:"Rental (1 to 4 Units)",
            image:"https://www.rateshop.ca/themes/frontend/getQuote/images/investmentrs.png"
        },
        {
            id:"intended3",
            name:"intended",
            label:"2nd/Vacation Home",
            value:"vacation",
            description:"Cottage or Second Home",
            image:"https://www.rateshop.ca/themes/frontend/getQuote/images/vacationrs.png"
        }
    ];

    return (

        <>
            <div className="heading">
                <h4>What will the <span>property</span> be used for?</h4>
            </div>
            <div className="step-radio-box" onChange={(e) => { handleSubmit(handleNext)(); }}>
             {intendedTypes && intendedTypes.map((intendedType,index) => (

                    <QuickRadio
                        id          = {intendedType.id}
                        name        = {intendedType.name}
                        label       = {intendedType.label}
                        value       = {intendedType.value}
                        description = {intendedType.description}
                        image       = {intendedType.image}
                        key         = {intendedType.id}
                        register    = {register}
                    />

             ))}

            </div>
            <div>{errors.intended && errors.intended.message}</div>

        </>
    );

}

export default StepTwo;