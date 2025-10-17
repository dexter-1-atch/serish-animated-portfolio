import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Code2 } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="reveal-animation" style={{ animationDelay: '0.1s' }}>
          <h1 className="text-7xl md:text-9xl font-black mb-8 tracking-tight">
            SERISH
          </h1>
        </div>
        
        <div className="reveal-animation mb-12" style={{ animationDelay: '0.2s' }}>
          <p className="text-2xl md:text-3xl mb-4 text-muted-foreground font-medium">
            Software Developer
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Building functional web applications. Currently studying at Woburn Collegiate Institute.
          </p>
        </div>

        <div className="reveal-animation flex flex-wrap gap-4 mb-16" style={{ animationDelay: '0.3s' }}>
          <Button 
            size="lg" 
            onClick={() => scrollToSection('contact')}
            className="brutal-border bg-primary text-primary-foreground font-bold px-8 h-14 text-lg uppercase tracking-wide"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact
          </Button>
          <Button 
            size="lg"
            onClick={() => scrollToSection('projects')}
            className="brutal-border bg-background text-foreground border-foreground font-bold px-8 h-14 text-lg uppercase tracking-wide"
          >
            <Code2 className="mr-2 h-5 w-5" />
            Projects
          </Button>
        </div>

        <div className="reveal-animation" style={{ animationDelay: '0.4s' }}>
          <button 
            onClick={() => scrollToSection('about')}
            className="p-3 border-2 border-foreground hover:bg-foreground hover:text-background transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;