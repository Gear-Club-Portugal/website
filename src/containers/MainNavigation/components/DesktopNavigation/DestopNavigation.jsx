import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';

import LanguageIcon from '@mui/icons-material/Language';

import LanguageSwitcher from '~/components/LanguageSwitcher';

const langSwitcherStyles = { borderRadius: '2px', border: '1px solid #ffffff', ml: '8px', textTransform: 'uppercase' };

function DestopNavigation(props) {
  const { lang, pages } = props;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
      {pages.map((page) => (
        <Button component={Link} key={page.slug} to={page.slug} sx={{ color: '#fff' }}>
          {page.title}
        </Button>
      ))}

      <Box sx={{ display: 'inline' }}>
        <Button
          variant="outlined"
          size="small"
          color="inherit"
          aria-label="language switcher"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          startIcon={<LanguageIcon />}
          onClick={handleMenu}
          sx={langSwitcherStyles}
        >
          {lang}
        </Button>

        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <LanguageSwitcher handleClose={handleClose} />
        </Menu>
      </Box>
    </Box>
  );
}

DestopNavigation.propTypes = {
  lang: PropTypes.string.isRequired,
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default DestopNavigation;
