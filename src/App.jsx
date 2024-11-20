import Home from './components/Home';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Education from './components/Education';

function App() {
  return (
    <div className='flex flex-col min-h-screen gap-12 bg-background text-foreground font-poppins'>
      <Home id='home' />
      <Projects id='projects' />
      <Skills id='skills' />
      <Education id='education' />
      <Contact id='contact' />
      <Footer />
    </div>
  );
}

export default App;
