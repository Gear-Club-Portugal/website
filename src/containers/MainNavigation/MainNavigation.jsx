import React from 'react';
import { useTranslation } from 'react-i18next';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

import GCPLogo from '../../components/GCPLogo';
import IconButton from '../../components/IconButton';
import MobileNavigation from './MobileNavigation.jsx';
import DestopNavigation from './DestopNavigation.jsx';

function MainNavigation() {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const pages = [
    { slug: 'lisbon-meets-fetish', title: t('lisbonMeetsFetish') },
    { slug: 'events', title: t('events') },
    { slug: 'blog', title: t('blog') },
    { slug: 'members', title: t('members') },
    { slug: 'about-gcp', title: t('aboutGcp') },
    { slug: 'contacts', title: t('contacts') },
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

export default MainNavigation;
