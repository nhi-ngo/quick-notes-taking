import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, Box } from '@mui/material';
import { useDispatch } from 'react-redux';

import { getPosts } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';

const Home = () => {
	const [currentId, setCurrentId] = useState(0);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
	}, [currentId, dispatch]);

	return (
		<Grow in>
			<Container maxWidth='lg'>
				<Box
					sx={{
						display: 'flex',
						gap: 4,
						alignItems: 'flex-start',

						// responsive
						flexDirection: {
							xs: 'column',
							md: 'row',
						},
					}}
				>
					{/* FORM */}
					<Box
						sx={{
							width: {
								xs: '100%',
								md: 300,
							},

							order: {
								xs: 1,
								md: 2,
							},

							position: {
								xs: 'static',
								md: 'sticky',
							},

							top: 20,
						}}
					>
						<Form currentId={currentId} setCurrentId={setCurrentId} />
					</Box>

					{/* POSTS */}
					<Box
						sx={{
							flex: 1,

							order: {
								xs: 2,
								md: 1,
							},

							width: '100%',
						}}
					>
						<Posts setCurrentId={setCurrentId} />
					</Box>
				</Box>
			</Container>
		</Grow>
	);
};

export default Home;
