import PropTypes from 'prop-types';
import Carousel from 'react-material-ui-carousel';

import ImageHero from '~/components/ImageHero';

function BannerHero(props) {
  const { items } = props;

  return (
    <Carousel
      indicators={false}
      navButtonsAlwaysInvisible={false}
      sx={{ width: { xs: '100vw', sm: '100%' }, ml: { xs: 'calc((-100vw + 100%)/2)', sm: '0' } }}
    >
      {items.map((item) => (
        <ImageHero key={item.title} item={item} />
      ))}
    </Carousel>
  );
}

BannerHero.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle1: PropTypes.string.isRequired,
      subtitle2: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BannerHero;
