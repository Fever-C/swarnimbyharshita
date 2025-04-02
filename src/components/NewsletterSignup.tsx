
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

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
      description: "You'll be the first to know about our new collections and exclusive offers.",
    });
    
    setEmail("");
  };

  return (
    <section className="py-20 bg-secondary">
      <div className="container-custom max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-medium mb-4">Join Our Community</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Subscribe to our newsletter to receive updates on new collections, styling tips, and exclusive offers.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow"
          />
          <Button type="submit" className="whitespace-nowrap">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
