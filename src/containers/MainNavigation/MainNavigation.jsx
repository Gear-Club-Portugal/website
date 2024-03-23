import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

import GCPLogo from '~/components/GCPLogo';
import IconButton from '~/components/IconButton';
import MobileNavigation from './MobileNavigation.jsx';
import DestopNavigation from './DestopNavigation.jsx';

function MainNavigation(props) {
  const { routes } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const pages = [
    routes.lisbonMeetsFetish,
    routes.events,
    routes.blog,
    routes.members,
    routes.aboutGcp,
    routes.contacts,
  ];

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" color="inherit" sx={{ zIndex: 1300 }}>
        <Toolbar sx={{ height: '80px' }}>
          <GCPLogo />

          <IconButton handleClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>

          <DestopNavigation pages={pages} />
        </Toolbar>
      </AppBar>

      <MobileNavigation handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} pages={pages} />
    </Box>
  );
}

MainNavigation.propTypes = {
  routes: PropTypes.object.isRequired,
};

export default MainNavigation;
