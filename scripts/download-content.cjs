#!/usr/bin/env node

const contentful = require('contentful');
const richTextRenderer = require('@contentful/rich-text-html-renderer');
const fs = require('node:fs');

const dataDirectory = './src/assets/data';
const LOCALE_PT = 'pt';
const CONFLUENT_LOCALE_PT = LOCALE_PT;
const LOCALE_EN = 'en';
const CONFLUENT_LOCALE_EN = 'en-US';
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: process.env.CONTENTFUL_SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const fileWritter = ({ contentType, content }) => {
  fs.writeFile(`${dataDirectory}/${contentType}.json`, JSON.stringify(content), (err) => err && console.error(err));
};

const objectValueOrNull = (object, key) => (typeof object === 'object' ? object[key] : null);

const objectValueImageOrNull = (object) =>
  typeof object === 'object' ? Object.values(Object.values(object)[0].fields.file)[0] : null;

const objectValueRichTextOrNull = (object, key) =>
  typeof object === 'object' ? richTextRenderer.documentToHtmlString(object[key]) : null;

const objectValueLinks = (object, key) =>
  typeof object === 'object'
    ? object[key].map((entry) => {
        const linkRaw = entry.split('@');
        return { text: linkRaw[0], href: linkRaw[1] };
      })
    : [];

const handlePostsUpdate = (entries) => {
  const { items } = entries;
  const contentType = 'posts';
  const data = { [contentType]: { [LOCALE_PT]: [], [LOCALE_EN]: [] } };

  items.map((item) => {
    const { fields } = item;
    const { title, body } = fields;
    const category = Object.values(fields.category)[0].fields.title;
    const slug = Object.values(fields.slug)[0];
    const publishedAt = Object.values(fields.publishedAt)[0];
    const mainImage = Object.values(Object.values(fields.mainImage)[0].fields.file)[0];
    const authorData = Object.values(fields.author)[0].fields;
    const author = {
      name: Object.values(authorData.name)[0],
      avatar: Object.values(Object.values(authorData.avatar)[0].fields.file)[0],
    };

    const itemData = { slug, publishedAt, mainImage, author };

    data[contentType][LOCALE_PT].push({
      ...itemData,
      title: title[CONFLUENT_LOCALE_PT],
      body: richTextRenderer.documentToHtmlString(body[CONFLUENT_LOCALE_PT]),
      category: category[CONFLUENT_LOCALE_PT],
    });
    data[contentType][LOCALE_EN].push({
      ...itemData,
      title: title[CONFLUENT_LOCALE_EN],
      body: richTextRenderer.documentToHtmlString(body[CONFLUENT_LOCALE_EN]),
      category: category[CONFLUENT_LOCALE_EN],
    });
  });

  fileWritter({ contentType, content: data });
};

const handleEnventsUpdate = (entries) => {
  const { items } = entries;
  const contentType = 'events';
  const data = { [contentType]: { [LOCALE_PT]: [], [LOCALE_EN]: [] } };

  items.map((item) => {
    const { fields } = item;
    const { name, shortName, textualEventDate, location, description, program, packs } = fields;
    const slug = Object.values(fields.slug)[0];
    const type = Object.values(fields.type)[0];
    const eventDate = Object.values(fields.eventDate)[0];
    const mainImage = Object.values(Object.values(fields.mainImage)[0].fields.file)[0];
    const registerForm = Object.values(fields.registerForm || {})[0];

    const sponsorsRaw = Object.values(fields.sponsors || {}).flat();
    const sponsors = sponsorsRaw.map((s) => ({
      name: Object.values(s.fields.name)[0],
      type: Object.values(s.fields.type)[0],
      logo: Object.values(Object.values(s.fields.logo)[0].fields.file)[0],
    }));

    const itemData = { slug, type, eventDate, mainImage, registerForm, sponsors };

    data[contentType][LOCALE_PT].push({
      ...itemData,
      name: name[CONFLUENT_LOCALE_PT],
      shortName: objectValueOrNull(shortName, CONFLUENT_LOCALE_PT),
      textualEventDate: objectValueOrNull(textualEventDate, CONFLUENT_LOCALE_PT),
      location: objectValueOrNull(location, CONFLUENT_LOCALE_PT),
      description: objectValueRichTextOrNull(description, CONFLUENT_LOCALE_PT),
      program: objectValueRichTextOrNull(program, CONFLUENT_LOCALE_PT),
      packs: objectValueRichTextOrNull(packs, CONFLUENT_LOCALE_PT),
    });
    data[contentType][LOCALE_EN].push({
      ...itemData,
      name: name[CONFLUENT_LOCALE_EN],
      shortName: objectValueOrNull(shortName, CONFLUENT_LOCALE_EN),
      textualEventDate: objectValueOrNull(textualEventDate, CONFLUENT_LOCALE_EN),
      location: objectValueOrNull(location, CONFLUENT_LOCALE_EN),
      description: objectValueRichTextOrNull(description, CONFLUENT_LOCALE_EN),
      program: objectValueRichTextOrNull(program, CONFLUENT_LOCALE_EN),
      packs: objectValueRichTextOrNull(packs, CONFLUENT_LOCALE_EN),
    });
  });

  fileWritter({ contentType, content: data });
};

