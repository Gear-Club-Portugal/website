import Box from '@mui/material/Box';

import { eventsType, routesType } from '~/types';

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
  events: eventsType,
  routes: routesType,
};

export default Events;
