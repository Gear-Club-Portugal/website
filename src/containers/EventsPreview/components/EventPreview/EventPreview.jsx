import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';

import { eventType } from '~/types';

import ImageHero from '~/components/ImageHero';

function EventPreview(props) {
  const { event } = props;

  return (
    <Card sx={{ borderRadius: 0, backgroundColor: '#ffffff', color: '#000000', height: '100%' }}>
      <CardActionArea
        component={Link}
        to={`events/${event.slug}`}
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <ImageHero
          item={{
            title: event.shortName || event.name,
            subtitle1: event.location,
            subtitle2: event.textualEventDate,
            image: event.mainImage.url,
            height: { xs: '200px', sm: '200px' },
          }}
          onHero={false}
        />
      </CardActionArea>
    </Card>
  );
}

EventPreview.propTypes = { event: eventType };

export default EventPreview;
