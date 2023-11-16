import './App.css';
import Navigationbar from './components/Navigationbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Services from './components/Services';
import {
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
      <Navigationbar />   
      <Routes>
        <Route path="Assignment_westinbridge/" element={<Home />} exact/>
        <Route path="Assignment_westinbridge/services/" element={<Services />} exact/>
      </Routes>   
      <Footer />
    </>
  );
}

export default App;
