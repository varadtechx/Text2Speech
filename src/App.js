import React from 'react'
import {Footer,Contact,Header} from './containers';
import { Navbar} from './components';
import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
      <Contact/>
    </div>
  
    <Footer />
  </div>
);

export default App