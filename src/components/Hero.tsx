import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Mail, ExternalLink } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 animated-gradient opacity-20" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full opacity-30 floating-animation"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="reveal-animation" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 hero-glow">
            Hi, I'm{' '}
            <span className="gradient-text">Serish</span>
          </h1>
        </div>
        
        <div className="reveal-animation" style={{ animationDelay: '0.4s' }}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
            Software Developer & Student
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Studying at <span className="text-primary font-semibold">Woburn Collegiate Institute</span> and crafting beautiful, 
            functional web experiences with cutting-edge technologies.
          </p>
        </div>

        <div className="reveal-animation flex flex-col sm:flex-row gap-4 justify-center mb-16" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/80 text-primary-foreground font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hero-glow"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
          >
            <Github className="mr-2 h-5 w-5" />
            View Projects
          </Button>
        </div>

        <div className="reveal-animation" style={{ animationDelay: '0.8s' }}>
          <button 
            onClick={scrollToAbout}
            className="animate-bounce p-2 rounded-full border border-primary/20 hover:border-primary/40 transition-colors duration-300"
          >
            <ArrowDown className="h-6 w-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;