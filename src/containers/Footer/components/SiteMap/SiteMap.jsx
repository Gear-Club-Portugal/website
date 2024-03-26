import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const ulStyles = {
  listStyleType: 'none',
  //    margin: 0,
  padding: 0,
};
const linkButtonStyles = { color: '#fff', width: '100%', justifyContent: 'left' };

function SiteMap(props) {
  const { routes } = props;
  const { t } = useTranslation();

  const pages = [
    routes.home,
    routes.lisbonMeetsFetish,
    routes.events,
    routes.blog,
    routes.members,
    routes.aboutGcp,
    routes.contacts,
  ];

  const policyPages = [routes.privacyPolicy, routes.termsOfUse];

  return (
    <Box sx={{ mt: '32px' }}>
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

        <Box component="ul" sx={ulStyles}>
          {policyPages.map((page) => (
            <li key={page.slug}>
              <Button component={Link} to={`/${page.slug}`} sx={linkButtonStyles}>
                {page.title}
              </Button>
            </li>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

SiteMap.propTypes = {
  routes: PropTypes.object.isRequired,
};

export default SiteMap;
