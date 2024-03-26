const routes = (t) => ({
  home: {
    slug: '',
    title: 'Home',
  },
  lisbonMeetsFetish: {
    slug: 'lisbon-meets-fetish',
    title: t('lisbonMeetsFetish'),
  },
  events: {
    slug: 'events',
    title: t('events'),
  },
  blog: {
    slug: 'blog',
    title: t('blog'),
  },
  members: {
    slug: 'members',
    title: t('members'),
  },
  aboutGcp: {
    slug: 'about-gcp',
    title: t('aboutGcp'),
  },
  contacts: {
    slug: 'contacts',
    title: t('contacts'),
  },
  privacyPolicy: {
    slug: 'privacy-policy',
    title: t('privacyPolicy'),
  },
  termsOfUse: {
    slug: 'terms-of-use',
    title: t('termsOfUse'),
  },
});

export { routes };
