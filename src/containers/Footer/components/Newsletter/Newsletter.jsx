import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ExternalLinkButton from '~/components/ExternalLinkButton';

function Newsletter() {
  const { t } = useTranslation();

  return (
    <Box sx={{ mt: '32px' }}>
      <Typography variant="h5">{t('newsletter')}</Typography>

      <Box sx={{ mt: '16px', 'a + a': { mt: '16px' } }}>
        <ExternalLinkButton link="#" text="Form : embeded" />
      </Box>
    </Box>
  );
}

export default Newsletter;
