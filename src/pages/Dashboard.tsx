
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Brain, TrendingUp, Eye, Target, Sparkles, Search, Bot, Zap } from 'lucide-react';

const Dashboard = () => {
  const visibilityData = [
    { name: 'ChatGPT', score: 85, traffic: 2200, change: '+4%', color: '#10b981' },
    { name: 'Claude', score: 78, traffic: 1800, change: '+3%', color: '#8b5cf6' },
    { name: 'Gemini', score: 65, traffic: 1200, change: '+2%', color: '#f59e0b' },
    { name: 'Perplexity', score: 72, traffic: 950, change: '+5%', color: '#06b6d4' },
    { name: 'Groq', score: 58, traffic: 400, change: '+1%', color: '#ef4444' }
  ];

  const overallScore = Math.round(visibilityData.reduce((acc, item) => acc + item.score, 0) / visibilityData.length);

  const pieData = [
    { name: 'Visible', value: overallScore, color: '#10b981' },
    { name: 'Not Visible', value: 100 - overallScore, color: '#e5e7eb' }
  ];

  const improvementSuggestions = [
    {
      icon: <Brain className="w-5 h-5 text-purple-400" />,
      title: "Expand content targeting AI search and generative AI queries",
      description: "Related to travel industry analytics and AI visibility optimization."
    },
    {
      icon: <Target className="w-5 h-5 text-green-400" />,
      title: "Publish case studies demonstrating AI visibility wins",
      description: "Showcase recovery stories for travel brands and AI marketing success."
    },
    {
      icon: <Zap className="w-5 h-5 text-yellow-400" />,
      title: "Optimize landing pages with structured data and schema",
      description: "Increase AI model recognition and improve content understanding."
    },
    {
      icon: <Bot className="w-5 h-5 text-blue-400" />,
      title: "Engage in partnerships or guest posts on authoritative sites",
      description: "Build authority signals that AI models can recognize and trust."
    },
    {
      icon: <Eye className="w-5 h-5 text-pink-400" />,
      title: "Monitor and respond to mentions in AI-generated summaries",
      description: "Correct or enhance brand representation across AI platforms."
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-orange-400" />,
      title: "Develop prompt libraries and tools for marketers",
      description: "Create resources to experiment with AI search outcomes."
    }
  ];

  const platformStats = [
    { name: 'Totals', users: '180+ Million', type: 'Aggregated', icon: '🔍' },
    { name: 'ChatGPT', users: '122.6 Million', type: 'OpenAI', icon: '🤖' },
    { name: 'Gemini', users: '35 Million', type: 'Google', icon: '💎' },
    { name: 'Perplexity', users: '15 Million', type: 'Coming Soon', icon: '🔮' },
    { name: 'Groq', users: '2.1 Million', type: 'Coming Soon', icon: '⚡' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">AI Visibility Dashboard</h1>
            <p className="text-gray-300">Monitor your brand's presence across AI platforms</p>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            <Sparkles className="w-4 h-4 mr-2" />
            Generate New Report
          </Button>
        </div>

        {/* Main Stats Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* AI Visibility Score */}
          <Card className="bg-slate-800/50 border-slate-700 col-span-1">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white flex items-center">
                  <Eye className="w-5 h-5 mr-2 text-purple-400" />
                  AI Visibility Score
                </CardTitle>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Powered by AI
                </Badge>
              </div>
              <p className="text-gray-400 text-sm">See how you stack up against competitors</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={45}
                        outerRadius={60}
                        paddingAngle={5}
                        dataKey="value"
                        startAngle={90}
                        endAngle={450}
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{overallScore}</div>
                      <div className="text-xs text-gray-400">/100</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {visibilityData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-gray-300 text-sm">{item.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-semibold">{item.score}</span>
                      <span className="text-green-400 text-xs">{item.change}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI Traffic Estimates */}
          <Card className="bg-slate-800/50 border-slate-700 col-span-1">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                AI Traffic Estimates
              </CardTitle>
              <p className="text-gray-400 text-sm">Monthly visitors from LLM citations</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">1,247</div>
                <div className="text-green-400 text-sm flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +12% this month
                </div>
                <div className="text-gray-400 text-xs mt-1">monthly visitors (estimated)</div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">Top Competitor Traffic</span>
                    <span className="text-white">2,200</span>
                  </div>
                  <div className="bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: '65%' }} />
                  </div>
                </div>

                <div className="space-y-3">
                  {visibilityData.slice(0, 3).map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-300 text-sm">{item.name}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-white font-semibold">{item.traffic.toLocaleString()}</span>
                        <span className="text-green-400 text-xs">{item.change}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900/50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-yellow-400 font-semibold">💰 Traffic Value</span>
                  <span className="text-white font-bold">$847/mo</span>
                </div>
                <p className="text-gray-400 text-xs">
                  Estimated value based on organic exposure in AI-powered summaries and tool lists.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Platform Stats */}
          <Card className="bg-slate-800/50 border-slate-700 col-span-1">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Bot className="w-5 h-5 mr-2 text-blue-400" />
                Platform Coverage
              </CardTitle>
              <p className="text-gray-400 text-sm">Daily active users across AI platforms</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {platformStats.map((platform, index) => (
                <div key={index} className="bg-slate-900/50 p-3 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{platform.icon}</span>
                      <div>
                        <div className="text-white font-semibold">{platform.name}</div>
                        <div className="text-gray-400 text-xs">{platform.type}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-bold">{platform.users}</div>
                      <div className="text-gray-400 text-xs">Daily Active Users</div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Improvement Suggestions */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-white flex items-center">
                  <Target className="w-5 h-5 mr-2 text-yellow-400" />
                  🎯 Fix These to Climb LLM Rankings Faster
                </CardTitle>
                <p className="text-gray-400 text-sm mt-2">Prioritized recommendations to improve your AI impact</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {improvementSuggestions.map((suggestion, index) => (
                <div key={index} className="bg-slate-900/50 p-4 rounded-lg hover:bg-slate-900/70 transition-colors">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      {suggestion.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-2">{suggestion.title}</h4>
                      <p className="text-gray-400 text-sm">{suggestion.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Analyzed Prompts Section */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Analyzed Prompts</CardTitle>
            <div className="flex items-center space-x-2">
              <Input 
                placeholder="Search Prompts..." 
                className="bg-slate-900/50 border-slate-600 text-white placeholder-gray-400 max-w-md"
              />
              <Button variant="outline" className="border-slate-600 text-gray-300 hover:bg-slate-700">
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-900/50 p-4 rounded-lg">
              <div className="grid grid-cols-5 gap-4 text-sm text-gray-400 mb-4">
                <div>MODEL</div>
                <div>PROMPT</div>
                <div>AVG. POS</div>
                <div>VISIBILITY</div>
                <div>SCORE</div>
              </div>
              <div className="grid grid-cols-5 gap-4 items-center py-3 border-t border-slate-700">
                <div className="flex items-center space-x-2">
                  <Bot className="w-4 h-4 text-purple-400" />
                  <span className="text-white">ChatGPT</span>
                </div>
                <div className="text-gray-300 text-sm">How can I find out which competitors are outranking my website?</div>
                <div className="text-white">N/A</div>
                <div className="text-red-400">0%</div>
                <div className="text-white font-bold">0</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
