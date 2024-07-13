import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import EventsPreview from '~/containers/EventsPreview';

function Events(props) {
  const { events, routes } = props;

  return (
    <Box component="main">
      <EventsPreview events={events} routes={routes} />
    </Box>
  );
}

Events.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      eventDate: PropTypes.string.isRequired,
      mainImage: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
  routes: PropTypes.object.isRequired,
};

export default Events;
