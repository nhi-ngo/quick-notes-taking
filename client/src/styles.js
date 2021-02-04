import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    padding: '5px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  heading: {
    color: '#F7C652',
    fontFamily: 'Hachi Maru Pop, cursive',
    marginTop: '-15px',

    [theme.breakpoints.down('md')]: {
      fontSize: '3rem',
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5rem',
    },
  },

  image: {
    marginLeft: '15px',
  },

  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: 'column-reverse',
    },
  },
}));

