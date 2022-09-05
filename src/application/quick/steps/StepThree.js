import React from 'react';
import {useFormContext,Controller} from "react-hook-form";
import {TextField} from "@material-ui/core";
import { isValidNumber } from '../../../helpers/helpers';

const StepThree = (props) => {
    const { position,purchasePrice,setPurchasePrice} = props;
    const { control,formState:{errors},register } = useFormContext();
    const purchase_price = register('purchase_price');

    return (
        <>
            <div className="heading">
                {
                    position == 1 && <h4>What's your Puchase Price or Estimated Budget?</h4>
                }

                {
                    (position == 2 || position == 3 || position == 4) && <h4>What is the current property value?</h4>
                }
            </div>
            <div className="quick-com-input">
                <Controller
                    name="purchase_price"
                    control={control}
                    render={({ field }) => (
                        <TextField
                        type="text"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        error={errors.purchase_price ? true : false}
                        helperText={errors.purchase_price && errors.purchase_price.message}
                        {...field}
                        value={purchasePrice}
                        onChange={(e) => {
                            const value = e.target.value.trim();
                            if(isValidNumber(value) && value.length < 10)
                            {
                                setPurchasePrice(value)
                                purchase_price.onChange(e); // react hook form onChange
                            }
                        }}
                        ref={purchase_price.ref}
                        
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
            {
                position == 1 && <p>Any Price Range of the properties you have been looking at. </p>
            }

            {
                (position == 2 || position == 3 || position == 4) && <p>Compare the sales in your neighbourhood using beds, baths and square footage.</p>
            }
        </>
    )
}

export default StepThree;