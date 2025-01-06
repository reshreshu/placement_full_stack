import './App.css';
import Home from './componentss/function/Home';
import About from './componentss/function/About';
import Gallery from './componentss/function/Gallery';
import Contact from './componentss/function/Contact';
<<<<<<< HEAD
import Navbar from './componentss/function/Navbar';
=======
import Navbar from './componentss/function/navbar';
>>>>>>> 2ec1414a0f2cd9510d1b3c941d174761d7c0a201
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './assets/css/Home.css';
import './assets/css/Navbar.css';
import "./assets/css/Contact.css";
import UseEffect from './componentss/function/UseEffect';
import UseRef from './componentss/function/UseRef';
import UseContext from './componentss/function/UseContext';
import UseMemo from './componentss/function/UseMemo';
<<<<<<< HEAD
import SignUpForm from './componentss/function/SignUp';
import Login from './componentss/function/login';
=======
>>>>>>> 2ec1414a0f2cd9510d1b3c941d174761d7c0a201
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/about" element ={<About college="kongu engineering college" clg1="naturopathy" clg2="polytechnic"/>} />
        <Route path="/gallery" element ={<Gallery/>} />
        <Route path="/contact" element ={<Contact/>} />
        <Route path="/use-effect" element ={<UseEffect/>} />
        <Route path="/use-ref" element ={<UseRef/>} />
        <Route path="/use-context" element ={<UseContext/>} />
        <Route path="/use-memo" element ={<UseMemo/>} />
<<<<<<< HEAD
        <Route path="/SignUp" element ={<SignUpForm/>} />
        <Route path="/Login" element ={<Login/>} />
=======
>>>>>>> 2ec1414a0f2cd9510d1b3c941d174761d7c0a201
      </Routes>
      </BrowserRouter>
     

     
    </div>
  );
}

export default App;