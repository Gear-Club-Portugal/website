import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import TopDrawer from '../../components/TopDrawer';

function MobileNavigation(props) {
  const { handleDrawerToggle, mobileOpen, pages } = props;

  return (
    <nav>
      <TopDrawer handleOnClose={handleDrawerToggle} open={mobileOpen}>
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <List>
            {pages.map(
              (page) =>
                page.slug && (
                  <ListItem key={page.slug} disablePadding>
                    <ListItemButton component={Link} to={page.slug} sx={{ textAlign: 'center' }}>
                      <ListItemText primary={page.title} />
                    </ListItemButton>
                  </ListItem>
                ),
            )}
          </List>
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
