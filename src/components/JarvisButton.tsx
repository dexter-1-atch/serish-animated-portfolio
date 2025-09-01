import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Bot } from 'lucide-react';
import JarvisChat from './JarvisChat';

const JarvisButton: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsChatOpen(true)}
        size="lg"
        className="fixed bottom-6 right-6 z-40 rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90 group"
      >
        <Bot className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
        <span className="sr-only">Chat with Jarvis</span>
      </Button>

      <JarvisChat 
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
    </>
  );
};

export default JarvisButton;