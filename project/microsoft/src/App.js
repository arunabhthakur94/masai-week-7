import React from 'react';
import './App.css';
import Navigation from './components/Header/Navigation';
import Main from './components/MainSection/Main';
import Footer from './components/FooterSection/Footer';

function App() {
  return (
    <div>
      <Navigation />

      <Main />

      <Footer />
    </div>
  );
}

export default App;
