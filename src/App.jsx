import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import toml from 'toml';

import Layout from './Layout.jsx';
import NotFound from './pages/NotFound/index.js';

import { routes } from './routes.js';

const supportedLanguages = ['pt', 'en'];

function App() {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const [config, setConfig] = useState({});
  const [lang, setLang] = useState('en');

  const localizedPages = routes(t);

  useEffect(() => {
    fetch('/data/config.toml')
      .then((response) => response.text())
      .then((config) => {
        const data = toml.parse(config);
        setConfig(data);
        console.log(data);
      });
  }, []);

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
      <Route
        path="/:lang"
        element={<Layout config={config} handleLanguageChange={handleLanguageValidation} routes={localizedPages} />}
      >
        <Route index element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
