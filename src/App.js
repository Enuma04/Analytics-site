import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/home';
import Footer from './components/Footer';

function App() {
  const [lang, setLang] = useState('en');

  return (
    <Router>
      <Header lang={lang} setLang={setLang} />
      <Routes>
        <Route path="/" element={<Home lang={lang} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
