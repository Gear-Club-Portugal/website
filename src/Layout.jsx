import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

import MainNavigation from './containers/MainNavigation';

function Layout(props) {
  const { children, pages } = props;

  return (
    <Container>
      <MainNavigation pages={pages} />
      <Toolbar sx={{ height: '80px' }} />

      {children}
    </Container>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Layout;
