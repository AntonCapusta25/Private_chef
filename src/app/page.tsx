import BookingForm from "@/components/BookingForm";
import Hero from "@/components/Hero";
import MenuGrid from "@/components/MenuGrid";
import OccasionsCarousel from "@/components/OccasionsCarousel";
import ChefShowcase from "@/components/ChefShowcase";
import ValueCarousel from "@/components/ValueCarousel";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";


export default function Home() {
  return (
    <main className="relative min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <MenuGrid />
      <ChefShowcase />
      <ValueCarousel />
      <OccasionsCarousel />
      <HowItWorks />
      <BookingForm />


      <Footer />
    </main>
  );
}
