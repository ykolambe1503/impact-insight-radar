
-- Create enum for AI personas
CREATE TYPE public.persona_type AS ENUM ('Gen Z', 'Small Business Owner', 'Tech Enthusiast');

-- Create table for storing AI visibility reports
CREATE TABLE public.reports (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  website_url TEXT NOT NULL,
  persona persona_type NOT NULL,
  chatgpt_response TEXT,
  chatgpt_sentiment_score DECIMAL(5,2),
  gemini_sentiment_score DECIMAL(5,2) DEFAULT 65.0,
  claude_sentiment_score DECIMAL(5,2) DEFAULT 70.0,
  average_sentiment_score DECIMAL(5,2),
  visibility_status TEXT DEFAULT 'Visible',
  optimization_suggestions TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.reports ENABLE ROW LEVEL SECURITY;

-- Create policies for reports table
CREATE POLICY "Users can view their own reports" 
  ON public.reports 
  FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own reports" 
  ON public.reports 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own reports" 
  ON public.reports 
  FOR UPDATE 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own reports" 
  ON public.reports 
  FOR DELETE 
  USING (auth.uid() = user_id);
