import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import LinkButton from '~/components/LinkButton';

function SocialMedia(props) {
  const { socials } = props;
  const { t } = useTranslation();

  return (
    <Box>
      <Typography variant="h5">{t('socialNetworks')}</Typography>

      <Box sx={{ mt: '16px', 'a + a': { mt: '16px' } }}>
        <LinkButton
          external
          link={`https://instagram.com/${socials.instagram.id}`}
          text={`Instagram @ ${socials.instagram.id}`}
        />

        <LinkButton
          external
          link={`https://facebook.com/${socials.facebook.id}`}
          text={`Facebook @ ${socials.facebook.id}`}
        />

        <LinkButton external link={`https://bsky.app/profile/${socials.bsky.id}`} text={`bsky @ ${socials.bsky.id}`} />
      </Box>
    </Box>
  );
}

SocialMedia.propTypes = {
  socials: PropTypes.shape({
    instagram: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired,
    facebook: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired,
    bsky: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired,
  }).isRequired,
};

export default SocialMedia;
