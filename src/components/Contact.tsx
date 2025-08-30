import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageSquare, Send, User } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
          Let's Connect
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Ready to start a project or just want to chat about technology? I'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="reveal-animation">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Whether you have a project in mind, want to collaborate, or just want to say hello, 
              I'm always open to interesting conversations and opportunities.
            </p>
          </div>

          <Card className="card-hover bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a 
                    href="mailto:dexter125555@gmail.com"
                    className="text-primary hover:text-primary/80 transition-colors duration-300"
                  >
                    dexter125555@gmail.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
                  <User className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Currently</h4>
                  <p className="text-muted-foreground">
                    Student at Woburn Collegiate Institute
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="p-6 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
            <h4 className="font-semibold mb-3">Quick Response</h4>
            <p className="text-sm text-muted-foreground">
              I typically respond to emails within 24-48 hours. For urgent matters, 
              please mention it in the subject line.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <Card className="gradient-border">
          <CardContent className="p-8">
            <div className="space-y-6">
              <div className="text-center mb-6">
                <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold">Send a Message</h3>
                <p className="text-muted-foreground mt-2">
                  Click the button below to open your email client
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-secondary/20 border border-secondary/30">
                  <div className="flex items-center gap-3 mb-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="font-medium">Email Address</span>
                  </div>
                  <p className="text-sm text-muted-foreground">dexter125555@gmail.com</p>
                </div>

                <div className="p-4 rounded-lg bg-secondary/20 border border-secondary/30">
                  <div className="flex items-center gap-3 mb-2">
                    <User className="h-5 w-5 text-accent" />
                    <span className="font-medium">About Me</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Software Developer | Woburn Collegiate Institute Student
                  </p>
                </div>

                <Button 
                  className="w-full bg-primary hover:bg-primary/80 text-primary-foreground font-semibold py-4 rounded-xl transition-all duration-300 hover:scale-105 hero-glow"
                  onClick={() => window.location.href = 'mailto:dexter125555@gmail.com?subject=Hello Serish!&body=Hi Serish,%0D%0A%0D%0AI found your portfolio and would like to connect.%0D%0A%0D%0ABest regards,'}
                >
                  <Send className="mr-2 h-5 w-5" />
                  Open Email Client
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  This will open your default email application with my address pre-filled
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <div className="mt-24 text-center">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />
        <p className="text-muted-foreground">
          © 2024 Serish. Built with React, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </section>
  );
};

export default Contact;