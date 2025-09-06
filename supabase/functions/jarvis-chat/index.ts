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
    console.log('Starting jarvis-chat function');
    
    // Parse the request body
    let requestBody;
    try {
      requestBody = await req.json();
      console.log('Request body:', requestBody);
    } catch (e) {
      console.error('Failed to parse request body:', e);
      throw new Error('Invalid JSON in request body');
    }

    const { message } = requestBody;
    
    if (!message) {
      console.error('No message provided in request');
      throw new Error('Message is required');
    }

    console.log('Received message:', message);

    const groqApiKey = Deno.env.get('GROQ_API_KEY');
    
    if (!groqApiKey) {
      console.error('GROQ_API_KEY not found in environment');
      throw new Error('API key not configured');
    }

    console.log('GROQ_API_KEY found, making request to Groq API...');

    const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${groqApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama3-8b-8192',
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

    console.log('Groq API response status:', groqResponse.status);

    if (!groqResponse.ok) {
      const errorText = await groqResponse.text();
      console.error('Groq API error response:', errorText);
      throw new Error(`Groq API error: ${groqResponse.status} - ${errorText}`);
    }

    const data = await groqResponse.json();
    console.log('Groq response data:', JSON.stringify(data, null, 2));
    
    if (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) {
      const responseData = { 
        content: data.choices[0].message.content 
      };
      
      console.log('Returning success response:', responseData);
      
      return new Response(JSON.stringify(responseData), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200
      });
    } else {
      console.error('Unexpected response format from Groq:', data);
      throw new Error('Invalid response format from Groq API');
    }

  } catch (error) {
    console.error('Error in jarvis-chat function:', error);
    console.error('Error stack:', error.stack);
    
    const errorResponse = { 
      error: "I'm having trouble connecting right now. Please try again in a moment." 
    };
    
    return new Response(JSON.stringify(errorResponse), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});