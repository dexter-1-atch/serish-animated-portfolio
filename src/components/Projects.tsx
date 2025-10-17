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
      title: "Jarvis AI Assistant",
      description: "AI chatbot for portfolio. Built with React and TypeScript, integrated with GPT API for natural conversations.",
      image: jarvisImage,
      tags: ["React", "TypeScript", "OpenAI", "Supabase"],
      github: "https://github.com/serish",
      demo: "/",
      icon: Bot,
    },
    {
      title: "ML Platform",
      description: "Data visualization and analysis tool. Interactive charts and model training interface.",
      image: mlPlatformImage,
      tags: ["Python", "TensorFlow", "React", "FastAPI"],
      github: "https://github.com/serish",
      demo: "https://github.com/serish",
      icon: Brain,
    },
    {
      title: "E-Commerce Dashboard",
      description: "Admin panel for online stores. Sales tracking, inventory management, and analytics.",
      image: ecommerceImage,
      tags: ["React", "TypeScript", "Node.js", "MongoDB"],
      github: "https://github.com/serish",
      demo: "https://github.com/serish",
      icon: ShoppingCart,
    },
    {
      title: "Task Manager",
      description: "Project management tool. Task tracking, team collaboration, deadline reminders.",
      image: taskManagementImage,
      tags: ["Next.js", "PostgreSQL", "Prisma", "Socket.io"],
      github: "https://github.com/serish",
      demo: "https://github.com/serish",
      icon: Calendar,
    }
  ];

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="mb-16">
        <h2 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tight">
          Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card 
            key={project.title}
            className="brutal-card bg-card overflow-hidden"
          >
            <div className="relative h-48 overflow-hidden border-b-2 border-border">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <project.icon className="h-6 w-6 text-primary" />
                <CardTitle className="text-2xl font-bold">
                  {project.title}
                </CardTitle>
              </div>
              <CardDescription className="text-base leading-relaxed">
                {project.description}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      className="px-2 py-1 text-xs bg-secondary border border-border font-medium"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button 
                    size="sm"
                    onClick={() => window.open(project.demo, '_blank')}
                    className="flex-1 brutal-border bg-primary text-primary-foreground font-bold uppercase text-xs h-10"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                  <Button 
                    size="sm"
                    onClick={() => window.open(project.github, '_blank')}
                    className="flex-1 brutal-border bg-background text-foreground border-foreground font-bold uppercase text-xs h-10"
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
    </section>
  );
};

export default Projects;