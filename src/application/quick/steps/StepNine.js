import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {TextField} from "@material-ui/core";
import { useFormContext,Controller } from 'react-hook-form';
import LockIcon from '@material-ui/icons/Lock';
import Checkbox from '@material-ui/core/Checkbox';
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";

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

const StepNine = (props) => {

    const {control} = useFormContext();

    const handleValidate = (value) => {
        const isValid = isValidPhoneNumber(value);
        return isValid
    }

    return (

        <>
            <div className="heading">
                <h4>Get a Personalized Lowest Rate Guarantee</h4>
                <p>$500 says we'll beat your rate!</p>
            </div>
            <div className="quick-com-input">
                <Controller

                    name="phone_number"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (

                        <TextField
                            id="mobile-number"
                            variant="outlined"
                            placeholder="Mobile Number"
                            fullWidth
                            margin="normal"
                            value={value}
                            onChange={onChange}
                            error={!!error}
                            helperText={error ? error.message : null}
                        />

                    )}
                    rules={{ required: 'This field is required.' }}
                />
            </div>
            <Controller

                    name="phone_numberss"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (

                        <PhoneInput
                            value={value}
                            onChange={onChange}
                            defaultCountry="US"
                            id="phone-input"
                        />

                    )}
                    rules={{ required: 'This field is required.',validate:(value) => handleValidate(value) }}
                />
            <div className="l-r-gurentee">
                <p>😃 We don't Spam, so Look out for Our Special Rate Offer and if you love it, 👏 We're half way there already!👏</p>
                <div className="privacy-agreement">
                    <h5><LockIcon />Consent and Privacy Agreement</h5>
                    <div className="privacy-text">
                        <p>It’s important to get the right details on your mortgage application so we can assess your file better. The information provided by you will be relied upon to be accurate in order for the lenders or any other persons we may submit to on your behalf to determine credit worthiness You agree the information provided is true and complete and that you have not withheld or misrepresented any information.</p>
                        <p>We require your consent to request a credit bureau to review your credit worthiness to determine your suitability to a mortgage product. Your SIN is not required, however helps us accurately request your bureau. You permit us to request a credit bureau, collect, use and maintain personal information for the following purposes: (a) to determine the suitability of the products and services for you (b) to determine your eligibility of the various products and services (c) to establish, manage and offer products and services that meet your needs (d) to provide on-going service and (e) to meet our legal and regulatory requirements.</p>
                        <p>RateShop Inc. and its agents, work exclusively on your behalf, shopping with the same lenders across multiple brokerages can impact the consistency in your application. You authorize RateShop Inc. to act exclusively and irrevocably on your behalf for six months from this application submission date. You agree that an advisor will quote a maximum rate for your mortgage and a onetime market rate reduction may be applicable prior to closing. Upon acceptance of this rate, once a lender commitment has been issued, inability to close the transaction with RateShop Inc and its agents will result in a penalty of $1500.00 payable on closing date.</p>
                        <p>We will continue to work diligently to offer the most competitive rate even after the approval, and match any rate with the same lender, with the same terms and features in either a buydown or cashback resulting in a similar Net Rate, your choice to not proceed with an issued commitment, signed or unsigned after will result in a penalty of $1500.00 payable on closing.</p>
                        <p>We rely on accuracy in information to find you’re the best products. You authorize RateShop Inc. to disclose to or retrieve from any information lender, insurer, insurance agent, financial advisor, credit bureau agencies, past and present employers, creditors and tenants and any transaction related parties.</p>
                        <p>
                            <strong>Canada Anti-Spam Legislation:</strong>
                            I/We authorize Rateshop Inc., affiliated companies and authorized agents to keep in touch with me/us via electronic messaging in order to provide me/us with content and provide insightful information on mortgages, finances, etc. I/We wish to be kept informed and consent to the receiving of these informative electronic communications. I/We understand that I/we can withdraw consent at any time. I/We understand that even if I/We do not provide my/our express consent to receive promotional communications, I/We may still be contacted, if authorized under applicable anti-spam legislation, for example if I/We have recently entered into a transaction with Rateshop Inc. (and therefore, Rateshop Inc. has my/our implied consent) as well as for transactional purposes such as contacts for customer service and/or product or service information, status updates or renewals, reminder notices or answers to my/our questions or inquiries.
                        </p>
                        <p>
                            <strong> Ongoing Commitment:</strong>
                            I/We acknowledge the Rateshop Inc. Privacy Policy is available for review at www.rateshop.ca, and understand that the collection, use and disclosure of my/our personal information by Rateshop Inc. will be done in accordance with such Privacy Policy. I/We agree that a photocopy or electronic copy of this Consent, Privacy & Service Agreement has the same value as the original one.
                        </p>
                    </div>

                    <FormControlLabel

                        control={

                            <Controller
                                name="understand_privacy"
                                value="1"
                                defaultValue={''}
                                control={control}
                                render={({ field: { onChange, value }, fieldState: { error } }) => (

                                    <Checkbox

                                        checked={value == '1' ? true : false}
                                        onChange={onChange} 

                                    />

                                )}
                                rules={{ required: 'This field is required.' }}
                            />
                        }
                        label="I have read and understand the Privacy/Consent/Anti-Spam Agreeme"
                        labelPlacement="end"
                        className="com-check"
                    />

                    <FormControlLabel

                        control={

                            <Controller
                                name="understand_anti_spam"
                                value="1"
                                control={control}
                                defaultValue={''}
                                render={({ field: { onChange, value }, fieldState: { error } }) => (

                                    <Checkbox
                                        checked={value == '1' ? true : false}
                                        onChange={onChange}
                                    />
                                )}
                                rules={{ required: 'This field is required.' }}
                            />
                        }
                        label="I have read and understand the Canada Anti-Spam Legislation section and consent to the communications."
                        labelPlacement="end"
                        className="com-check"
                    />
                </div>
            </div>
        </>
    );
}

export default StepNine;