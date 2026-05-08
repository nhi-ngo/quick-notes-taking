import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Toolbar, Avatar, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import notes from '../../images/notes.png';
import useStyles from './styles';
import { LOGOUT } from '../../constants/actionTypes';

const Navbar = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const history = useHistory();
	const classes = useStyles();

	const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

	const logout = () => {
		dispatch({ type: LOGOUT });
		history.push('/');
		setUser(null);
	};

	useEffect(() => {
		const token = user?.token;
		if (token) {
			const decodedToken = jwtDecode(token);
			if (decodedToken.exp * 1000 < new Date().getTime()) {
				logout();
			}
		}

		setUser(JSON.parse(localStorage.getItem('profile')));
	}, [location]);

	return (
		<Container maxWidth='lg'>
			<AppBar className={classes.appBar} position='static' color='inherit'>
				<Toolbar className={classes.toolbar}>
					<div className={classes.brandContainer}>
						<Typography component={Link} to='/' className={classes.heading} variant='h2' align='center'>
							Quick Notes
						</Typography>

						<img className={classes.image} src={notes} alt='notes' height='60' />
					</div>

					<div className={classes.grow} />

					{user ? (
						<div className={classes.profile}>
							<Avatar className={classes.purple} alt={user?.userInfo?.name} src={user?.userInfo?.img}>
								{user?.userInfo?.name?.charAt(0)}
							</Avatar>

							<Typography className={classes.userName} variant='h6'>
								{user?.userInfo?.name}
							</Typography>

							<Button variant='contained' color='secondary' onClick={logout}>
								Logout
							</Button>
						</div>
					) : (
						<Button component={Link} to='/signin' variant='contained' color='primary'>
							Sign In
						</Button>
					)}
				</Toolbar>
			</AppBar>
		</Container>
	);
};

export default Navbar;
