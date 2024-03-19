import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function DestopNavigation(props) {
  const { pages } = props;

  return (
    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
      {pages.map(
        (page) =>
          page.mainMenu && (
            <Button component={Link} key={page.slug} to={`/${page.slug}`} sx={{ color: '#fff' }}>
              {page.title}
            </Button>
          ),
      )}
    </Box>
  );
}

DestopNavigation.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      mainMenu: PropTypes.bool.isRequired,
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default DestopNavigation;
