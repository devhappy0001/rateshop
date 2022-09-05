import React,{useState} from 'react';
import { useFormContext,Controller } from 'react-hook-form';
import {TextField} from "@material-ui/core";
import SelectUI from "../../../components/ui/select/SelectUI";

const StepEight = (props) => {

    const {register,control} = useFormContext();
    const [province, setProvince] = useState('');

    const provinceHandler = (e) => {
        setProvince(e.target.value);
    }

    return (

        <>
          <div className="heading">
                <h4>Let's check out your Offers!</h4>
                <p>Please Confirm Your Identity</p>
            </div>
            <div className="checkout-offer-form">
                <div className="quick-com-input">
                    <Controller 
                      
                       name="first_name"
                       control={control}
                       defaultValue=""
                       render={({field:{onChange,value},fieldState:{error}}) => (

                           <TextField
                               id="first-name"
                               variant="outlined"
                               placeholder="Full Name"
                               fullWidth
                               margin="normal"
                               value={value}
                               onChange={onChange}
                               error={!!error}
                               helperText={error ? error.message : null}
                           />
                         
                       )}
                       rules={{

                            required  : {value:true,message:'Please fill this field.'},
                            pattern   : {value:/^[A-Za-z -]+$/,message:'Only allow alphabets'},
                            minLength : {value:2,message:'Minimun length should be greater than 2'},
                            maxLength : {value:100,message:'Maximum length should be less than 100'}
                       }}
                    />

                    <Controller 
                       
                       name="email"
                       control={control}
                       defaultValue=""
                       render={({field:{onChange,value},fieldState:{error}}) => (

                           <TextField
                               id="email"
                               variant="outlined"
                               placeholder="Email Address"
                               fullWidth
                               margin="normal"
                               value={value}
                               onChange={onChange}
                               error={!!error}
                               helperText={error ? error.message : null}
                           />

                       )}
                       rules={{
                                required :'Please fill this field',
                                pattern  : {value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message: "Invalid email address"},
                                minLength: {value:5,message:'Minimun length should be greater than 5'},
                                maxLength: {value:250,message:'Maximum length should be less than 250'}
                            }}
                    />
                    <SelectUI
                        labelId="label"
                        id="select"
                        default
                        style={{ width: '100%' }}
                        value={province}
                        onChange={provinceHandler}
                        displayEmpty
                        className="province-select"
                        items={[{ label: 'Province', value: '', disabled: true }, { label: 'india', value: 'India' }]}
                    >

                    </SelectUI>
                </div>
            </div>
        </>
    );
}

export default StepEight;