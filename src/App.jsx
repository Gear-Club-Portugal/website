import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Layout from './Layout.jsx';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

import { routes } from './routes.js';
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
        <Route index element={<Home bannerItems={config[lang].banner} />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
