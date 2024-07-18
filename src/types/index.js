import PropTypes from 'prop-types';

const { shape, string, arrayOf, object } = PropTypes;

export const imageType = shape({
  url: string.isRequired,
  fileName: string.isRequired,
});

export const langType = string.isRequired;

// ==========================================================================

export const authorType = shape({
  name: string.isRequired,
  avatar: shape({
    url: string.isRequired,
  }).isRequired,
});

export const pageBodyType = {
  title: string.isRequired,
  body: string.isRequired,
  image: imageType.isRequired,
};

export const pageType = shape({
  slug: string.isRequired,
  title: string.isRequired,
});

export const pagesType = arrayOf(pageType).isRequired;

export const routesType = object.isRequired; // todo improve

// ==========================================================================

export const bannerItemType = shape({
  title: string.isRequired,
  slug: string.isRequired,
  subtitle1: string.isRequired,
  subtitle2: string.isRequired,
  image: imageType.isRequired,
}).isRequired;

export const bannerItemsType = arrayOf(bannerItemType).isRequired;

export const eventType = shape({
  name: string.isRequired,
  shortName: string,
  slug: string.isRequired,
  description: string.isRequired,
  eventDate: string.isRequired,
  textualEventDate: string.isRequired,
  location: string.isRequired,
  program: string,
  packs: string,
  registerForm: string,
  mainImage: imageType,
}).isRequired;

export const eventsType = arrayOf(eventType).isRequired;

export const postType = shape({
  title: string.isRequired,
  slug: string.isRequired,
  category: string.isRequired,
  publishedAt: string.isRequired,
  mainImage: imageType,
  author: authorType.isRequired,
  body: string.isRequired,
});

export const postsType = arrayOf(postType).isRequired;
