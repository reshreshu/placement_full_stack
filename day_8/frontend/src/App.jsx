import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import SignUpForm from './components/SignUp';
import Login from './components/Login';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/SignUp" element ={<SignUpForm/>} />
        <Route path="/Login" element ={<Login/>} />
      </Routes> 
      </BrowserRouter>
      </div>
  );
}

export default App;