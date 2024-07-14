import { useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Pagination from '~/components/Pagination';
import EventPreview from '~/components/EventPreview';

import { eventsType, langType } from '~/types';

import useOrderEvents from '~/hooks/useOrderEvents';
import useArrayChunk from '~/hooks/useArrayChunk';

const itemsPerPage = 12;

function EventsGrid(props) {
  const { events, lang } = props;
  const pages = Math.ceil(events.length / itemsPerPage);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = Math.min(Math.max(parseInt(query.get('page') || '1', 10), 1), pages);

  const sortedEvents = useOrderEvents(events, true);
  const pageEvents = useArrayChunk(sortedEvents, itemsPerPage);

  return (
    <Box>
      <Grid container spacing={2} sx={{ mb: '16px' }}>
        {pageEvents[page - 1]?.map((event) => (
          <Grid key={event.slug} item xs={12} sm={4}>
            <EventPreview event={event} lang={lang} />
          </Grid>
        ))}
      </Grid>

      {pages > 1 && <Pagination count={pages} page={page} />}
    </Box>
  );
}

EventsGrid.propTypes = {
  events: eventsType,
  lang: langType,
};

export default EventsGrid;
