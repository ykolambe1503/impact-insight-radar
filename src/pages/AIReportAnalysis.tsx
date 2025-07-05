
import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, LineChart, Line } from 'recharts';
import { CheckCircle, AlertCircle, TrendingUp, Brain, Zap, Target } from 'lucide-react';

const AIReportAnalysis = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const website = searchParams.get('website') || 'your website';
  
  const [analysisStage, setAnalysisStage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const analysisStages = [
    { name: 'ChatGPT', description: 'Analyzing content optimization...', color: 'bg-green-500' },
    { name: 'Claude', description: 'Evaluating user experience...', color: 'bg-orange-500' },
    { name: 'Gemini', description: 'Assessing technical performance...', color: 'bg-blue-500' },
    { name: 'Groq', description: 'Processing sentiment analysis...', color: 'bg-purple-500' }
  ];

  const chartConfig = {
    chatgpt: { label: 'ChatGPT', color: '#10b981' },
    claude: { label: 'Claude', color: '#f97316' },
    gemini: { label: 'Gemini', color: '#3b82f6' },
    groq: { label: 'Groq', color: '#8b5cf6' }
  };

  const sentimentData = [
    { llm: 'ChatGPT', score: 8.5 },
    { llm: 'Claude', score: 7.8 },
    { llm: 'Gemini', score: 8.2 },
    { llm: 'Groq', score: 7.5 }
  ];

  const radarData = [
    { metric: 'Content Quality', chatgpt: 85, claude: 78, gemini: 82, groq: 75 },
    { metric: 'User Experience', chatgpt: 75, claude: 88, gemini: 80, groq: 72 },
    { metric: 'Technical SEO', chatgpt: 82, claude: 75, gemini: 90, groq: 78 },
    { metric: 'Readability', chatgpt: 88, claude: 85, gemini: 83, groq: 80 },
    { metric: 'Engagement', chatgpt: 78, claude: 82, gemini: 85, groq: 88 }
  ];

  const trendData = [
    { month: 'Jan', visibility: 45 },
    { month: 'Feb', visibility: 52 },
    { month: 'Mar', visibility: 48 },
    { month: 'Apr', visibility: 61 },
    { month: 'May', visibility: 55 },
    { month: 'Jun', visibility: 67 }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setShowResults(true), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    const stageTimer = setInterval(() => {
      setAnalysisStage(prev => {
        if (prev >= analysisStages.length - 1) {
          clearInterval(stageTimer);
          return prev;
        }
        return prev + 1;
      });
    }, 2500);

    return () => {
      clearInterval(timer);
      clearInterval(stageTimer);
    };
  }, []);

  if (!showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full space-y-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/20 animate-pulse">
              <Brain className="w-8 h-8 text-purple-400" />
            </div>
            <h1 className="text-3xl font-bold text-white">Analyzing Your AI Visibility</h1>
            <p className="text-gray-300">Running comprehensive analysis across leading AI models</p>
          </div>

          <div className="space-y-6">
            <Progress value={progress} className="h-2" />
            
            <div className="grid grid-cols-2 gap-4">
              {analysisStages.map((stage, index) => (
                <Card key={stage.name} className={`bg-slate-800/50 border-slate-700 transition-all duration-500 ${
                  index <= analysisStage ? 'ring-2 ring-purple-500/50' : ''
                }`}>
                  <CardContent className="p-4 flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${stage.color} ${
                      index <= analysisStage ? 'animate-pulse' : 'opacity-30'
                    }`} />
                    <div>
                      <h3 className="font-semibold text-white">{stage.name}</h3>
                      <p className="text-sm text-gray-400">{stage.description}</p>
                    </div>
                    {index < analysisStage && (
                      <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 pt-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20">
            <CheckCircle className="w-8 h-8 text-green-400" />
          </div>
          <h1 className="text-4xl font-bold text-white">AI Visibility Report Complete</h1>
          <p className="text-gray-300 text-lg">Analysis results for {website}</p>
        </div>

        {/* Overall Score */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <Target className="w-6 h-6 text-purple-400" />
              <span>Overall AI Visibility Score</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              <div className="text-6xl font-bold text-purple-400">7.9</div>
              <p className="text-gray-300">Out of 10 - Good performance with room for improvement</p>
            </div>
          </CardContent>
        </Card>

        {/* Charts Section */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Sentiment Scores */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">AI Model Sentiment Scores</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={sentimentData}>
                    <XAxis dataKey="llm" tick={{ fill: '#9ca3af' }} />
                    <YAxis tick={{ fill: '#9ca3af' }} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="score" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Performance Radar */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Performance Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="#374151" />
                    <PolarAngleAxis dataKey="metric" tick={{ fill: '#9ca3af', fontSize: 12 }} />
                    <PolarRadiusAxis tick={{ fill: '#9ca3af' }} domain={[0, 100]} />
                    <Radar name="Average" dataKey="chatgpt" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.3} />
                  </RadarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Visibility Trend */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <TrendingUp className="w-6 h-6 text-green-400" />
              <span>AI Visibility Trend</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trendData}>
                  <XAxis dataKey="month" tick={{ fill: '#9ca3af' }} />
                  <YAxis tick={{ fill: '#9ca3af' }} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="visibility" stroke="#10b981" strokeWidth={3} dot={{ fill: '#10b981', r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <Zap className="w-6 h-6 text-yellow-400" />
              <span>AI Impact Improvement Recommendations</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  <h3 className="font-semibold text-white">High Priority</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Optimize content structure for Claude's preference</li>
                  <li>• Improve technical SEO signals</li>
                  <li>• Enhance mobile responsiveness</li>
                </ul>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <AlertCircle className="w-5 h-5 text-yellow-400" />
                  <h3 className="font-semibold text-white">Medium Priority</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Add more semantic HTML elements</li>
                  <li>• Improve content readability scores</li>
                  <li>• Optimize image alt text</li>
                </ul>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <h3 className="font-semibold text-white">Low Priority</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Fine-tune meta descriptions</li>
                  <li>• Add structured data markup</li>
                  <li>• Optimize loading speeds</li>
                </ul>
              </div>
            </div>
            
            <div className="pt-6 border-t border-slate-700">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                  onClick={() => navigate('/dashboard')}
                >
                  View Full Dashboard
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-slate-600 text-white hover:bg-slate-700"
                  onClick={() => navigate('/')}
                >
                  Back to Home
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AIReportAnalysis;
