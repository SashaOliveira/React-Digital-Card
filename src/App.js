import React from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Info from './components/Info';
import Interest from './components/Interest';

export default function App() {
  return (
    <div className="app">
      <div className="card">
        <Info />
        <About />
        <Interest />
        <Footer />
      </div>
    </div>
  );
}
