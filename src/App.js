import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home.js';
import NovasAnotacoes from './components/pages/NovasAnotacoes.js';
import Anotacoes from './components/pages/Anotacoes';
import Note from './components/pages/Note.js';
import Container from './components/layout/Container.js';
import Footer from './components/layout/Footer.js';
import Navbar from './components/layout/Navbar.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="minHeight">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/nova-anotacoes' element={<NovasAnotacoes />} />
          <Route path='/anotacoes' element={<Anotacoes />} />
          <Route path='/note/:id' element={<Note />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
