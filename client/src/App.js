import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import SignIn from './components/SignIn/SignIn';

const App = () => (
	<BrowserRouter>
		<Container maxWidth='lg'>
			<Navbar />
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/signin' exact component={SignIn} />
			</Switch>
		</Container>
	</BrowserRouter>
);

export default App;
