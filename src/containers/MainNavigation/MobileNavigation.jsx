import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import LanguageSwitcher from '../../components/LanguageSwitcher';
import Separator from '../../components/Separator';
import TopDrawer from '../../components/TopDrawer';

function MobileNavigation(props) {
  const { handleDrawerToggle, mobileOpen, pages } = props;

  return (
    <nav>
      <TopDrawer handleOnClose={handleDrawerToggle} open={mobileOpen}>
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'left' }}>
          <List>
            {pages.map((page) => (
              <ListItem key={page.slug} disablePadding>
                <ListItemButton component={Link} to={page.slug} sx={{ textAlign: 'left' }}>
                  <ListItemText primary={page.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Box sx={{ mx: '16px' }}>
            <Separator />
          </Box>

          <LanguageSwitcher />
        </Box>
      </TopDrawer>
    </nav>
  );
}

MobileNavigation.propTypes = {
  handleDrawerToggle: PropTypes.func.isRequired,
  mobileOpen: PropTypes.bool.isRequired,
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MobileNavigation;
