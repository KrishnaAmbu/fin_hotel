import logo from './logo.svg';
import './App.css';

import {Grid,Card,CardContent,Typography, Menu} from "@mui/material"
import Container from '@mui/material';
import Try from './components/Try';
import Homee from './components/Homee'

import {  Routes,Route, Router } from 'react-router-dom';
import Review from './components/Review';
import Admin from './component/Admin';
import Menumanage from './component/Menumanage';
import Orderman from './component/Orderman';
import Fileman from './component/Fileman';

import Navbar from './home/Navbar';
import Login from './home/Login';
import Signup from './home/Signup';
import Orderhist from './components/Orderhist';


function App() {
  return (
    <div className="App">
  
 
    <Try/>
  <Routes>
  <Route path='/review' element={<Review />}/>
 </Routes>
 <Homee /> 
    <Review/>


     {/* <Admin/>
    <Menumanage/> 
    
     <Routes>
    
      <Route path="/menu" element={<Menumanage />}/>
      <Route path="/order" element={<Orderman />}/>
      <Route path="/feed" element={<Fileman />}/>
  
    </Routes>   */}


{/* <Navbar/>
      <Routes>
      <Route path='Navbar' element={<Navbar/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      </Routes>  */}

<Routes>
  <Route path='/history' element={<Orderhist/>}></Route>
</Routes>



    </div>
  );
}

export default App;
