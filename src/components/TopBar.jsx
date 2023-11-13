import React from 'react';
import {
  AppBar,
  Toolbar,
} from '@mui/material';
import { withStyles } from '@mui/styles'
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import logo from '../res/logoTransparent.png';

const styles = {
  root: {
    backgroundColor: '#1f1f1f',
    display: 'block',
  },
  logo: {
    marginRight: 16,
    cursor: 'pointer',
  },
  toolbar: {
    maxWidth: 1200,
    margin: '0 auto',
    color: 'white',
  },
  navButton: {
    fontFamily: '"Mulish", sans-serif',
    fontWeight: 'bold',
    margin: 8,
    cursor: 'pointer',
    transition: 'all 0.25s ease-out',
    '&:hover': {
      color: '#aaa',
    },
  },
  selectedNavButton: {
    fontFamily: '"Mulish", sans-serif',
    fontWeight: 'bold',
    color: '#2dcaff',
    margin: 8,
    cursor: 'pointer',
    transition: 'all 0.25s ease-out',
    '&:hover': {
      color: '#2298bf',
    },
  },
  grow: {
    flexGrow: 1,
  },
};

const TopBar = ({ classes }) => {
  const navigate = useNavigate();

  const handleNav = route => () => {
    navigate('/' + route);
  };

  const pathName = window.location.pathname;

  return (
    <AppBar
      color="transparent"
      className={classes.root}
      elevation={2}
    >
      <Toolbar className={classes.toolbar}>
        <img
          src={logo}
          alt="Pokerfreunde2018"
          width={80}
          className={classes.logo}
          onClick={handleNav('')}
        />
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
          <span
            className={pathName === '/' ? classes.selectedNavButton : classes.navButton}
            onClick={handleNav('')}
          >
            {"Menu"}
          </span>
          <span
            className={pathName === '/location' ? classes.selectedNavButton : classes.navButton}
            onClick={handleNav('location')}
          >
            {"Location"}
          </span>
          <span
            className={pathName === '/tournaments' ? classes.selectedNavButton : classes.navButton}
            onClick={handleNav('tournaments')}
          >
            {"Turniertermine"}
          </span>
          <span
            className={pathName === '/register' ? classes.selectedNavButton : classes.navButton}
            onClick={handleNav('register')}
          >
            {"Turnieranmeldung"}
          </span>
        </div>
      </Toolbar>
    </AppBar>
  );
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopBar);
