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
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="mb-16">
        <h2 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tight">
          Skills
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category) => (
          <Card 
            key={category.title} 
            className="brutal-card bg-card"
          >
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 uppercase">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    className="px-3 py-1 text-sm bg-secondary border border-border font-medium"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;