import { useState, lazy } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Layout from './Layout.jsx';

const Home = lazy(() => import('./pages/Home'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Event = lazy(() => import('./pages/Event'));
const Events = lazy(() => import('./pages/Events'));
const NotFound = lazy(() => import('./pages/NotFound'));

import { routes } from './routes.js';

import events from './assets/data/events.json';
import posts from './assets/data/posts.json';
import config from './config.toml';
import useOrderEvents from './hooks/useOrderEvents.js';

const supportedLanguages = ['pt', 'en'];

function App() {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const [lang, setLang] = useState('en');

  const currentLisbonMeetsFetish = useOrderEvents(
    events.events[lang]?.filter((e) => e.type === 'Lisbon Meets Fetish'),
    true,
  )[0];
  const localizedPages = routes(t, { lisbonMeetsFetish: currentLisbonMeetsFetish });

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
              lang={lang}
              posts={posts.posts[lang] ?? []}
              routes={localizedPages}
            />
          }
        />

        <Route path={`${localizedPages.blog.slug}/:slug`} element={<BlogPost posts={posts.posts[lang] ?? []} />} />
        <Route path={`${localizedPages.blog.slug}`} element={<Blog posts={posts.posts[lang] ?? []} lang={lang} />} />

        <Route path={`${localizedPages.events.slug}/:slug`} element={<Event events={events.events[lang] ?? []} />} />
        <Route
          path={`${localizedPages.events.slug}`}
          element={<Events events={events.events[lang] ?? []} lang={lang} />}
        />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
