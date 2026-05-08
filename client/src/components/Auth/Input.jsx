import React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Input = ({ name, handleChange, label, autoFocus, type, handleShowPassword }) => (
	<TextField
		name={name}
		onChange={handleChange}
		variant='outlined'
		required
		fullWidth
		label={label}
		autoFocus={autoFocus}
		type={type}
		slotProps={{
			input: {
				endAdornment: name === 'password' && (
					<InputAdornment>
						<IconButton onClick={handleShowPassword} edge='end' aria-label='toggle password visibility'>
							{type === 'password' ? <VisibilityOff /> : <Visibility />}
						</IconButton>
					</InputAdornment>
				),
			},
		}}
	/>
);

export default Input;
