import React from 'react';
// import Featurebox from './components/Featurebox';
import Features from './components/Features';
import Header from './components/Header';
import Navbar from './components/Navbar';
// import Offer from './components/Offer';
import Test from './components/Test';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Features />
      {/* <Offer /> */}
      <Test />
    </div>
  );
}

export default App;
