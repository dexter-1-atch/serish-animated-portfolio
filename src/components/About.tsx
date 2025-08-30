import { Code2, GraduationCap, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
          About Me
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Passionate about creating innovative solutions and continuously learning new technologies
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="reveal-animation">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-muted-foreground">
                  Currently studying at <span className="text-primary font-semibold">Woburn Collegiate Institute</span>, 
                  focusing on computer science and software development fundamentals.
                </p>
              </div>
            </div>
          </div>

          <div className="reveal-animation" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
                <Code2 className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Development</h3>
                <p className="text-muted-foreground">
                  Specializing in modern web technologies including React, TypeScript, and full-stack development.
                  Always exploring new frameworks and best practices.
                </p>
              </div>
            </div>
          </div>

          <div className="reveal-animation" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-secondary/30 border border-primary/20">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  Passionate about creating user-centered solutions that combine beautiful design 
                  with powerful functionality and optimal performance.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="gradient-border p-8 card-hover">
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-accent p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <span className="text-2xl font-bold gradient-text">S</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">Serish</h3>
              <p className="text-muted-foreground mb-4">Software Developer</p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Problem Solving</span>
                <span className="text-sm text-muted-foreground">95%</span>
              </div>
              <div className="skill-bar h-2">
                <div className="skill-progress" style={{ animationDelay: '1s' }} />
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Web Development</span>
                <span className="text-sm text-muted-foreground">90%</span>
              </div>
              <div className="skill-bar h-2">
                <div className="skill-progress" style={{ animationDelay: '1.2s', width: '90%' }} />
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">UI/UX Design</span>
                <span className="text-sm text-muted-foreground">85%</span>
              </div>
              <div className="skill-bar h-2">
                <div className="skill-progress" style={{ animationDelay: '1.4s', width: '85%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;