import './App.css';
import Footer from './components/footer/Footer';
import HeroSection from './components/herosection/HeroSection';
import AboutMe from './components/main/AboutMe';
import Experience from './components/main/Experience';
import Projects from './components/main/Projects';
// import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Experience />
      <Projects />
      {/* <Main /> */}
      <Footer />
    </div>
  );
}

export default App;
