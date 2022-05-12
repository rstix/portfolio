import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import Projects from './components/Project.js';
import Post from './components/Post.js';
import NavBar from './components/NavBar.js';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/post" element={<Post/>} />
      </Routes>
    </Router>
  );
}

export default App;
