import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import BannerHero from '~/containers/BannerHero';
import Separator from '~/components/Separator';

function Home(props) {
  const { bannerItems } = props;

  return (
    <Box component="main">
      <BannerHero items={bannerItems} />

      <Separator extraSpace />
    </Box>
  );
}

Home.propTypes = {
  bannerItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle1: PropTypes.string.isRequired,
      subtitle2: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Home;
