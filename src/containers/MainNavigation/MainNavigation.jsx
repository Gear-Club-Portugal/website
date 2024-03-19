import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

import GCPLogo from '../../components/GCPLogo';
import IconButton from '../../components/IconButton';
import MobileNavigation from './MobileNavigation.jsx';
import DestopNavigation from './DestopNavigation.jsx';

function MainNavigation(props) {
  const { pages } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

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
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      mainMenu: PropTypes.bool.isRequired,
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MainNavigation;
