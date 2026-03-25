import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Workflow from './components/Workflow';
import Stats from './components/Stats';
import Inventory from './components/Inventory';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Reviews from './components/Reviews';
import MapSection from './components/MapSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main className="pt-20 lg:pt-24">
        <Hero />
        <Workflow />
        <Stats />
        <Inventory />
        <Reviews />
        <FAQ />
        <MapSection />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
