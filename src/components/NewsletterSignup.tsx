
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Ruler, Mail } from "lucide-react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    // In a real app, you would send this to your API
    console.log("Email submitted:", email);
    
    toast({
      title: "Thank you for subscribing!",
      description: "You'll be the first to know about our new Chikankari collections and special offers.",
    });
    
    setEmail("");
  };

  return (
    <section className="py-20 bg-secondary">
      <div className="container-custom max-w-4xl">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Join Our Community</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to receive updates on new Chikankari designs, styling tips, and exclusive early access to new collections.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow"
              />
              <Button type="submit" className="whitespace-nowrap">
                <Mail className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </form>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Ruler className="h-6 w-6 mr-2" />
              <h3 className="text-xl font-medium">Custom Sizing</h3>
            </div>
            <p className="mb-4">
              We offer personalized fitting for all our Chikankari garments. Share your measurements with us for the perfect fit crafted just for you.
            </p>
            <Button variant="outline" className="w-full">
              Fill Out Sizing Questionnaire
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
