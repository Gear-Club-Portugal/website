import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ExternalLinkButton from '~/components/ExternalLinkButton';

function SocialMedia(props) {
  const { socials } = props;
  const { t } = useTranslation();

  return (
    <Box sx={{ mt: '32px' }}>
      <Typography variant="h5">{t('socialNetworks')}</Typography>

      <Box sx={{ mt: '16px', 'a + a': { mt: '16px' } }}>
        <ExternalLinkButton
          link={`https://instagram.com/${socials.instagram.id}`}
          text={`Instagram @ ${socials.instagram.id}`}
        />

        <ExternalLinkButton
          link={`https://facebook.com/${socials.facebook.id}`}
          text={`Facebook @ ${socials.facebook.id}`}
        />

        <ExternalLinkButton link={`https://x.com/${socials.x.id}`} text={`X @ ${socials.x.id}`} />
      </Box>
    </Box>
  );
}

SocialMedia.propTypes = {
  socials: PropTypes.shape({
    instagram: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired,
    facebook: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired,
    x: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired,
  }).isRequired,
};

export default SocialMedia;
