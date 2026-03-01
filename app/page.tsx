import TopBanner from '@/components/TopBanner';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Pricing from '@/components/Pricing';
import Showcase from '@/components/Showcase';
import Testimonials from '@/components/Testimonials';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <TopBanner />
      <Navbar />
      <Hero />
      <Benefits />
      <Pricing />
      <Showcase />
      <Testimonials />
      <Features />
      <Footer />
    </main>
  );
}
