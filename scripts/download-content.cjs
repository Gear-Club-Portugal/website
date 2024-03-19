#!/usr/bin/env node

const contentful = require('contentful');
const fs = require('node:fs');

const dataDirectory = './public/data';
const LOCALE_PT = 'pt';
const LOCALE_EN = 'en-US';
const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: process.env.CONTENTFUL_SPACE_ID,
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const fileWritter = ({contentType, content}) => {
    fs.writeFile(
        `${dataDirectory}/${contentType}.json`,
        JSON.stringify(content),
        (err) => err && console.error(err)
    );
}

const handlePagesUpdate = (entries) => {
    const { items } = entries;
    const contentType = 'pages';
    const data = { [contentType]: { [LOCALE_PT]: [], [LOCALE_EN]: [] } };
    
    items.map((item) => {
        const slug = item.fields.slug ? Object.values(item.fields.slug)[0] : "";
        data[contentType][LOCALE_PT].push({
            slug,
            title: item.fields.title[LOCALE_PT]
        })
        data[contentType][LOCALE_EN].push({
            slug,
            title: item.fields.title[LOCALE_EN]
        })
    })
    
    fileWritter({contentType, content: data});
}


client.withAllLocales.getEntries({ content_type: 'page', order: 'fields.order' })
    .then(entries => handlePagesUpdate(entries))
    .catch(error => console.error(error))
    
