import './App.css';
import Home from './componentss/function/Home';
import Navbar from './componentss/function/navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './assets/css/Home.css';
import './assets/css/Navbar.css';
import "./assets/css/Contact.css";
import UseEffect from './componentss/function/UseEffect';
import UseRef from './componentss/function/UseRef';
import UseContext from './componentss/function/UseContext';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/use-effect" element ={<UseEffect/>} />
        <Route path="/use-ref" element ={<UseRef/>} />
        <Route path="/use-context" element ={<UseContext/>} />
      </Routes>
      </BrowserRouter>
     

     
    </div>
  );
}

export default App;