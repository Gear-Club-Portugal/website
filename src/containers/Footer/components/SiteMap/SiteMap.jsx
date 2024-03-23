import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function SiteMap(props) {
  const { routes } = props;
  const { t } = useTranslation();

  const pages = [
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

      <Box sx={{ mt: '16px', 'a + a': { mt: '16px' } }}></Box>
    </Box>
  );
}

SiteMap.propTypes = {
  routes: PropTypes.object.isRequired,
};

export default SiteMap;
