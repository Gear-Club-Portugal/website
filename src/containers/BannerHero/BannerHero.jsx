import PropTypes from 'prop-types';
import Carousel from 'react-material-ui-carousel';

import ImageHero from '~/components/ImageHero';

import { bannerItemsType } from '~/types';

const carouselStyles = { width: { xs: '100vw', sm: '100%' }, ml: { xs: 'calc((-100vw + 100%)/2)', sm: '0' } };

function BannerHero(props) {
  const { items, showOverlay } = props;

  return (
    <Carousel indicators={false} navButtonsAlwaysInvisible={false} sx={carouselStyles}>
      {items.map((item) => (
        <ImageHero key={item.slug} item={{ ...item, image: item.image.url }} showOverlay={showOverlay} />
      ))}
    </Carousel>
  );
}

BannerHero.propTypes = { items: bannerItemsType, showOverlay: PropTypes.bool };
BannerHero.defaultProps = { showOverlay: true };

export default BannerHero;
