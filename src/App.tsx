import Header from './components/Header';
import Hero from './components/Hero';
import Achievements from './components/Achievement';
import Projects from './components/Projects';
import Clients from './components/Clients';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 relative">
      {/* Dekorasi Background Modern */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-200/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-cyan-200/20 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10">
        <Header />
        <Hero />
        <Achievements />
        <Projects />
        <Clients />
        <Community />
        <Footer />
      </div>
    </div>
  );
}

export default App;
