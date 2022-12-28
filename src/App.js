import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Plan from './components/Plan';
import Rooms from './components/Rooms';

import './App.css';

function App() {
  return (
    <div>
     <Navbar />
     <Hero />
     <Offers />
     <Plan />
     <Rooms />
    </div>
  );
}

export default App;
