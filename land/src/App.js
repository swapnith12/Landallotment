
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/Login';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Home from './components/Home';
import DetailsUpload from './components/DetailsUpload';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route exact path='/Login' Component={Login}/>
          <Route exact path='/Uploads' Component={DetailsUpload}/>
          <Route Component={NotFound}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
