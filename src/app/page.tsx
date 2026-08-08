import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import ToursSection from './components/ToursSection';
import WhyUsSection from './components/WhyUsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <HeroSection />
      <ToursSection />
      <WhyUsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
