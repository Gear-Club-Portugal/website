import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

import { bannerItemsType, eventsType, langType, postsType, sponsorType, routesType } from '~/types';

import BannerHero from '~/containers/BannerHero';
import EventsPreview from '~/containers/EventsPreview';
import BlogPreview from '~/containers/BlogPreview';
import Sponsors from '~/containers/Sponsors';

import Separator from '~/components/Separator';

function Home(props) {
  const { bannerItems, events, lang, posts, sponsors, routes } = props;

  return (
    <Box component="main">
      <BannerHero items={bannerItems} />

      <Separator extraSpace />

      <EventsPreview events={events} lang={lang} routes={routes} />

      <Separator extraSpace />

      <BlogPreview posts={posts} routes={routes} lang={lang} />

      {sponsors && (
        <>
          <Separator extraSpace />

          <Sponsors sponsors={sponsors} />
        </>
      )}

      <Separator extraSpace />
    </Box>
  );
}

Home.propTypes = {
  bannerItems: bannerItemsType,
  events: eventsType,
  lang: langType,
  posts: postsType,
  sponsors: PropTypes.arrayOf(sponsorType),
  routes: routesType,
};

export default Home;
