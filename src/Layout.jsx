import { Suspense, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';
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

      <Suspense fallback={<LinearProgress sx={{ position: 'absolute', left: 0, right: 0, top: '80px' }} />}>
        <Outlet />
      </Suspense>

      <Footer routes={routes} />
    </Container>
  );
}

Layout.propTypes = {
  handleLanguageChange: PropTypes.func.isRequired,
  routes: PropTypes.object.isRequired,
};

export default Layout;
