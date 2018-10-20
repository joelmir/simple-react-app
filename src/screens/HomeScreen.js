import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const HomeScreen = (props) => {
    const { classes } = props; 
    return (
        <div>
            <h2>Home Screen</h2>
            <Button variant="outlined" component={Link} to='/curso' className={classes.button}>
                Go to Curso
            </Button>
        </div>
    );
}

HomeScreen.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeScreen);
