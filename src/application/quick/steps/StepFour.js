import React from 'react';
import {useFormContext,Controller} from "react-hook-form";
import {TextField} from "@material-ui/core";
import { isValidNumber } from '../../../helpers/helpers';

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

const StepFour = (props) => {
    const { position,purchasePrice,setPurchasePrice,handleNext} = props;
    const {control,register,formState:{errors},setValue,getValues,handleSubmit,watch} = useFormContext();

    const purchase_rate = register('purchase_rate');
    
    const first_mortgage  = watch("first_mortgage");
    const second_mortgage = watch("second_mortgage");
    const line_of_credit  = watch("line_of_credit");

    const total_balance  =  ((first_mortgage  != undefined && first_mortgage  != '') ? parseInt(first_mortgage) : 0)  +
                            ((second_mortgage != undefined && second_mortgage != '') ? parseInt(second_mortgage) : 0) +
                            ((line_of_credit  != undefined && line_of_credit  != '') ? parseInt(line_of_credit) : 0);
                           

    return (
       
        <>
            {
                position == 1
                &&
                <div className="down-payment">
                    And your Down Payment based on your Purchase Price
                    <div className="quick-com-input">

                        <Controller 
                        
                           name="purchase_rate"
                           control={control}
                           render={({field}) => (
                               
                            <TextField
                               
                               variant="outlined"
                               placeholder=""
                               fullWidth
                               margin="normal"
                               error={errors.purchase_rate ? true : false}
                               helperText={errors.purchase_rate && errors.purchase_rate.message}
                               {...field}
                               value={purchasePrice}
                               onChange={(e) => {
                                   
                                    const value = e.target.value;
                                    if(isValidNumber(value) && value.length < 10)
                                    {
                                        setPurchasePrice(value)
                                        setValue('purchase_price',value);
                                        purchase_rate.onChange(e); // react hook form onChange
                                    }
                                }}
                                ref={purchase_rate.ref}
                                
                                />
                            )}
                            rules={{ 
                                required : {value:true, message:'Please fill this field'},
                                pattern  : {value: /^[1-9]\d*(\d+)?$/i,message: 'Please enter an integer'},
                                min      : {value: 1,message: 'Value should be atleast 1'}
                             }}
                        />
                        <span>$</span>
                    </div>
                </div>

            }

            <div className="heading">
                {
                    position == 1 && <h4>Down Payment</h4>
                }

                {
                    (position == 2 || position == 3 || position == 4) && <h4>What's your Current Mortgage Balance?</h4>
                }
            </div>

            {

                position == 1
                &&
                <div className="step-radio-box" onChange={handleSubmit(handleNext)}>
                    <QuickRadio
                        id="purchase_value_5"
                        name="purchase_value"
                        key="1"
                        label={`5% \u00A0 $${(purchasePrice*0.05).toFixed(2)}`}
                        value="5"
                        register={register}
                    />
                    <QuickRadio
                        id="purchase_value_10"
                        name="purchase_value"
                        key="2"
                        label={`10% \u00A0 $${(purchasePrice*0.10).toFixed(2)}`}
                        value="10"
                        register={register}
                    />
                    <QuickRadio
                        id="purchase_value_15"
                        name="purchase_value"
                        key="3"
                        label={`15% \u00A0 $${(purchasePrice*0.15).toFixed(2)}`}
                        value="15"
                        register={register}
                    />
                    <QuickRadio
                        id="purchase_value_20"
                        name="purchase_value"
                        key="4"
                        label={`20% \u00A0 $${(purchasePrice*0.20).toFixed(2)}`}
                        value="20"
                        register={register}
                    />
                </div>
            }

            {
                (position == 2 || position == 3 || position == 4)
                &&
                <div className="mortgage-balance">
                    <div className="mortgage-input">
                        <label>1st Mortgage</label>
                        <div className="quick-com-input">
                            <Controller 
                              name="first_mortgage"
                              control={control}
                              defaultValue=""
                              render={({field:{onChange,value},fieldState:{error}}) => (

                                <TextField
                                    variant="outlined"
                                    placeholder=""
                                    fullWidth
                                    margin="normal"
                                    value={value}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        if(isValidNumber(value) && value.length <= 20){
                                            onChange(e)
                                        }
                                    }}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                />

                              )}
                              rules={{required:'This field is required.'}}
                            />
                            <span>$</span>
                        </div>
                    </div>
                    <div className="mortgage-input">
                        <label>2nd Mortgage</label>
                        <div className="quick-com-input">
                            <Controller 
                              name="second_mortgage"
                              control={control}
                              defaultValue={``}
                              render={({field:{onChange,value},fieldState:{error}}) => (

                                <TextField
                                    variant="outlined"
                                    placeholder=""
                                    fullWidth
                                    margin="normal"
                                    value={value}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        if(isValidNumber(value) && value.length <= 20){
                                            onChange(e)
                                        }
                                    }}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                />

                              )}
                              rules={{required:'This field is required.'}}
                            />
                            <span>$</span>
                        </div>
                    </div>
                    <div className="mortgage-input">
                        <label>Line of Credit</label>
                        <div className="quick-com-input">
                            <Controller 
                                name="line_of_credit"
                                control={control}
                                defaultValue={``}
                                render={({field:{onChange,value},fieldState:{error}}) => (

                                    <TextField
                                        id="line_of_credit"
                                        variant="outlined"
                                        placeholder=""
                                        fullWidth
                                        margin="normal"
                                        value={value}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            if(isValidNumber(value) && value.length <= 20) {
                                                onChange(e)
                                            }
                                        }}
                                        error={!!error}
                                        helperText={error ? error.message : null}

                                    />
                                )}
                                rules={{required:'This field is required.'}}
                            />
                            <span>$</span>
                        </div>
                    </div>
                    <div className="mortgage-input">
                        <label>Your Total Balance</label>
                        <div className="quick-com-input">
                            <Controller 
                              name="total_balance"
                              control={control}
                              defaultValue=""
                              render={({field:{onChange,value},fieldState:{error}}) => (

                                <TextField
                                      variant="outlined"
                                      placeholder=""
                                      fullWidth
                                      //inputProps={{ readOnly: true }}
                                      margin="normal"
                                      onChange={onChange}
                                      value={total_balance !== undefined ? total_balance.toLocaleString() : ''}
                                      error={!!error}
                                      helperText={error ? error.message : null}
                                />

                              )}
                              rules={{required:'This field is required.'}}
                            />
                            <span>$</span>
                        </div>
                    </div>
                </div>

            }
        </>

    );
}

export default StepFour;