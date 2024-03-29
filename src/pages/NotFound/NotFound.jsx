import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';

function NotFound() {
  const { t } = useTranslation();

  return (
    <Typography variant="h3" sx={{ my: '30px', textAlign: 'center' }}>
      {t('notFound')}
    </Typography>
  );
}

export default NotFound;
