import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';

function App() {
  return (
    <div className='flex flex-col min-h-screen gap-12 bg-background text-foreground font-poppins'>
      <Header />
      <Home />
      <Projects />
    </div>
  );
}

export default App;
