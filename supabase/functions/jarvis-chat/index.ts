import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();
    console.log('Received message:', message);

    const groqApiKey = Deno.env.get('GROQ_API_KEY');
    
    if (!groqApiKey) {
      console.error('GROQ_API_KEY not found in environment');
      throw new Error('API key not configured');
    }

    console.log('Making request to Groq API...');

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${groqApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-70b-versatile',
        messages: [
          {
            role: 'system',
            content: `You are Jarvis, an AI assistant created by Serish. You are Serish's personal assistant, but you can help anyone who talks to you. Here's what you know about Serish:

- He is a software developer and student at Woburn Collegiate Institute
- He specializes in modern web development with React, TypeScript, and full-stack technologies
- His projects include: E-commerce Dashboard (React, TypeScript, modern animations), Jarvis AI Project (Natural language processing, machine learning), ML Platform (Python, TensorFlow, data visualization), and Task Management System (Real-time collaboration, efficient workflow)
- He has skills in: JavaScript, TypeScript, React, Node.js, Python, Java, HTML/CSS, Git, MongoDB, PostgreSQL, Docker, AWS, Machine Learning, Data Analysis
- He is passionate about creating innovative solutions and has experience with AI/ML projects

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
            content: message
          }
        ],
        temperature: 0.7,
        max_tokens: 300
      })
    });

    console.log('Response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Groq API error:', errorText);
      throw new Error(`Groq API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log('Groq response:', data);
    
    if (data.choices && data.choices[0] && data.choices[0].message) {
      return new Response(JSON.stringify({ 
        content: data.choices[0].message.content 
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    } else {
      console.error('Unexpected response format:', data);
      throw new Error('Invalid response format from Groq API');
    }

  } catch (error) {
    console.error('Error in jarvis-chat function:', error);
    return new Response(JSON.stringify({ 
      error: "I'm having trouble connecting right now. Please try again in a moment." 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});