import { makeStyles } from '@material-ui/core/styles';

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
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '10px',
    marginRight: '10px',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: 'column-reverse',
    },
  },
}));

