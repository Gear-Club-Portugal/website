import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Layout from './Layout.jsx';

import Home from './pages/Home';
import Post from './pages/Post';
import Event from './pages/Event';
import NotFound from './pages/NotFound';

import { routes } from './routes.js';

import events from './assets/data/events.json';
import posts from './assets/data/posts.json';
import config from './config.toml';

const supportedLanguages = ['pt', 'en'];

function App() {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const [lang, setLang] = useState('en');

  const localizedPages = routes(t);

  const handleLanguageValidation = (slug) => {
    if (supportedLanguages.includes(slug)) {
      setLang(slug);
      i18n.changeLanguage(slug).then();
      document.documentElement.lang = slug;
    } else {
      navigate('/en');
    }
  };

  return (
    <Routes>
      <Route path="/:lang" element={<Layout handleLanguageChange={handleLanguageValidation} routes={localizedPages} />}>
        <Route
          index
          element={
            <Home
              bannerItems={config[lang].banner}
              events={events.events[lang] ?? []}
              posts={posts.posts[lang] ?? []}
              routes={localizedPages}
            />
          }
        />

        <Route path={`${localizedPages.blog.slug}/:slug`} element={<Post posts={posts.posts[lang] ?? []} />} />

        <Route path={`${localizedPages.events.slug}/:slug`} element={<Event />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
