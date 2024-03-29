import { Avatar, Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signin, signup } from '../../actions/auth';
import { AUTH } from '../../constants/actionTypes';
import { auth, provider } from '../../firebase';
import Icon from './icon';
import Input from './Input';
import useStyles from './styles';

const initialState = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
};

const SignIn = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const classes = useStyles();

	const [form, setForm] = useState(initialState);
	const [isSignup, setIsSignup] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const handleShowPassword = () => setShowPassword(!showPassword);

	const switchMode = () => {
		setForm(initialState);
		setIsSignup((prevIsSignup) => !prevIsSignup);
		setShowPassword(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (isSignup) {
			dispatch(signup(form, history));
		} else {
			dispatch(signin(form, history));
		}
	};

	const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

	const signInWithGoogle = async () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				const userData = {
					userInfo: {
						name: result.user.displayName,
						email: result.user.email,
						img: result.user.photoURL,
            googleUserId: result.user.uid
					},
					token: result.user.accessToken,
				};

				dispatch({ type: AUTH, data: userData });
				history.push('/');
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<Container component='main' maxWidth='xs'>
			<Paper className={classes.paper} elevation={3}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>

				<Typography component='h1' variant='h5'>
					{isSignup ? 'Sign up' : 'Sign in'}
				</Typography>

				<form className={classes.form} onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						{isSignup && (
							<>
								<Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half />
								<Input name='lastName' label='Last Name' handleChange={handleChange} half />
							</>
						)}
						<Input name='email' label='Email Address' handleChange={handleChange} type='email' />
						<Input
							name='password'
							label='Password'
							handleChange={handleChange}
							type={showPassword ? 'text' : 'password'}
							handleShowPassword={handleShowPassword}
						/>
					</Grid>

					<Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
						{isSignup ? 'Sign Up' : 'Sign In'}
					</Button>

					<Button
						className={classes.googleButton}
						color='primary'
						fullWidth
						onClick={signInWithGoogle}
						startIcon={<Icon />}
						variant='contained'>
						Google Sign In
					</Button>

					<Grid container justify='flex-end'>
						<Grid item>
							<Button onClick={switchMode}>
								{isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
							</Button>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</Container>
	);
};

export default SignIn;
