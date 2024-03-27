import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Separator from '~/components/Separator';

import SiteMap, { PoliciesSiteMap } from './components/SiteMap';
import Contacts from './components/Contacts';
import Newsletter from './components/Newsletter';
import SocialMedia from './components/SocialMedia';

function Footer(props) {
  const { config, routes } = props;

  return (
    <Box>
      <Separator />

      <Box sx={{ textTransform: 'uppercase', mt: '30px' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4} sx={{ pr: { xs: 0, sm: '16px' } }}>
            <SiteMap routes={routes} />
          </Grid>

          <Grid item xs={12} sm={4} sx={{ px: { xs: 0, sm: '16px' } }}>
            {config.contacts && <Contacts contacts={config.contacts} />}

            <Newsletter />
          </Grid>

          <Grid item xs={12} sm={4} sx={{ pl: { xs: 0, sm: '16px' } }}>
            {config.socials && <SocialMedia socials={config.socials} />}
          </Grid>
        </Grid>

        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Separator />
        </Box>

        <Box sx={{ py: '16px', mt: '30px', display: 'flex' }}>
          <Typography sx={{ flexGrow: '1', textAlign: { xs: 'center', sm: 'left' } }}>
            {new Date().getFullYear()} © Gear Club Portugal
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'block', ul: { display: 'flex', margin: 0, gap: '32px' } } }}>
            <PoliciesSiteMap routes={routes} />
          </Box>
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
