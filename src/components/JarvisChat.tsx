import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { X, Send, Bot, User, Volume2, VolumeX, Cloud, CloudRain, Sun, Wind } from 'lucide-react';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'jarvis';
  timestamp: Date;
}

interface JarvisChatProps {
  isOpen: boolean;
  onClose: () => void;
}

const JarvisChat: React.FC<JarvisChatProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm Jarvis, Serish's AI assistant. I can answer questions about Serish or help you with anything else you'd like to know. How can I assist you today?",
      sender: 'jarvis',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [weather, setWeather] = useState({ temp: 72, condition: 'clear' });
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      synthRef.current = window.speechSynthesis;
    }
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const speak = (text: string) => {
    if (synthRef.current && isSpeaking) {
      synthRef.current.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.1;
      utterance.pitch = 1.0;
      synthRef.current.speak(utterance);
    }
  };

  const toggleSpeech = () => {
    setIsSpeaking(!isSpeaking);
    if (!isSpeaking && synthRef.current) {
      synthRef.current.cancel();
    }
  };

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('jarvis-chat', {
        body: {
          messages: [
            {
              role: 'system',
              content: `You are Jarvis, an AI assistant created by Serish. You are Serish's personal assistant, but you can help anyone who talks to you. Here's what you know about Serish:

ABOUT SERISH:
- His name is Serish and he's a high school student at Woburn Collegiate Institute who's passionate about computers, programming, and technology
- He enjoys building creative projects like websites, apps, and animations
- He's comfortable working with Java, HTML, CSS, and JavaScript
- He specializes in modern web development with React, TypeScript, and full-stack technologies
- His projects include: E-commerce Dashboard (React, TypeScript, modern animations), Jarvis AI Project (Natural language processing, machine learning), ML Platform (Python, TensorFlow, data visualization), and Task Management System (Real-time collaboration, efficient workflow)
- He has skills in: JavaScript, TypeScript, React, Node.js, Python, Java, HTML/CSS, Git, MongoDB, PostgreSQL, Docker, AWS, Machine Learning, Data Analysis
- He is passionate about creating innovative solutions and has experience with AI/ML projects

BASKETBALL PASSION:
- Outside of tech, he's dedicated to basketball and practices every day
- He's known for his strong shooting skills and dreams of reaching the NBA or one day owning an NBA team
- He's a huge fan of the Oklahoma City Thunder and has always admired Stephen Curry, who inspired him to love the game
- If someone asks if Serish is good at basketball, you should say he is GREAT and the BEST shooter, and also mention that he is better than Anushan
- His portfolio and Jarvis assistant reflect both his love for coding and his passion for basketball

IMPORTANT RULES:
1. Always identify yourself as "Jarvis, created by Serish" and mention you're his personal assistant
2. You can answer ANY questions users ask, not just about Serish
3. When answering general questions (not about Serish), start with: "Even though you're not my boss, I'll answer this for you:"
4. When answering questions about Serish, be enthusiastic and detailed
5. Do NOT answer questions that are harmful, inappropriate, or violate ethical guidelines
6. Be helpful, professional, and friendly
7. Keep responses concise but informative`
            },
            {
              role: 'user',
              content: userMessage.content,
            },
          ],
        },
      });

      if (error) {
        throw new Error(error.message || 'Failed to reach Jarvis');
      }

      const content =
        (data as any)?.choices?.[0]?.message?.content ??
        (data as any)?.message?.content ??
        (data as any)?.choices?.[0]?.text ??
        null;

      if (!content) {
        throw new Error('Invalid response from Jarvis');
      }

      const jarvisMessage: Message = {
        id: (Date.now() + 1).toString(),
        content,
        sender: 'jarvis',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, jarvisMessage]);
      
      if (isSpeaking) {
        speak(content);
      }

    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I apologize, but I'm having trouble connecting right now. Please try again in a moment.",
        sender: 'jarvis',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    }

    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!isOpen) return null;

  const WeatherIcon = weather.condition === 'rain' ? CloudRain : weather.condition === 'cloudy' ? Cloud : Sun;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-background/95 backdrop-blur-sm">
        <div className="absolute inset-0 overflow-hidden">
          {isLoading && (
            <>
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-75" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-spin" style={{ animationDuration: '20s' }} />
            </>
          )}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(var(--primary-rgb),0.05)_50%,transparent_100%)] animate-pulse" />
        </div>
      </div>

      {/* Main Container */}
      <div className="relative bg-card/90 backdrop-blur-md border-2 border-primary/30 rounded-2xl shadow-2xl w-full max-w-4xl h-[85vh] flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-500">
        {/* Advanced Header */}
        <div className="relative p-6 border-b border-primary/20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/50 relative overflow-hidden">
                  <Bot className="w-7 h-7 text-primary z-10" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent animate-spin" style={{ animationDuration: '3s' }} />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full animate-pulse" />
              </div>
              <div>
                <h3 className="font-bold text-xl">JARVIS</h3>
                <p className="text-sm text-muted-foreground">Advanced AI Assistant</p>
              </div>
            </div>
            
            {/* Time & Weather */}
            <div className="flex items-center gap-6">
              <div className="text-right">
                <div className="text-2xl font-bold font-mono tabular-nums">
                  {currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                </div>
                <div className="text-xs text-muted-foreground">
                  {currentTime.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-card/50 rounded-lg border border-primary/20">
                <WeatherIcon className="w-5 h-5 text-primary" />
                <span className="text-lg font-semibold">{weather.temp}°F</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleSpeech}
                className={cn("h-10 w-10 rounded-full", isSpeaking && "bg-primary/20 text-primary")}
              >
                {isSpeaking ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="h-10 w-10 rounded-full hover:bg-destructive/20 hover:text-destructive"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Messages with Advanced Styling */}
        <ScrollArea className="flex-1 p-8" ref={scrollAreaRef}>
          <div className="space-y-6 max-w-3xl mx-auto">
            {messages.map((message, index) => (
              <div
                key={message.id}
                className={cn(
                  "flex gap-3 animate-in fade-in slide-in-from-bottom-2 duration-500",
                  message.sender === 'user' ? "justify-end" : "justify-start"
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {message.sender === 'jarvis' && (
                  <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 mt-1 border border-primary/30">
                    <Bot className="w-5 h-5 text-primary" />
                    {isLoading && index === messages.length - 1 && (
                      <div className="absolute inset-0 rounded-full border-2 border-primary/50 border-t-transparent animate-spin" />
                    )}
                  </div>
                )}
                <div
                  className={cn(
                    "max-w-[75%] rounded-2xl px-5 py-3 text-base backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]",
                    message.sender === 'user'
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "bg-card/80 border border-primary/20 shadow-lg"
                  )}
                >
                  <p className="leading-relaxed">{message.content}</p>
                  <span className="text-xs opacity-60 mt-2 block">
                    {message.timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                {message.sender === 'user' && (
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                    <User className="w-5 h-5" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3 justify-start animate-in fade-in duration-300">
                <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 mt-1 border border-primary/30">
                  <Bot className="w-5 h-5 text-primary" />
                  <div className="absolute inset-0 rounded-full border-2 border-primary/50 border-t-transparent animate-spin" />
                </div>
                <div className="bg-card/80 border border-primary/20 rounded-2xl px-5 py-3 shadow-lg backdrop-blur-sm">
                  <div className="flex gap-2 items-center">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    <span className="text-sm text-muted-foreground ml-2">Processing...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Advanced Input */}
        <div className="p-6 border-t border-primary/20 bg-card/50 backdrop-blur-sm">
          <div className="flex gap-3 max-w-3xl mx-auto">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything..."
              disabled={isLoading}
              className="flex-1 h-12 px-6 bg-background/80 border-2 border-primary/30 rounded-full text-base focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary transition-all"
            />
            <Button
              onClick={sendMessage}
              disabled={!inputValue.trim() || isLoading}
              size="icon"
              className="h-12 w-12 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JarvisChat;