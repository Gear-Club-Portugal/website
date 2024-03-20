import { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

import MainNavigation from './containers/MainNavigation';
import Footer from './containers/Footer/index.js';

function Layout(props) {
  const { handleLanguageChange } = props;
  const { lang } = useParams();

  useEffect(() => {
    handleLanguageChange(lang);
  }, [lang]);

  return (
    <Container>
      <MainNavigation />
      <Toolbar sx={{ height: '80px' }} />

      <Outlet />

      <Footer />
    </Container>
  );
}

Layout.propTypes = {
  handleLanguageChange: PropTypes.func.isRequired,
};

export default Layout;
