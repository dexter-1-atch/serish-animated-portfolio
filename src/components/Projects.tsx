import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Bot, Brain, ShoppingCart, Calendar } from "lucide-react";
import jarvisImage from "@/assets/jarvis-ai-project.webp";
import ecommerceImage from "@/assets/ecommerce-dashboard.webp";
import taskManagementImage from "@/assets/task-management.webp";
import mlPlatformImage from "@/assets/ml-platform.webp";

const Projects = () => {
  const projects = [
    {
      title: "JARVIS - AI Personal Assistant",
      description: "Advanced AI-powered personal assistant with natural language processing, voice recognition, smart automation, and contextual learning capabilities. Features real-time responses and intelligent task management.",
      image: jarvisImage,
      tags: ["Python", "OpenAI API", "Speech Recognition", "NLP", "TensorFlow", "WebSocket"],
      github: "#",
      demo: "#",
      featured: true,
      icon: Bot,
      accent: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "ML Data Visualization Platform",
      description: "Sophisticated machine learning platform for data analysis with neural network visualization, predictive modeling, and real-time data processing capabilities.",
      image: mlPlatformImage,
      tags: ["Python", "TensorFlow", "D3.js", "FastAPI", "Redis", "Docker"],
      github: "#",
      demo: "#",
      featured: true,
      icon: Brain,
      accent: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Smart E-Commerce Dashboard",
      description: "Intelligent admin dashboard with AI-powered analytics, inventory optimization, fraud detection, and automated customer insights for modern e-commerce operations.",
      image: ecommerceImage,
      tags: ["React", "TypeScript", "Node.js", "MongoDB", "Redis", "Chart.js"],
      github: "#",
      demo: "#",
      featured: false,
      icon: ShoppingCart,
      accent: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Advanced Task Management System",
      description: "Enterprise-grade project management solution with AI-driven task prioritization, team collaboration tools, and predictive timeline optimization.",
      image: taskManagementImage,
      tags: ["Next.js", "Prisma", "PostgreSQL", "Socket.io", "AI/ML", "GraphQL"],
      github: "#",
      demo: "#",
      featured: false,
      icon: Calendar,
      accent: "from-orange-500/20 to-red-500/20"
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
          Featured Projects
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A showcase of my latest work, demonstrating technical skills and creative problem-solving
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card 
            key={project.title}
            className={`group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 ${
              project.featured ? 'lg:col-span-2' : ''
            } animate-fade-in`}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {/* Project Image */}
            <div className={`relative overflow-hidden ${
              project.featured ? 'h-64 md:h-80' : 'h-48'
            }`}>
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-60`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Floating Icon Animation */}
              <div className="absolute top-4 right-4 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                <project.icon className="h-6 w-6 text-white" />
              </div>
              
              {/* Animated Particles */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
                <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-accent/80 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
              
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex gap-2 flex-wrap">
                  {project.featured && (
                    <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-sm border border-primary/30 animate-pulse">
                      ⭐ Featured
                    </Badge>
                  )}
                </div>
              </div>
            </div>

            <CardHeader>
              <CardTitle className="text-xl md:text-2xl font-bold">
                {project.title}
              </CardTitle>
              <CardDescription className="text-base">
                {project.description}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="text-xs bg-secondary/50 hover:bg-secondary/70 transition-all duration-300 hover:scale-105 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1 + tagIndex * 0.05}s` }}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button 
                    variant="default" 
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                  >
                    <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                  >
                    <Github className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                    Code
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to action */}
      <div className="text-center mt-16">
        <p className="text-lg text-muted-foreground mb-6">
          Want to see more projects? Check out my GitHub for additional work and contributions.
        </p>
        <Button 
          variant="outline" 
          size="lg"
          className="group border-primary/50 text-primary hover:bg-gradient-to-r hover:from-primary hover:to-primary/80 hover:text-primary-foreground px-8 py-4 rounded-xl transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-primary/25 animate-pulse"
        >
          <Github className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
          View All Projects
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        </Button>
      </div>
    </section>
  );
};

export default Projects;