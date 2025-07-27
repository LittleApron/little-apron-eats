import { useEffect } from 'react';
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Location from "@/components/Location";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import FloatingOrderButton from "@/components/FloatingOrderButton";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  useScrollAnimation();

  useEffect(() => {
    // Set home section ID for navigation
    const heroSection = document.querySelector('section');
    if (heroSection) {
      heroSection.id = 'home';
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Menu />
      <Location />
      <Reviews />
      <Footer />
      <FloatingOrderButton />
    </div>
  );
};

export default Index;
