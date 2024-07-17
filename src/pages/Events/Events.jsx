import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { eventsType, langType } from '~/types';

import EventsGrid from '~/containers/EventsGrid';

import Separator from '~/components/Separator';

function Events(props) {
  const { events, lang } = props;
  const { t } = useTranslation();

  return (
    <Box component="main">
      <Typography variant="h3" sx={{ mb: '15px', mt: '40px' }}>
        {t('events')}
      </Typography>

      <EventsGrid events={events} lang={lang} />

      <Separator extraSpace />
    </Box>
  );
}

Events.propTypes = {
  events: eventsType,
  lang: langType,
};

export default Events;
