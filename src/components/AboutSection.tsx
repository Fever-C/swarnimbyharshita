
import { brandInfo } from "@/lib/data";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-brand-light">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Our Heritage</h2>
            <p className="text-muted-foreground mb-6">
              {brandInfo.description}
            </p>
            <p className="mb-8">
              Established in {brandInfo.foundedYear}, Swarnim is dedicated to preserving the ancient art of Chikankari 
              while providing modern women with elegant, comfortable, and beautifully crafted clothing.
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-4">Our Commitment</h3>
              <div className="grid grid-cols-2 gap-4">
                {brandInfo.values.map((value, index) => (
                  <div key={index} className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="aspect-square max-w-md mx-auto md:ml-auto relative">
              <div className="absolute inset-0 translate-x-4 translate-y-4 border-2 border-brand-accent rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1572454591674-2739f30a2b2f?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3" 
                alt="Artisan working on Chikankari embroidery" 
                className="relative z-10 w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
