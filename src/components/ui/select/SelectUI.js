import React from 'react';
import './SelectUI.scss';
import {
    Select,
    MenuItem
} from "@material-ui/core";
import classNames from 'classnames';

const SelectUI = (props, ref) => {

    const { id, value, className = [], onChange, items = [] } = props;

    let classes = classNames('select-common-ui', className);

    let menuItems = items.map((item, index) => {

        return (<MenuItem className='select-menuitem' key={item.value} value={item.value}>{item.label}</MenuItem>);
    });

    return (

        <Select

            id={id}
            value={value}
            default
            style={{ width: '100%' }}
            onChange={onChange}
            displayEmpty
            className={classes}
            // variant="standard"
            disableUnderline
            MenuProps={{
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left"
                },
                transformOrigin: {
                    vertical: "top",
                    horizontal: "left"
                },
                getContentAnchorEl: null
            }}
        >
            {menuItems}
        </Select>

    );
};

export default SelectUI;