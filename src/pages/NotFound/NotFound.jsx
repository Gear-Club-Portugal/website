import { useTranslation } from 'react-i18next';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Separator from '~/components/Separator';

function NotFound() {
  const { t } = useTranslation();

  return (
    <Box>
      <Typography variant="h3" sx={{ my: '30px', textAlign: 'center' }}>
        {t('notFound')}
      </Typography>

      <Separator />
    </Box>
  );
}

export default NotFound;
