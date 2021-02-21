import './App.scss';
import About from './components/About/About';
import Bamboo from './components/Bamboo/Bamboo';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Bamboo />
      <About />
    </div>
  );
}

export default App;
