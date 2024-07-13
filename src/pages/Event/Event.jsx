import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

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

Event.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      packs: PropTypes.string,
      program: PropTypes.string,
      eventDate: PropTypes.string.isRequired,
      textualEventDate: PropTypes.string.isRequired,
      mainImage: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
      location: PropTypes.string.isRequired,
      registerForm: PropTypes.string,
    }),
  ).isRequired,
};

export default Event;
