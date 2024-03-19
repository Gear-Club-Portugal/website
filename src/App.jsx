import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout.jsx';

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
    </div>
  );
}

function App() {
  const [pages, setPages] = useState({ pt: [], 'en-US': [] });

  useEffect(() => {
    fetch('/data/pages.json')
      .then((response) => response.json())
      .then((data) => setPages(data.pages));
  }, []);

  return (
    <Layout pages={pages['pt']}>
      <Routes>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Layout>
  );
}

export default App;
