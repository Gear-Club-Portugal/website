const routes = (t, config = {}) => {
  let r = {};

  if (config?.lisbonMeetsFetish?.slug)
    r['lisbonMeetsFetish'] = {
      slug: `events/${config.lisbonMeetsFetish.slug}`,
      title: t('lisbonMeetsFetish'),
    };

  r = {
    ...r,
    home: {
      slug: '',
      title: 'Home',
    },
    events: {
      slug: 'events',
      title: t('events'),
    },
    gcpAwards: {
      slug: 'gcp-awards',
      title: t('gcpAwards'),
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
    privacyPolicy: {
      slug: 'privacy-policy',
      title: t('privacyPolicy'),
    },
    termsOfUse: {
      slug: 'terms-of-use',
      title: t('termsOfUse'),
    },
  };

  return r;
};

export { routes };
