import { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

import MainNavigation from './containers/MainNavigation';
import Footer from './containers/Footer/index.js';

function Layout(props) {
  const { config, handleLanguageChange, routes } = props;
  const { lang } = useParams();

  useEffect(() => {
    handleLanguageChange(lang);
  }, [lang]);

  return (
    <Container>
      <MainNavigation routes={routes} />
      <Toolbar sx={{ height: '80px' }} />

      <Outlet />

      <Footer config={config} routes={routes} />
    </Container>
  );
}

Layout.propTypes = {
  config: PropTypes.shape().isRequired,
  handleLanguageChange: PropTypes.func.isRequired,
  routes: PropTypes.object.isRequired,
};

export default Layout;
