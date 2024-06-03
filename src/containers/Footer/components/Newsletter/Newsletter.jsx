import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import useScript from '~/hooks/useScript.js';

function Newsletter(props) {
  const { newsletter } = props;
  const { t } = useTranslation();

  useScript(newsletter.embebedHelperScript);

  return (
    <Box sx={{ mt: '32px' }}>
      <Typography variant="h5">{t('newsletter')}</Typography>

      <iframe
        title="newsletter-registration-form"
        data-w-type="embedded"
        src={newsletter.formUrl}
        sandbox="allow-scripts"
        loading="lazy"
        width="100%"
        style={{ height: 0, border: 0, overflow: 'hidden' }}
      />
    </Box>
  );
}

Newsletter.propTypes = {
  newsletter: PropTypes.shape({
    formUrl: PropTypes.string.isRequired,
    embebedHelperScript: PropTypes.string.isRequired,
  }).isRequired,
};

export default Newsletter;
