import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import BannerHero from '~/containers/BannerHero';
import EventsPreview from '~/containers/EventsPreview';
import BlogPreview from '~/containers/BlogPreview';

import Separator from '~/components/Separator';

function Home(props) {
  const { bannerItems, events, posts, routes } = props;

  return (
    <Box component="main">
      <BannerHero items={bannerItems} />

      <Separator extraSpace />

      <EventsPreview events={events} routes={routes} />

      <Separator extraSpace />

      <BlogPreview posts={posts} routes={routes} />

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
  events: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      eventDate: PropTypes.string.isRequired,
      mainImage: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
      description: PropTypes.string.isRequired,
      registerForm: PropTypes.string.isRequired,
      program: PropTypes.string.isRequired,
      packs: PropTypes.string.isRequired,
    }),
  ).isRequired,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      publishedAt: PropTypes.string.isRequired,
      mainImage: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
      author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.shape({
          url: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
      body: PropTypes.string.isRequired,
    }),
  ).isRequired,
  routes: PropTypes.object.isRequired,
};

export default Home;
