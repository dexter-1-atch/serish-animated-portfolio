import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { X, Send, Bot, User } from 'lucide-react';
import { cn } from '@/lib/utils';

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
      content: "Hello! I'm Jarvis, Serish's AI assistant. I can answer any questions about Serish, his skills, projects, or background. How can I help you learn more about him?",
      sender: 'jarvis',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

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
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer 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`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama3-8b-8192',
          messages: [
            {
              role: 'system',
              content: `You are Jarvis, an AI assistant created by Serish. Your purpose is to help people learn about Serish and his work. Here's what you know about Serish:

- He is a software developer and student at Woburn Collegiate Institute
- He specializes in modern web development with React, TypeScript, and full-stack technologies
- His projects include: E-commerce Dashboard (React, TypeScript, modern animations), Jarvis AI Project (Natural language processing, machine learning), ML Platform (Python, TensorFlow, data visualization), and Task Management System (Real-time collaboration, efficient workflow)
- He has skills in: JavaScript, TypeScript, React, Node.js, Python, Java, HTML/CSS, Git, MongoDB, PostgreSQL, Docker, AWS, Machine Learning, Data Analysis
- He is passionate about creating innovative solutions and has experience with AI/ML projects

IMPORTANT RULES:
1. Always identify yourself as "Jarvis, created by Serish"
2. Only answer questions about Serish, his projects, skills, or background
3. If asked about general knowledge, unrelated topics, or anything not about Serish, respond with: "Sir, even though I have the ability to answer that, I'm designed to serve only Serish's purposes. Please ask me anything about Serish instead."
4. Be helpful, professional, and enthusiastic about Serish's work
5. Keep responses concise but informative
6. If you don't have specific information about something Serish-related, say so honestly`
            },
            {
              role: 'user',
              content: userMessage.content
            }
          ],
          temperature: 0.7,
          max_tokens: 300
        })
      });

      const data = await response.json();
      
      if (data.choices && data.choices[0]) {
        const jarvisMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: data.choices[0].message.content,
          sender: 'jarvis',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, jarvisMessage]);
      } else {
        throw new Error('Invalid response format');
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

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-end p-4 pointer-events-none">
      <div className="bg-card border border-border rounded-lg shadow-2xl w-96 h-[500px] flex flex-col pointer-events-auto animate-in slide-in-from-bottom-2 duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-primary/5 rounded-t-lg">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Bot className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Jarvis</h3>
              <p className="text-xs text-muted-foreground">Serish's AI Assistant</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex gap-2",
                  message.sender === 'user' ? "justify-end" : "justify-start"
                )}
              >
                {message.sender === 'jarvis' && (
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="w-3 h-3 text-primary" />
                  </div>
                )}
                <div
                  className={cn(
                    "max-w-[80%] rounded-lg px-3 py-2 text-sm",
                    message.sender === 'user'
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  )}
                >
                  {message.content}
                </div>
                {message.sender === 'user' && (
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-1">
                    <User className="w-3 h-3" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-2 justify-start">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Bot className="w-3 h-3 text-primary" />
                </div>
                <div className="bg-muted rounded-lg px-3 py-2 text-sm">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Input */}
        <div className="p-4 border-t border-border">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about Serish..."
              disabled={isLoading}
              className="flex-1"
            />
            <Button
              onClick={sendMessage}
              disabled={!inputValue.trim() || isLoading}
              size="icon"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JarvisChat;