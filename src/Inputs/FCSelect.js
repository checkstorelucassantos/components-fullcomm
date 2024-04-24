import { FormControl, FormHelperText, MenuItem, Select, Typography } from '@mui/material';
import React from 'react'

const FCSelect = ({
  label,
  fullWidth = false,
  options,
  error = false,
  size = 'small',
  multiple = false,
  helperText,
  sx = {},
  required,
  ...props
}) => {
  return (
    <div style={{ width: fullWidth ? '100%' : 'auto' }}>
      {label && <Typography variant='body2' mb='0.5rem' color={error ? '#d32f2f' : '#000'}>{label}{required && <span style={{ color: '#e74c3c'}}> *</span>}</Typography>}
      <FormControl 
        fullWidth={fullWidth}
      >
        <Select 
          {...props}
          size={size}
          multiple={multiple}
          sx={{
            ...sx,
            '& fieldset': {
              border: `0.5px solid ${error ? '#d32f2f' : '#888888'} !important`,
              boxShadow: '0px 1px 0px 0px #00000040 inset !important',
              borderRadius: '8px !important',
            },
          }}
        >
          {
            options?.map(({value, label, img}) => (
              <MenuItem key={value} value={value}>
                {
                  img && <img src={img} alt={label} style={{ width: "20px", height: "20px", marginRight: '0.5rem' }} />
                }
                {label}
              </MenuItem>
            ))
          }
        </Select>
        {
          helperText && <FormHelperText>{helperText}</FormHelperText>
        }
      </FormControl>
    </div>
  )
}

export default FCSelect