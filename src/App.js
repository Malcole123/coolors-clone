import './App.css';

import Navbar from './components/Navbar'
import PaletteController from './components/PaletteDisplay';

//Hooks





function App() {
  return (
    <div className="main-app main-app-mobile-reverse">
      <Navbar/>
      <PaletteController/>
    </div>
  )}

export default App;
