import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navigation from './Components/Navigation';
import Home from './Components/Home'
import Sellerdata from './Components/Sellerdata';
import About from './Components/About';
import Seller from './Components/Seller';
import Auth from './Components/Auth';
import Cart from './Components/Cart';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/Seller' element={<Sellerdata />} />
        <Route path='/About' element={<About />} />
        <Route path='/Auth' element={<Auth />} />
        <Route path='/Sellerportal' element={<Seller />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
