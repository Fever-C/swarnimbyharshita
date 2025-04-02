
import { brandInfo } from "@/lib/data";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <h3 className="text-xl font-medium mb-4">{brandInfo.name}</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-xs">
              {brandInfo.tagline}
            </p>
            <div className="flex space-x-4">
              <a href={brandInfo.socialLinks.instagram} className="text-primary-foreground/80 hover:text-primary-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href={brandInfo.socialLinks.facebook} className="text-primary-foreground/80 hover:text-primary-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href={brandInfo.socialLinks.twitter} className="text-primary-foreground/80 hover:text-primary-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">New Arrivals</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">Bestsellers</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">Collections</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">Sale</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">Our Story</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">Sustainability</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">Careers</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Help</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">Contact Us</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">Shipping</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">Returns</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary-foreground/20 text-primary-foreground/60 text-sm">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <p>&copy; {currentYear} {brandInfo.name}. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="hover:text-primary-foreground">Terms of Service</a>
              <a href="#" className="hover:text-primary-foreground">Privacy Policy</a>
              <a href="#" className="hover:text-primary-foreground">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
