import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';

import { eventsType } from '~/types';

import Separator from '~/components/Separator';

import EventContainer from '~/containers/Event';

function Event(props) {
  const { events } = props;
  const { slug } = useParams();
  const [event, setEvent] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
    setEvent(events.find((e) => e.slug === slug));
  }, [events, slug]);

  return (
    <Box component="main">
      {event ? <EventContainer event={event} /> : <Box />}

      <Separator extraSpace />
    </Box>
  );
}

Event.propTypes = { events: eventsType };

export default Event;
