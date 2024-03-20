import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Layout from './Layout.jsx';
import NotFound from './pages/NotFound/index.js';

const supportedLanguages = ['pt', 'en'];

function App() {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const [lang, setLang] = useState('en');

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
      <Route path="/:lang" element={<Layout handleLanguageChange={handleLanguageValidation} />}>
        <Route index element={<h1>GCP</h1>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
