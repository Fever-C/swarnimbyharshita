import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Menu, X, Search } from "lucide-react";
import { brandInfo } from "@/lib/data";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return <nav className="py-4 backdrop-blur-sm sticky top-0 z-40 border-b bg-red-200">
      <div className="container-custom flex items-center justify-between">
        <a href="/" className="text-2xl font-medium tracking-tight">
          {brandInfo.name}
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#products" className="text-foreground/80 hover:text-foreground transition-colors">
            Shop
          </a>
          <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">
            About
          </a>
          <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">
            Contact
          </a>
        </div>

        {/* Action buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">Shopping bag</span>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center space-x-4">
          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a href="#products" className="py-2 text-foreground/80 hover:text-foreground transition-colors">
              Shop
            </a>
            <a href="#about" className="py-2 text-foreground/80 hover:text-foreground transition-colors">
              About
            </a>
            <a href="#contact" className="py-2 text-foreground/80 hover:text-foreground transition-colors">
              Contact
            </a>
            <div className="flex items-center py-2">
              <Button variant="ghost" className="w-full justify-start pl-0">
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>}
    </nav>;
};
export default Navbar;