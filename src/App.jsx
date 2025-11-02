import GlassHeader from './components/GlassHeader';
import Hero from './components/Hero';
import ScenePanel from './components/ScenePanel';
import FooterCTA from './components/FooterCTA';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0A0F1A] selection:bg-[#00A9FF]/30 selection:text-white">
      {/* Floating header with glassmorphism */}
      <GlassHeader />

      {/* Hero with Spline scene */}
      <Hero />

      {/* Product scene panels with glass cards */}
      <ScenePanel />

      {/* Technology + CTA */}
      <FooterCTA />
    </div>
  );
}
