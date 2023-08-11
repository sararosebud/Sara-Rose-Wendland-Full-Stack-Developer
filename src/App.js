import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Header from './Components/Header';
import Footer from './Components/Footer'


function App() {
  return (
    <Container>
    
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/resume" element={<Resume />}/>
          <Route path="/contact" element={<Contact />}/>
          
        </Routes>
        <Footer />
      </Router>

    </Container>
    
  );
}


export default App;
