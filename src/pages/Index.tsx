
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductsShowcase from "@/components/ProductsShowcase";
import AboutSection from "@/components/AboutSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <ProductsShowcase />
        <AboutSection />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
