import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { routesType } from '~/types';

const ulStyles = {
  listStyleType: 'none',
  padding: 0,
};
const linkButtonStyles = { color: '#fff', width: '100%', justifyContent: 'left' };

function PoliciesSiteMap(props) {
  const { routes } = props;

  const pages = [routes.privacyPolicy, routes.termsOfUse];

  return (
    <Box component="ul" sx={ulStyles}>
      {pages.map((page) => (
        <li key={page.slug}>
          <Button component={Link} to={page.slug} sx={linkButtonStyles}>
            {page.title}
          </Button>
        </li>
      ))}
    </Box>
  );
}

PoliciesSiteMap.propTypes = { routes: routesType };

function SiteMap(props) {
  const { routes } = props;
  const { t } = useTranslation();

  const pages = [
    routes.home,
    routes.lisbonMeetsFetish,
    routes.gcpAwards,
    routes.events,
    routes.blog,
    routes.members,
    routes.aboutGcp,
  ].filter((p) => p);

  return (
    <Box>
      <Typography variant="h5">{t('siteMap')}</Typography>

      <Box sx={{ mt: '16px', a: { p: 0 } }}>
        <Box component="ul" sx={ulStyles}>
          {pages.map((page) => (
            <li key={page.slug}>
              <Button component={Link} to={page.slug} sx={linkButtonStyles}>
                {page.title}
              </Button>
            </li>
          ))}
        </Box>

        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          <PoliciesSiteMap routes={routes} />
        </Box>
      </Box>
    </Box>
  );
}

SiteMap.propTypes = { routes: routesType };

export { PoliciesSiteMap };
export default SiteMap;
