
import './App.css';
import Login from './components/Loginform';
// import Signup from './components/Singupform';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Testform from './components/Form';
function App() {
  return (
    <div className="App">
         <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Login/> } />
                <Route path="/signup" element={ <Testform /> } />
            </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;