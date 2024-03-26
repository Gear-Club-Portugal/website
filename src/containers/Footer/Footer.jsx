import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Separator from '~/components/Separator';

import SiteMap from './components/SiteMap';
import Contacts from './components/Contacts';
import Newsletter from './components/Newsletter';
import SocialMedia from './components/SocialMedia';

function Footer(props) {
  const { config, routes } = props;

  return (
    <Box>
      <Separator />

      <Box sx={{ textTransform: 'uppercase', mt: '30px' }}>
        <SiteMap routes={routes} />

        {config.contacts && <Contacts contacts={config.contacts} />}

        <Newsletter />

        {config.socials && <SocialMedia socials={config.socials} />}

        <Box sx={{ p: '16px', mt: '30px' }}>
          <Typography sx={{ textAlign: 'center' }}>{new Date().getFullYear()} © Gear Club Portugal</Typography>
        </Box>
      </Box>
    </Box>
  );
}

Footer.propTypes = {
  config: PropTypes.shape().isRequired,
  routes: PropTypes.object.isRequired,
};

export default Footer;
