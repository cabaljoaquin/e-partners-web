import { lazy, Suspense } from 'react';
import Hero from '../components/home/Hero';
import SocialProof from '../components/home/SocialProof';
import Capabilities from '../components/home/Capabilities';
import Callout from '../components/home/Callout';
import About from '../components/home/About';
import Services from '../components/home/Services';
import Clients from '../components/home/Clients';
import FinalCTA from '../components/home/FinalCTA';

// Secciones que usan Swiper (below-the-fold): fuera del bundle crítico.
const Technologies = lazy(() => import('../components/home/Technologies'));
const Gallery = lazy(() => import('../components/home/Gallery'));

export default function Home() {
  return (
    <main>
      <Hero />
      <SocialProof />
      <Capabilities />
      <Callout />
      <About />
      <Services />
      <Suspense fallback={<div className="min-h-[300px]" />}>
        <Technologies />
        <Gallery />
      </Suspense>
      <Clients />
      <FinalCTA />
    </main>
  );
}
