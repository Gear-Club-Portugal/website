import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { eventsType } from '~/types';

import Separator from '~/components/Separator';

import EventContainer from '~/containers/Event';
import SponsorsContainer from '~/containers/Sponsors';

function Event(props) {
  const { events } = props;
  const { slug } = useParams();
  const event = useMemo(() => events.find((e) => e.slug === slug), [events, slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <Box component="main">
      {event ? (
        <>
          <EventContainer event={event} />

          {event?.sponsors && event.sponsors.length > 0 && (
            <Grid container spacing={4}>
              <Grid item xs={12} sm={4} />

              <Grid item xs={12} sm={8}>
                <Separator extraSpace />

                <SponsorsContainer sponsors={event.sponsors} />
              </Grid>
            </Grid>
          )}
        </>
      ) : (
        <Box />
      )}

      <Separator extraSpace />
    </Box>
  );
}

Event.propTypes = { events: eventsType };

export default Event;
