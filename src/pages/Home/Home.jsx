import Box from '@mui/material/Box';

import { bannerItemsType, eventsType, langType, postsType, routesType } from '~/types';

import BannerHero from '~/containers/BannerHero';
import EventsPreview from '~/containers/EventsPreview';
import BlogPreview from '~/containers/BlogPreview';

import Separator from '~/components/Separator';

function Home(props) {
  const { bannerItems, events, lang, posts, routes } = props;

  return (
    <Box component="main">
      <BannerHero items={bannerItems} />

      <Separator extraSpace />

      <EventsPreview events={events} lang={lang} routes={routes} />

      <Separator extraSpace />

      <BlogPreview posts={posts} routes={routes} />

      <Separator extraSpace />
    </Box>
  );
}

Home.propTypes = {
  bannerItems: bannerItemsType,
  events: eventsType,
  lang: langType,
  posts: postsType,
  routes: routesType,
};

export default Home;
