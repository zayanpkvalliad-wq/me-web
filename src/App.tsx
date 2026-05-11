/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import WhyChooseUs from './components/WhyChooseUs';
import OurImpact from './components/OurImpact';
import CarGrid from './components/CarGrid';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <WhyChooseUs />
        <OurImpact />
        <CarGrid />
        <Testimonials />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}


