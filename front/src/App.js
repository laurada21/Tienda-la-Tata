
import './App.css';
import React, { useEffect } from 'react';
import Header from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import Home from './components/Home';
//Router traido desde el react-router-dom(no confundir con router express)
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
<<<<<<< Updated upstream
      <div className='container container-fluid'>
       
     </div>
     <Footer />
=======
      <div className='container container_fluid'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Home" element={<Home/>}/>
        </Routes>
      </div>
  
       <Footer/>
>>>>>>> Stashed changes
    </div>
    </Router>
  );
}

export default App;
