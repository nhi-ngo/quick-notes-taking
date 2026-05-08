import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
	appBar: {
		borderRadius: 15,
		margin: '30px 0',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '10px 50px',
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		width: '100%',
	},
	brandContainer: {
		display: 'flex',
		alignItems: 'center',
	},
	heading: {
		color: '#F7C652',
		marginTop: '-15px',
		textDecoration: 'none',
	},
	image: {
		marginLeft: '15px',
	},

	grow: {
		flexGrow: 1,
	},

	profile: {
		display: 'flex',
		alignItems: 'center',
		gap: '12px',
	},
	userName: {
		display: 'flex',
		alignItems: 'center',
		marginLeft: '10px',
		marginRight: '10px',
	},
}));
