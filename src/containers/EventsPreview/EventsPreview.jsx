import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { eventsType, routesType } from '~/types';

import useNextEvents from '~/hooks/useNextEvents';

import EventPreview from '~/components/EventPreview';
import LinkButton from '~/components/LinkButton';

function EventsPreview(props) {
  const { events, routes } = props;
  const { t } = useTranslation();
  const previewableEvents = useNextEvents(events, 3);

  return (
    <Box>
      <Typography variant="h3" sx={{ mb: '15px' }}>
        {t('nextEvents')}
      </Typography>

      <Grid container spacing={2}>
        {previewableEvents.map((event) => {
          return (
            <Grid key={event.slug} item xs={12} sm={4}>
              <EventPreview event={event} />
            </Grid>
          );
        })}
      </Grid>

      <Box sx={{ mt: '16px' }}>
        <LinkButton link={routes.events.slug} text={t('moreEvents')} />
      </Box>
    </Box>
  );
}

EventsPreview.propTypes = {
  events: eventsType,
  routes: routesType,
};

export default EventsPreview;
