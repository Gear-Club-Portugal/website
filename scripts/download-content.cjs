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

    //    console.log(body.pt);
    //    console.log('\npost', richTextRenderer.documentToHtmlString(body.pt));

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

client.withAllLocales
  .getEntries({ content_type: 'post', order: '-fields.publishedAt' })
  .then((entries) => handlePostsUpdate(entries))
  .catch((error) => console.error(error));
