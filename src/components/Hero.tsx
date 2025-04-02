
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full h-[80vh] md:h-[85vh] overflow-hidden">
      <div className="absolute inset-0 bg-brand-light">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3')" 
          }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      </div>

      <div className="relative h-full container-custom flex flex-col justify-center">
        <div className="max-w-xl animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-4 text-white drop-shadow-sm">
            Fall Winter<br />Collection 2023
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-md drop-shadow-sm">
            Discover our latest collection of sustainable, ethically-made essentials for your wardrobe.
          </p>
          <div className="flex gap-4">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 px-6"
            >
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10 px-6"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