const handleBannersUpdate = (entries) => {
  const { items } = entries;
  const contentType = 'banners';
  const data = { [contentType]: { [LOCALE_PT]: [], [LOCALE_EN]: [] } };

  items.map((item) => {
    const { fields } = item;
    const { title, subtitle1, subtitle2 } = fields;
    const slug = Object.values(fields.slug)[0];
    const image = Object.values(Object.values(fields.image)[0].fields.file)[0];

    const itemData = { slug, image };

    data[contentType][LOCALE_PT].push({
      ...itemData,
      title: title[CONFLUENT_LOCALE_PT],
      subtitle1: subtitle1[CONFLUENT_LOCALE_PT],
      subtitle2: subtitle2[CONFLUENT_LOCALE_PT],
    });
    data[contentType][LOCALE_EN].push({
      ...itemData,
      title: title[CONFLUENT_LOCALE_EN],
      subtitle1: subtitle1[CONFLUENT_LOCALE_EN],
      subtitle2: subtitle2[CONFLUENT_LOCALE_EN],
    });
  });

  fileWritter({ contentType, content: data });
};

const handlePagesUpdate = (entries) => {
  const { items } = entries;
  const contentType = 'pages';
  const data = { [contentType]: { [LOCALE_PT]: [], [LOCALE_EN]: [] } };

  items.map((item) => {
    const { fields } = item;
    const { name, body, links } = fields;
    const slug = Object.values(fields.slug)[0];
    const mainImage = objectValueImageOrNull(fields.mainImage);

    const itemData = { slug, mainImage };

    data[contentType][LOCALE_PT].push({
      ...itemData,
      name: name[CONFLUENT_LOCALE_PT],
      body: richTextRenderer.documentToHtmlString(body[CONFLUENT_LOCALE_PT]),
      links: objectValueLinks(links, CONFLUENT_LOCALE_PT),
    });
    data[contentType][LOCALE_EN].push({
      ...itemData,
      name: name[CONFLUENT_LOCALE_EN],
      body: richTextRenderer.documentToHtmlString(body[CONFLUENT_LOCALE_EN]),
      links: objectValueLinks(links, CONFLUENT_LOCALE_EN),
    });
  });

  fileWritter({ contentType, content: data });
};

const handleAwardsUpdate = (entries) => {
  const { items } = entries;
  const contentType = 'awards';
  const data = { [contentType]: { [LOCALE_PT]: [], [LOCALE_EN]: [] } };

  items.map((item) => {
    const { fields } = item;
    const { title, subtitle, description } = fields;
    const votingForm = Object.values(fields?.votingForm || {})[0];

    const nominiesRaw = Object.values(fields.nominies || {}).flat();
    const nominies = nominiesRaw.map((s) => ({
      name: Object.values(s.fields.name)[0],
      description: s.fields.description,
      logo: Object.values(Object.values(s.fields.logo)[0].fields.file)[0],
    }));

    const itemData = { votingForm };

    data[contentType][LOCALE_PT].push({
      ...itemData,
      title: title[CONFLUENT_LOCALE_PT],
      subtitle: subtitle[CONFLUENT_LOCALE_PT],
      description: description[CONFLUENT_LOCALE_PT],
      nominies: nominies.map((nominie) => ({ ...nominie, description: nominie.description[CONFLUENT_LOCALE_PT] })),
    });
    data[contentType][LOCALE_EN].push({
      ...itemData,
      title: title[CONFLUENT_LOCALE_EN],
      subtitle: subtitle[CONFLUENT_LOCALE_EN],
      description: description[CONFLUENT_LOCALE_EN],
      nominies: nominies.map((nominie) => ({ ...nominie, description: nominie.description[CONFLUENT_LOCALE_EN] })),
    });
  });

  fileWritter({ contentType, content: data });
};

client.withAllLocales
  .getEntries({ content_type: 'post', order: '-fields.publishedAt' })
  .then((entries) => handlePostsUpdate(entries))
  .catch((error) => console.error(error));

client.withAllLocales
  .getEntries({ content_type: 'event', order: '-fields.eventDate' })
  .then((entries) => handleEnventsUpdate(entries))
  .catch((error) => console.error(error));

client.withAllLocales
  .getEntries({ content_type: 'banner' })
  .then((entries) => handleBannersUpdate(entries))
  .catch((error) => console.error(error));

client.withAllLocales
  .getEntries({ content_type: 'page' })
  .then((entries) => handlePagesUpdate(entries))
  .catch((error) => console.error(error));

client.withAllLocales
  .getEntries({ content_type: 'award', order: 'fields.order' })
  .then((entries) => handleAwardsUpdate(entries))
  .catch((error) => console.error(error));
