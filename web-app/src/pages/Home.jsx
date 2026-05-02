import Hero from '../components/home/Hero';
import SocialProof from '../components/home/SocialProof';
import Capabilities from '../components/home/Capabilities';
import Callout from '../components/home/Callout';
import About from '../components/home/About';
import Services from '../components/home/Services';
import Technologies from '../components/home/Technologies';
import Gallery from '../components/home/Gallery';
import Clients from '../components/home/Clients';
import FinalCTA from '../components/home/FinalCTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <SocialProof />
      <Capabilities />
      <Callout />
      <About />
      <Services />
      <Technologies />
      <Gallery />
      <Clients />
      <FinalCTA />
    </main>
  );
}
