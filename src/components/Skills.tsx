import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "💻",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"]
    },
    {
      title: "Backend",
      icon: "⚡",
      skills: ["Node.js", "Python", "Express", "API Development", "Database Design", "MongoDB"]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: ["Git", "VS Code", "Figma", "Docker", "Vercel", "Firebase", "Chrome DevTools"]
    },
    {
      title: "Concepts",
      icon: "🧠",
      skills: ["Responsive Design", "Performance Optimization", "Clean Code", "Problem Solving", "Agile"]
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
          Skills & Technologies
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A comprehensive toolkit for building modern, scalable applications
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <Card 
            key={category.title} 
            className="card-hover bg-card/50 backdrop-blur-sm border-border/50"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                    style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Experience Timeline */}
      <div className="mt-24">
        <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
          Learning Journey
        </h3>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary to-accent" />
          
          <div className="space-y-12">
            <div className="relative flex items-center justify-between">
              <div className="w-5/12 text-right pr-8">
                <h4 className="text-xl font-semibold mb-2">Started Programming</h4>
                <p className="text-muted-foreground">Began learning HTML, CSS, and JavaScript fundamentals</p>
                <span className="text-sm text-primary font-medium">2022</span>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background" />
              <div className="w-5/12" />
            </div>

            <div className="relative flex items-center justify-between">
              <div className="w-5/12" />
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background" />
              <div className="w-5/12 pl-8">
                <h4 className="text-xl font-semibold mb-2">React & Modern Frameworks</h4>
                <p className="text-muted-foreground">Dove deep into React, TypeScript, and component-based architecture</p>
                <span className="text-sm text-accent font-medium">2023</span>
              </div>
            </div>

            <div className="relative flex items-center justify-between">
              <div className="w-5/12 text-right pr-8">
                <h4 className="text-xl font-semibold mb-2">Full-Stack Development</h4>
                <p className="text-muted-foreground">Expanding into backend technologies and database management</p>
                <span className="text-sm text-primary font-medium">2024</span>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background animate-pulse" />
              <div className="w-5/12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;