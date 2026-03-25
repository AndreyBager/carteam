import React from 'react';
import Hero from '../components/Hero';
import Workflow from '../components/Workflow';
import Stats from '../components/Stats';
import Inventory from '../components/Inventory';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';
import MapSection from '../components/MapSection';
import CTA from '../components/CTA';

const Landing = () => {
  return (
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
  );
};

export default Landing;
