import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';

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

EventPreview.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string.isRequired,
    shortName: PropTypes.string,
    slug: PropTypes.string.isRequired,
    eventDate: PropTypes.string.isRequired,
    textualEventDate: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    mainImage: PropTypes.shape({
      fileName: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
    registerForm: PropTypes.string.isRequired,
    program: PropTypes.string.isRequired,
    packs: PropTypes.string.isRequired,
  }),
};

export default EventPreview;
