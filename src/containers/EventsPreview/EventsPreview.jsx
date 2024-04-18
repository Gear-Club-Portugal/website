import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import EventPreview from './components/EventPreview';
import ExternalLinkButton from '~/components/ExternalLinkButton';

function EventsPreview(props) {
  const { events, routes } = props;
  const { t } = useTranslation();

  return (
    <Box>
      <Typography variant="h3" sx={{ mb: '15px' }}>
        {t('nextEvents')}
      </Typography>

      <Grid container spacing={2}>
        {events.map((event) => {
          return (
            <Grid key={event.slug} item xs={12} sm={4}>
              <EventPreview event={event} />
            </Grid>
          );
        })}
      </Grid>

      <Box sx={{ mt: '16px' }}>
        <ExternalLinkButton link={routes.events.slug} text={t('moreEvents')} />
      </Box>
    </Box>
  );
}

EventsPreview.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      eventDate: PropTypes.string.isRequired,
      mainImage: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
      description: PropTypes.string.isRequired,
      registerForm: PropTypes.string.isRequired,
      program: PropTypes.string.isRequired,
      packs: PropTypes.string.isRequired,
    }),
  ).isRequired,
  routes: PropTypes.object.isRequired,
};

export default EventsPreview;
