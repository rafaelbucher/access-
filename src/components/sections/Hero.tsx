import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  onFlashAuditClick: () => void;
  onEstimateClick: () => void;
}

export const Hero = ({ onFlashAuditClick, onEstimateClick }: HeroProps) => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl">
          <h1 className="text-7xl md:text-9xl font-display font-bold leading-none mb-8">
            révéler la performance inclusive.
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl">
            Pour des services numériques fiables, accessibles et adaptés à chaque parcours utilisateur.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              onClick={onFlashAuditClick}
            >
              Demander un audit flash
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={onEstimateClick}
            >
              Estimez votre audit
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - desktop only */}
      <button 
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        className="hidden md:block absolute bottom-8 right-8 animate-bounce hover:text-accent transition-colors"
        aria-label="Défiler vers le bas"
      >
        <ChevronDown className="h-8 w-8 text-foreground" />
      </button>
    </section>
  );
};
