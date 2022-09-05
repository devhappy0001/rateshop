import React from 'react';
import {useFormContext,Controller} from "react-hook-form";
import banks from '../../../config/banks';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {TextField} from "@material-ui/core";
import SearchSelectUI from '../../../components/ui/search-select/SearchSelectUI';
import  '../../../components/ui/search-select/SearchSelectUI.scss';
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

const StepFive = (props) => {

    const { position,handleNext } = props;
    const {register,control,setValue,getValues,handleSubmit} = useFormContext();
    console.log({title: 'B2B Bank'})

   return (

       <>
        <div className="heading">
                {
                    position == 1 && <h4>Found a property?</h4>
                }

                {
                    (position == 2 || position == 4) && <h4>Additional Funds</h4>
                }

                {
                    position == 3 && <h4>Who's Your Current Mortgage Lender?</h4>
                }


            </div>
            {
                position == 1
                &&
                <div className="step-radio-box" onChange={handleSubmit(handleNext)}>
                    <QuickRadio
                        id="purchase_offer_1"
                        name="purchase_offer"
                        value="I have made an offer to purchase"
                        label="I have made an offer to purchase"
                        key="1"
                        register={register}
                    />
                    <QuickRadio
                        id="purchase_offer_2"
                        name="purchase_offer"
                        value="I plan an making an offer soon"
                        label="I plan an making an offer soon"
                        key="2"
                        register={register}
                    />
                    <QuickRadio
                        id="purchase_offer_3"
                        name="purchase_offer"
                        value="I want to get pre approved"
                        label="I want to get pre approved"
                        key="3"
                        register={register}
                    />
                    <QuickRadio
                        id="purchase_offer_4"
                        name="purchase_offer"
                        value="I'm just curious"
                        label="I'm just curious"
                        key="4"
                        register={register}
                    />
                </div>
            }

            {
                (position == 2 || position == 4)
                &&
                <div className="addtional-fund">
                    <p>Looks like your requested amount and total balances are greater than what banks typically offer.</p>
                    <p>We have other solutions to help, complete the request to review your options.</p>
                </div>
            }

            {
                position == 3 &&
                <div className="mortgage-lender">
                   <Controller
                        name="country1"
                        control={control}
                        defaultValue={[]}
                        render={({field}) => (

                            <Autocomplete
                                value={getValues('country1') !== undefined ? getValues('country1') : null }
                                options={banks}
                                getOptionLabel={(option) => option.title}
                                getOptionSelected={(option, value) => option.title === value.title}
                                style={{ width: 100, padding:0 }}
                                renderInput={(params) => 
                                    <TextField 
                                       
                                        variant="outlined"
                                        className="search-sel-text"
                                        error={true}
                                        helperText="Example error"
                                        {...params}
                                    />
                                }
                                className="com-serach-select"
                                onChange={(e, data) => {
                                    setValue("country1", data); // want to set the value for the country 1 form here, but when you log the value its set to 0 and does not update to the selected input
                                }}
                                error={true}
                                helperText="aaaaaaaaaaaa"
                            />

                        )}
                        rules={{required:'Please select this field.'}}
                        
                    />
                    <p>We use this information to estimate any penalties and determine collateral or standard charges if applicable.</p>
                </div>
            }
       </>
   );
}

export default StepFive;