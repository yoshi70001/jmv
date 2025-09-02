import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import FourNotes from './components/FourNotes';
import Mission from './components/Mission';
import International from './components/International';
import Projects from './components/Projects';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('inicio');

  const renderPage = () => {
    switch (currentPage) {
      case 'inicio':
        return (
          <>
            <Hero />
            <About />
            <FourNotes />
            <Mission />
          </>
        );
      case 'quienes-somos':
        return <About full={true} />;
      case 'notas-distintivas':
        return <FourNotes full={true} />;
      case 'mision':
        return <Mission full={true} />;
      case 'internacional':
        return <International />;
      case 'proyectos':
        return <Projects />;
      case 'noticias':
        return <News />;
      case 'contacto':
        return <Contact />;
      default:
        return (
          <>
            <Hero />
            <About />
            <FourNotes />
            <Mission />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;