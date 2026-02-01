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
  footer: string,
  children: object,
  image: imageType.isRequired,
  links: arrayOf(
    shape({
      text: string.isRequired,
      href: string.isRequired,
    }),
  ),
};

export const pageType = shape({
  slug: string.isRequired,
  title: string.isRequired,
});

export const pagesType = arrayOf(pageType).isRequired;

export const policyPageType = shape({
  name: string.isRequired,
  body: string.isRequired,
});

export const sponsorType = shape({
  name: string.isRequired,
  type: string.isRequired,
  url: string,
  logo: imageType.isRequired,
});

export const sponsorsType = {
  sponsors: arrayOf(sponsorType),
};

export const sponsorsGridType = {
  title: string.isRequired,
  sponsors: arrayOf(shape({ sponsors: sponsorType })).isRequired,
};

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
  description: string,
  eventDate: string.isRequired,
  textualEventDate: string.isRequired,
  location: string.isRequired,
  program: string,
  packs: string,
  registerForm: string,
  mainImage: imageType,
  coverImage: imageType,
  sponsors: arrayOf(sponsorType),
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

export const nominieeType = {
  name: string.isRequired,
  description: string.isRequired,
  logo: imageType.isRequired,
};

export const awardCategoryType = {
  title: string.isRequired,
  subtitle: string.isRequired,
  description: string.isRequired,
  votingForm: string,
  nominiees: arrayOf(shape(nominieeType)),
};

export const awardCategoriesType = {
  categories: arrayOf(shape(awardCategoryType)).isRequired,
};
