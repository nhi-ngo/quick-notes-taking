import { makeStyles } from '@material-ui/core/styles';

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
    // height: 0,
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

  title: {
    padding: '16px 16px 0 16px',
  },

  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});
