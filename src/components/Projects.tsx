import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "Modern admin dashboard with real-time analytics, inventory management, and order processing capabilities built with React and TypeScript.",
      image: "/api/placeholder/600/400",
      tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "Firebase"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with drag-and-drop functionality, real-time updates, and team collaboration features.",
      image: "/api/placeholder/600/400",
      tags: ["Next.js", "Prisma", "PostgreSQL", "Socket.io", "Framer Motion"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Weather Forecast App",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "/api/placeholder/600/400",
      tags: ["React", "Weather API", "Geolocation", "PWA", "Responsive Design"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio showcasing advanced animations, responsive design, and modern web development practices.",
      image: "/api/placeholder/600/400",
      tags: ["React", "Tailwind CSS", "Framer Motion", "TypeScript", "Vite"],
      github: "#",
      demo: "#",
      featured: false
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
            className={`card-hover overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm ${
              project.featured ? 'lg:col-span-2' : ''
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Project Image Placeholder */}
            <div className={`relative overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 ${
              project.featured ? 'h-64 md:h-80' : 'h-48'
            }`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <Code2 className="h-16 w-16 text-primary/40" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex gap-2 flex-wrap">
                  {project.featured && (
                    <Badge className="bg-primary text-primary-foreground">
                      Featured
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
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="text-xs bg-secondary/50"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button 
                    variant="default" 
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/80 text-primary-foreground"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Github className="mr-2 h-4 w-4" />
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
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
        >
          <Github className="mr-2 h-5 w-5" />
          View All Projects
        </Button>
      </div>
    </section>
  );
};

export default Projects;