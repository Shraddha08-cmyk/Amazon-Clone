import React from 'react';
import '../src/App.css';
import { BrowserRouter, BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Header from '../src/components/Header/Header';
import Home from '../src/components/Home/Home';
import Login from '../src/components/Login/Login';
import Checkout from '../src/components/Checkout/Checkout';
import Payment from '../src/components/Payment/Payment';


function App() {
  return (

    
     <div id='main'>
      <BrowserRouter>
      <Header/>
       <Routes>
        <Route exact path="/" element={<Home/>}/>
          <Route exact path="/checkout" element={<Checkout/>}/>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/payment' element={<Payment/>}></Route>
       </Routes>
       </BrowserRouter>
     </div>
   

  );
}


export default App;