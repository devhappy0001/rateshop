import React from 'react';
import './cardcommon.scss';
import { Button } from "@material-ui/core";

const CardCommon = (props) => {

    const {imageName='',title=null} = props;

    return (
        <div className="compare-wrap">
            {
                title &&  <div className='compare-heading'><h3>{title}</h3></div> 
            }
            <div className='compare-img'>
                <img src={imageName} alt="cmls" />
            </div>
            <div className='compare-price'>
               {props.children}
            </div>
        </div>
    );
}

export default CardCommon;