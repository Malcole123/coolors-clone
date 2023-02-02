import './App.css';

import Navbar from './components/Navbar'
import PaletteController from './components/PaletteDisplay';


function App() {
  return (
    <div className="main-app">
      <Navbar/>
      <PaletteController/>
    </div>
  );
}

export default App;
