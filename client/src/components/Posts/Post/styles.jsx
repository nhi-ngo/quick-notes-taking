import { makeStyles } from '@mui/styles';

export default makeStyles({
	card: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		borderRadius: '15px',
		height: '100%',
		position: 'relative',
	},

	media: {
		height: 0,
		paddingTop: '56.5%',
		backgroundColor: 'rgba(0, 0, 0, 0.4)',
		backgroundBlendMode: 'darken',
	},

	overlay1: {
		position: 'absolute',
		top: '20px',
		left: '20px',
		color: 'white',
	},

	overlay2: {
		position: 'absolute',
		top: '20px',
		right: '20px',
		color: 'white',
	},

	cardActions: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
});
