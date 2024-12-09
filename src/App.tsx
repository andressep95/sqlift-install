import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Documentation from './pages/Documentation';
import Installation from './pages/Installation';
import Configuration from './pages/Configuration';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Documentation />} />
          <Route path="/docs/installation" element={<Installation />} />
          <Route path="/docs/configuration" element={<Configuration />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;