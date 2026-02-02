import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import ImpactPage from './pages/ImpactPage';
import GetInvolvedPage from './pages/GetInvolvedPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import DonatePage from './pages/DonatePage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/get-involved" element={<GetInvolvedPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/donation" element={<DonatePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;