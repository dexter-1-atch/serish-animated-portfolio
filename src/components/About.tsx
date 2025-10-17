import { Code2, GraduationCap, Rocket } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="mb-16">
        <h2 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tight">
          About
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="brutal-card bg-card p-8">
          <GraduationCap className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-2xl font-bold mb-3">Education</h3>
          <p className="text-muted-foreground leading-relaxed">
            Student at Woburn Collegiate Institute, learning computer science fundamentals and development.
          </p>
        </div>

        <div className="brutal-card bg-card p-8">
          <Code2 className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-2xl font-bold mb-3">Development</h3>
          <p className="text-muted-foreground leading-relaxed">
            Working with React, TypeScript, and modern web technologies to build functional applications.
          </p>
        </div>

        <div className="brutal-card bg-card p-8">
          <Rocket className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-2xl font-bold mb-3">Goals</h3>
          <p className="text-muted-foreground leading-relaxed">
            Creating practical solutions and improving my skills through hands-on projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;