import React from 'react';
import './App.css';
import Hero from './components/hero/hero';
import Trust from './components/Trust/Trust';
import Introduction from './components/Introduction/Introduction';
import WhatIs from './components/WhatIs/WhatIs'; 
import WhyChanges from './components/WhyChanges/WhyChanges'; 
import Steps from './components/Steps/Steps';
import Types from './components/Types/Types';
import Candidates from './components/Candidates/Candidates';
import Recovery from './components/Recovery/Recovery';
import Benefits from './components/Benefits/Benefits';
import Safety from './components/Safety/Safety';
import FAQ from './components/FAQ/FAQ';
import CTA from './components/CTA/CTA';

function App() {
  return (
    <div className="App">
     <Hero />
     <Trust />
     <Introduction />
      <WhatIs />
      <WhyChanges />
      <Steps />
      <Types />
      <Candidates />
      <Recovery />
      <Benefits />
      <Safety />
      <FAQ />
      <CTA />
    </div>
  );
}

export default App;
