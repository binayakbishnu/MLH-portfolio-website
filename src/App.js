import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Welcome />
      <Experience />
      <Education />
      <Achievements />
      <Footer />
    </div>
  );
}

export default App;