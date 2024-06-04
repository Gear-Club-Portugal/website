import { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

import MainNavigation from './containers/MainNavigation';
import Footer from './containers/Footer/index.js';

function Layout(props) {
  const { handleLanguageChange, routes } = props;
  const { lang } = useParams();

  useEffect(() => {
    handleLanguageChange(lang);
  }, [lang]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Container>
      <MainNavigation lang={lang} routes={routes} />
      <Toolbar sx={{ height: '80px' }} />

      <Outlet />

      <Footer routes={routes} />
    </Container>
  );
}

Layout.propTypes = {
  handleLanguageChange: PropTypes.func.isRequired,
  routes: PropTypes.object.isRequired,
};

export default Layout;
