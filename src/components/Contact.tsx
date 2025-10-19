import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageSquare, Send, User, Instagram } from "lucide-react";
const Contact = () => {
  return <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="mb-16">
        <h2 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tight">
          Contact
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="brutal-card bg-card p-8">
          <Mail className="h-12 w-12 text-primary mb-6" />
          <h3 className="text-2xl font-bold mb-4">Email</h3>
          <a href="mailto:dexter125555@gmail.com" className="text-lg text-primary hover:underline mb-6 block">
            dexter125555@gmail.com
          </a>
          <Button onClick={() => window.location.href = 'mailto:dexter125555@gmail.com?subject=Hello Serish&body=Hi Serish,%0D%0A%0D%0AI found your portfolio and would like to connect.'} className="brutal-border bg-primary text-primary-foreground font-bold uppercase w-full h-12">
            <Send className="mr-2 h-5 w-5" />
            Send Email
          </Button>
        </div>

        <div className="brutal-card bg-card p-8">
          <User className="h-12 w-12 text-primary mb-6" />
          <h3 className="text-2xl font-bold mb-4">Info</h3>
          <p className="text-muted-foreground mb-2">
            Software Developer
          </p>
          <p className="text-muted-foreground mb-6">
            Student at Woburn Collegiate Institute
          </p>
          
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 text-center">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />
        
        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-6">
          <a href="https://www.instagram.com/ss.15.ee.rish/" target="_blank" rel="noopener noreferrer" className="brutal-border bg-card p-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group" aria-label="Instagram">
            <Instagram className="h-6 w-6" />
          </a>
        </div>
        
        <p className="text-muted-foreground">
          © 2024 Serish. Built with React, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </section>;
};
export default Contact;