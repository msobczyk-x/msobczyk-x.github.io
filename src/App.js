import React from 'react';
import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';


const App = () => {

  return (
    <div className="App">
      <Header />
      <About />
      <Work />
      <Contact />
    </div>
  );
}
    
export default App;
