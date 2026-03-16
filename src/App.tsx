import Header from './components/Header';
import Hero from './components/Hero';
import Achievements from './components/Achievement';
import Projects from './components/Projects';
import Clients from './components/Clients';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Achievements />
      <Projects />
      <Clients />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
