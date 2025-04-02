import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const Hero = () => {
  return <section className="relative w-full h-[80vh] md:h-[85vh] overflow-hidden">
      <div className="absolute inset-0 bg-brand-light">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url('https://i.pinimg.com/originals/2e/84/05/2e840512841fb543fe5c28ef69012192.jpg')"
      }}>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </div>

      <div className="relative h-full container-custom flex flex-col justify-center">
        <div className="max-w-xl animate-fade-up">
          <h1 className="text-4xl tracking-tight mb-4 drop-shadow-sm md:text-6xl font-bold px-0 my-0 text-yellow-300">
            SWARNIM<br />Chikankari Collection
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-md drop-shadow-sm text-white font-light text-center">
            Exquisite handcrafted chikan embroidery for the modern Indian woman. Now offering custom fitting for the perfect silhouette.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-6">
              Shop Collection
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-gray-950 bg-slate-50">
              Custom Orders
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
