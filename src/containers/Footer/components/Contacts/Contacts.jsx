import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ExternalLinkButton from '~/components/ExternalLinkButton';

function Contacts(props) {
  const { contacts } = props;
  const { t } = useTranslation();

  return (
    <Box sx={{ mt: '32px' }}>
      <Typography variant="h5">{t('contacts')}</Typography>

      <Box sx={{ mt: '16px', 'a + a': { mt: '16px' } }}>
        <ExternalLinkButton link={`mailto:${contacts.email}`} text={`Email ${contacts.email}`} />
      </Box>
    </Box>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default Contacts;
