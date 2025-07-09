
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  TrendingDown, 
  Eye, 
  Users,
  CheckCircle2,
  XCircle,
  Brain,
  Lightbulb,
  Target,
  ArrowRight,
  FileText,
  Zap
} from 'lucide-react';

const ComprehensiveDashboard: React.FC = () => {
  const location = useLocation();
  const [userDetails, setUserDetails] = useState({
    website: '',
    brandName: '',
    email: '',
    competitors: [] as string[],
    analyzeMode: 'auto'
  });

  useEffect(() => {
    // Extract user details from URL parameters
    const params = new URLSearchParams(location.search);
    const website = params.get('website') || '';
    const brandName = params.get('brand') || '';
    const email = params.get('email') || '';
    const competitorsParam = params.get('competitors') || '[]';
    const analyzeMode = params.get('analyzeMode') || 'auto';
    
    let competitors: string[] = [];
    try {
      competitors = JSON.parse(decodeURIComponent(competitorsParam));
    } catch (e) {
      console.error('Error parsing competitors:', e);
    }

    setUserDetails({
      website,
      brandName,
      email,
      competitors,
      analyzeMode
    });
  }, [location.search]);

  const visibilityScore = 87;
  const change = '+12%';

  const competitorScores = [
    { name: userDetails.brandName || 'Your Brand', score: 87, change: '+12%', trend: 'up', color: '#8b5cf6', gradient: 'from-purple-500 to-purple-600' },
    { name: 'Competitor A', score: 72, change: '+6%', trend: 'up', color: '#10b981', gradient: 'from-emerald-500 to-emerald-600' },
    { name: 'Competitor B', score: 68, change: '-3%', trend: 'down', color: '#f59e0b', gradient: 'from-amber-500 to-amber-600' },
    { name: 'Competitor C', score: 61, change: '+1%', trend: 'up', color: '#ef4444', gradient: 'from-red-500 to-red-600' }
  ];

  const llmMentions = [
    { 
      name: 'ChatGPT', 
      mentioned: true, 
      confidence: 92,
      color: '#10b981',
      description: 'Consistently mentioned in responses'
    },
    { 
      name: 'Claude', 
      mentioned: true, 
      confidence: 88,
      color: '#8b5cf6',
      description: 'Frequently appears in recommendations'
    },
    { 
      name: 'Gemini', 
      mentioned: false, 
      confidence: 0,
      color: '#ef4444',
      description: 'Not mentioned in recent queries'
    },
    { 
      name: 'Grok', 
      mentioned: true, 
      confidence: 75,
      color: '#3b82f6',
      description: 'Occasionally mentioned'
    },
    { 
      name: 'Perplexity', 
      mentioned: false, 
      confidence: 0,
      color: '#ef4444',
      description: 'Limited visibility'
    }
  ];

  const recommendations = [
    {
      title: 'Create AI-Optimized Content',
      description: 'Develop FAQ pages and structured content that AI models can easily reference and cite.',
      priority: 'High',
      impact: 'High',
      effort: 'Medium',
      icon: FileText,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Improve Brand Authority',
      description: 'Publish thought leadership content and case studies to increase credibility in AI responses.',
      priority: 'High',
      impact: 'High',
      effort: 'High',
      icon: Target,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Optimize for Citations',
      description: 'Structure your content with clear headings, bullet points, and quotable statistics.',
      priority: 'Medium',
      impact: 'Medium',
      effort: 'Low',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Monitor Competitor Strategies',
      description: 'Analyze what content competitors are creating that gets them mentioned more frequently.',
      priority: 'Medium',
      impact: 'Medium',
      effort: 'Medium',
      icon: Users,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default: return 'bg-green-500/20 text-green-400 border-green-500/30';
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8 animate-fade-in min-h-screen">
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            AI Impact Analysis
          </h1>
          <p className="text-gray-400 text-lg">
            Brand Visibility Dashboard
          </p>
        </div>

        {/* Main 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Brand Visibility Score */}
            <Card className="bg-gradient-to-br from-black via-gray-900 to-black border-gray-800 backdrop-blur-xl shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-white flex items-center justify-center">
                  <Eye className="w-8 h-8 mr-3 text-purple-400" />
                  Brand Visibility Score
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-6">
                {/* Circular Progress */}
                <div className="relative w-64 h-64 flex items-center justify-center">
                  <svg className="w-64 h-64 transform -rotate-90" viewBox="0 0 256 256">
                    {/* Background circle */}
                    <circle
                      cx="128"
                      cy="128"
                      r="112"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-gray-800/50"
                    />
                    {/* Progress circle */}
                    <circle
                      cx="128"
                      cy="128"
                      r="112"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={`${2 * Math.PI * 112}`}
                      strokeDashoffset={`${2 * Math.PI * 112 * (1 - visibilityScore / 100)}`}
                      className="transition-all duration-1000 ease-out drop-shadow-lg"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="50%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Score Text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      {visibilityScore}
                    </div>
                    <div className="text-lg text-gray-400 mt-2">out of 100</div>
                    <div className="flex items-center mt-3 bg-emerald-400/10 px-3 py-1 rounded-full">
                      <TrendingUp className="w-4 h-4 text-emerald-400 mr-1" />
                      <span className="text-emerald-400 font-medium">{change}</span>
                    </div>
                  </div>
                </div>

                {/* Score Description */}
                <div className="text-center space-y-2">
                  <p className="text-gray-300 text-lg">
                    {visibilityScore >= 80 ? 'Excellent' : visibilityScore >= 60 ? 'Good' : visibilityScore >= 40 ? 'Fair' : 'Needs Improvement'} Visibility
                  </p>
                  <p className="text-gray-500 text-sm">
                    Your brand appears in {visibilityScore}% of relevant AI responses
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* LLM Mentions Status */}
            <Card className="bg-gradient-to-br from-black via-gray-900 to-black border-gray-800 backdrop-blur-xl shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white flex items-center">
                  <Brain className="w-6 h-6 mr-3 text-blue-400" />
                  AI Model Coverage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {llmMentions.map((llm, index) => (
                    <div key={index} className="bg-gray-900/30 border border-gray-800/50 p-4 rounded-lg hover:bg-gray-900/50 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className="relative">
                            {llm.mentioned ? (
                              <CheckCircle2 className="w-6 h-6 text-emerald-400 drop-shadow-lg" />
                            ) : (
                              <XCircle className="w-6 h-6 text-red-400" />
                            )}
                            {llm.mentioned && (
                              <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
                            )}
                          </div>
                          <div>
                            <h4 className="text-white font-semibold text-lg">{llm.name}</h4>
                            <p className="text-gray-400 text-sm">{llm.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-xl font-bold ${llm.mentioned ? 'text-emerald-400' : 'text-red-400'}`}>
                            {llm.mentioned ? `${llm.confidence}%` : 'No'}
                          </div>
                          <div className="text-xs text-gray-400">
                            {llm.mentioned ? 'Confidence' : 'Mentions'}
                          </div>
                        </div>
                      </div>
                      
                      {llm.mentioned && (
                        <div className="mt-3">
                          <div className="w-full bg-gray-800/50 rounded-full h-2 shadow-inner">
                            <div 
                              className="h-2 rounded-full transition-all duration-1000 ease-out bg-gradient-to-r from-emerald-500 to-emerald-400 shadow-lg shadow-emerald-500/30"
                              style={{ width: `${llm.confidence}%` }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Summary */}
                <div className="mt-6 p-4 bg-gray-900/30 border border-gray-800/50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 font-medium">Coverage Rate</span>
                    <span className="text-white font-bold text-lg">
                      {llmMentions.filter(llm => llm.mentioned).length} / {llmMentions.length} Models
                    </span>
                  </div>
                  <div className="w-full bg-gray-800/50 rounded-full h-3 mt-2 shadow-inner">
                    <div 
                      className="h-3 rounded-full transition-all duration-1000 ease-out bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/30"
                      style={{ width: `${(llmMentions.filter(llm => llm.mentioned).length / llmMentions.length) * 100}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Competitors Visibility */}
            <Card className="bg-gradient-to-br from-black via-gray-900 to-black border-gray-800 backdrop-blur-xl shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center">
                  <Users className="w-8 h-8 mr-3 text-blue-400" />
                  Competitive Landscape
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {competitorScores.map((competitor, index) => (
                    <div key={index} className="bg-gray-900/30 border border-gray-800/50 p-4 rounded-lg hover:bg-gray-900/50 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div 
                            className={`w-4 h-4 rounded-full bg-gradient-to-r ${competitor.gradient} shadow-lg`}
                            style={{ boxShadow: `0 0 8px ${competitor.color}40` }}
                          />
                          <h4 className="text-white font-semibold text-lg">{competitor.name}</h4>
                          {index === 0 && (
                            <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                              You
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={`${competitor.trend === 'up' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : 'bg-red-500/20 text-red-400 border-red-500/30'}`}>
                            {competitor.trend === 'up' ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                            {competitor.change}
                          </Badge>
                          <div className="text-white font-bold text-2xl">{competitor.score}</div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="w-full bg-gray-800/50 rounded-full h-3 shadow-inner">
                          <div 
                            className={`h-3 rounded-full transition-all duration-1000 ease-out bg-gradient-to-r ${competitor.gradient} shadow-lg`}
                            style={{ 
                              width: `${competitor.score}%`,
                              boxShadow: `0 0 8px ${competitor.color}40`
                            }}
                          />
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Visibility Score</span>
                          <span className="text-white font-medium">{competitor.score}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Summary Stats */}
                <div className="mt-8 p-4 bg-gray-900/30 border border-gray-800/50 rounded-lg">
                  <h4 className="text-white font-semibold mb-3">Market Position</h4>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-purple-400">
                        #{competitorScores.findIndex(c => c.name === (userDetails.brandName || 'Your Brand')) + 1}
                      </div>
                      <div className="text-xs text-gray-400">Market Rank</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-400">
                        {Math.max(0, competitorScores[0].score - competitorScores[1].score)}
                      </div>
                      <div className="text-xs text-gray-400">Point Lead</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommendations Section */}
            <Card className="bg-gradient-to-br from-black via-gray-900 to-black border-gray-800 backdrop-blur-xl shadow-2xl shadow-green-500/10 hover:shadow-green-500/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center">
                  <Lightbulb className="w-8 h-8 mr-3 text-green-400" />
                  Improvement Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recommendations.map((rec, index) => (
                    <div key={index} className="bg-gray-900/30 border border-gray-800/50 p-4 rounded-lg hover:bg-gray-900/50 transition-all duration-300 animate-fade-in group" style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="flex items-start space-x-3 mb-3">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${rec.color} flex items-center justify-center shadow-lg`}>
                          <rec.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold text-lg mb-1">{rec.title}</h4>
                          <p className="text-gray-400 text-sm leading-relaxed">{rec.description}</p>
                        </div>
                        <Badge className={getPriorityColor(rec.priority)}>
                          {rec.priority}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex space-x-4 text-xs">
                          <div className="flex items-center space-x-1">
                            <span className="text-gray-500">Impact:</span>
                            <span className="text-white font-medium">{rec.impact}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <span className="text-gray-500">Effort:</span>
                            <span className="text-white font-medium">{rec.effort}</span>
                          </div>
                        </div>
                        <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 group-hover:scale-105 transition-transform">
                          Apply
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Summary */}
                <div className="mt-6 p-4 bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-500/30 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-semibold">Quick Wins Available</h4>
                      <p className="text-gray-300 text-sm">
                        {recommendations.filter(r => r.effort === 'Low').length} low-effort actions could boost your score by 15-20 points
                      </p>
                    </div>
                    <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                      Start Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ComprehensiveDashboard;
