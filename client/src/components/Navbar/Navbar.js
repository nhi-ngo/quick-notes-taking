import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
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
		history.push('/signin');
		setUser(null);
	};

	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem('profile')));
	}, [location]);

	return (
		<Container maxWidth='lg'>
			<AppBar className={classes.appBar} position='static' color='inherit'>
				<div className={classes.brandContainer}>
					<Typography component={Link} to='/' className={classes.heading} variant='h2' align='center'>
						Quick Notes
					</Typography>

					<img className={classes.image} src={notes} alt='notes' height='60' />
				</div>

				<Toolbar className={classes.toolbar}>
					{user ? (
						<div className={classes.profile}>
							<Avatar className={classes.purple} alt={user?.userInfo?.name} src={user?.userInfo?.image}>
								{user?.name?.charAt(0)}
							</Avatar>
							<Typography className={classes.userName} variant='h6'>
								{user?.userInfo?.name}
							</Typography>
							<Button variant='contained' className={classes.logout} color='secondary' onClick={logout}>
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
