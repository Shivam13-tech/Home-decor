import './App.css';
import Navigation from './Components/Navigation';
import Individual from './Components/Individual';
import Home from './Components/Home'
import Sellerdata from './Components/Sellerdata';
import Seller from './Components/Seller';
import Auth from './Components/Auth';

function App() {
  return (
    <div className="App">
        {/* <Individual /> */}
        <Navigation />
        <Sellerdata />
        {/* <Home /> */}
        {/* <Seller />
        <Auth /> */}
    </div>
  );
}

export default App;
