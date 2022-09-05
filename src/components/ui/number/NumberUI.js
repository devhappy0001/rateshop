import React from 'react';
import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';

function NumberFormatCustom(props) {

    const { inputRef, onChange,prefix, ...other } = props;
    
   
  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      allowNegative={false}
      isNumericString
      prefix={prefix}
    />
  );
}

export default function NumberUI(props) {

    const {
        id          = '',
        name        = '',
        value       = 0,
        placeholder = "",
        margin      = "normal",
        fullWidth   = true,
        error       = false,
        variant     = 'outlined',
        prefix      = ''
        
    } = props;  

  const [values, setValues] = React.useState({
    [name]: value,
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
   
      <TextField
        name={name}
        id={id}
        value={values[name]}
        placeholder={placeholder}
        margin={margin}
        fullWidth={fullWidth}
        error={error}
        variant={variant}
        onChange  = {handleChange}
        prefix={prefix}
        InputProps={{
          inputComponent: NumberFormatCustom,
          inputProps:{prefix}
        }}
      />
  
  );
}
