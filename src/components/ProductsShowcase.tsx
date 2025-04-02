import { useState } from "react";
import { products, categories, type Product } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ChevronRight, Scissors } from "lucide-react";
const ProductsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProducts = activeCategory === "All" ? products : products.filter(product => product.category === activeCategory);
  return <section id="products" className="py-20 container-custom bg-red-200">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-medium mb-4 text-center">Our Collection</h2>
        <p className="text-muted-foreground text-center max-w-xl mb-8">
          Discover our exquisite range of handcrafted Chikankari garments, meticulously created by skilled artisans from Lucknow.
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => <Button key={category} variant={activeCategory === category ? "default" : "outline"} onClick={() => setActiveCategory(category)} className="m-1">
              {category}
            </Button>)}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {filteredProducts.map(product => <ProductCard key={product.id} product={product} />)}
      </div>

      <div className="mt-16 p-6 bg-secondary/50 rounded-lg max-w-3xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <Scissors className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-medium mb-2">Custom Fitting Service</h3>
        <p className="text-muted-foreground mb-4">
          Each piece can be tailored to your exact measurements for the perfect fit. Just select your size preferences during checkout.
        </p>
        <Button variant="default" size="lg">
          Learn More About Custom Fitting
        </Button>
      </div>

      <div className="flex justify-center mt-12">
        <Button variant="outline" size="lg" className="group">
          View All Designs
          <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>;
};
const ProductCard = ({
  product
}: {
  product: Product;
}) => {
  return <div className="group">
      <div className="relative overflow-hidden rounded-md mb-4 aspect-[3/4] bg-secondary/50">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        {product.isNew && <div className="absolute top-2 right-2 bg-black text-white text-xs py-1 px-2 rounded">
            New
          </div>}
      </div>
      <h3 className="font-medium mb-1">{product.name}</h3>
      <p className="text-muted-foreground text-sm mb-1">{product.category}</p>
      <p className="font-medium">₹{product.price.toFixed(0)}</p>
    </div>;
};
export default ProductsShowcase;