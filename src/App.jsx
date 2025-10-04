
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import Science from './pages/Science';
import Traditional from './pages/Traditional';
import Tips from './pages/Tips';
import Community from './pages/Community';
import Research from './pages/Research';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/science" element={<Science />} />
          <Route path="/traditional" element={<Traditional />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/community" element={<Community />} />
          <Route path="/research" element={<Research />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
