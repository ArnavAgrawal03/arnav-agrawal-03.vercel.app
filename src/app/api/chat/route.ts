import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { RESUME_CONTEXT } from '@/lib/chat-context';

// Add edge runtime
export const runtime = 'edge';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// This would be your resume content and website info
const CONTEXT = `
Instructions: You are an AI assistant representing Arnav Agrawal. Your goal is to help potential clients 
and employers learn more about Arnav Agrawal's skills, experience, and projects. Be enthusiastic but professional, 
and try to highlight relevant experience and achievements. If asked about availability or rates, 
encourage scheduling a meeting through the calendar link.

Do not give out his email. When asked about contact, give this calendar link instead: https://calendly.com/aa779-cornell/ai-data-pipeline-discussion

Keep your responses concise and to the point.

Here is some context about Arnav:

${RESUME_CONTEXT}
`;

export async function POST(req: Request) {
  const apiKey = process.env.OPENAI_API_KEY;
  
  if (!apiKey) {
    return new Response('OpenAI API key not configured', { status: 500 });
  }

  try {
    const { messages } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: CONTEXT },
        ...messages
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    return new NextResponse(
      JSON.stringify({ 
        response: completion.choices[0].message.content 
      }), 
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      }
    );
    
  } catch (error) {
    console.error('Chat API error:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Failed to generate response' }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
}

// Add OPTIONS handler for CORS preflight requests
export async function OPTIONS(request: Request) {
  console.log("OPTIONS request received: ", request);
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
} 