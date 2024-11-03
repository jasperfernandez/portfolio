import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className='flex flex-col min-h-screen gap-12 bg-gray-100 text-foreground font-poppins'>
      <Header />
      <Home />
    </div>
  );
}

export default App;
