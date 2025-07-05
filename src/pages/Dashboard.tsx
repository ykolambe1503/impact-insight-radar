
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import MetricCard from '@/components/dashboard/MetricCard';
import VisibilityChart from '@/components/dashboard/VisibilityChart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Eye, 
  TrendingUp, 
  Bot, 
  Target, 
  Sparkles, 
  AlertCircle,
  ArrowUpRight,
  Brain,
  Zap
} from 'lucide-react';

const Dashboard = () => {
  const visibilityData = [
    { name: 'ChatGPT', score: 85, color: '#10b981' },
    { name: 'Claude', score: 78, color: '#8b5cf6' },
    { name: 'Gemini', score: 72, color: '#f59e0b' },
    { name: 'Perplexity', score: 65, color: '#06b6d4' },
    { name: 'Groq', score: 58, color: '#ef4444' }
  ];

  const overallScore = Math.round(visibilityData.reduce((acc, item) => acc + item.score, 0) / visibilityData.length);

  const improvements = [
    {
      title: "Optimize Content for AI Search",
      description: "Target generative AI queries with structured content",
      priority: "High",
      impact: 85
    },
    {
      title: "Build Authority Signals",
      description: "Increase backlinks and domain authority",
      priority: "Medium", 
      impact: 72
    },
    {
      title: "Schema Markup Enhancement",
      description: "Improve structured data for better AI understanding",
      priority: "High",
      impact: 68
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Key Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="AI Visibility Score"
            value={overallScore}
            change="+5.2%"
            changeType="positive"
            icon={Eye}
            iconColor="text-purple-400"
            description="Overall visibility across AI platforms"
            className="bg-gradient-to-r from-purple-800/20 to-slate-900/20 border-purple-600/20 hover:bg-gradient-to-r hover:from-purple-700/20 hover:to-slate-800/20"
          >
            <Progress value={overallScore} className="h-2 bg-gradient-to-r from-purple-400 to-purple-500" />
          </MetricCard>

          <MetricCard
            title="Monthly AI Traffic"
            value="2,847"
            change="+12.4%"
            changeType="positive"
            icon={TrendingUp}
            iconColor="text-green-400"
            description="Estimated visitors from AI citations"
            className="bg-gradient-to-r from-green-800/20 to-slate-900/20 border-green-600/20 hover:bg-gradient-to-r hover:from-green-700/20 hover:to-slate-800/20"
          />

          <MetricCard
            title="Platform Coverage"
            value="5/7"
            change="2 new"
            changeType="positive"
            icon={Bot}
            iconColor="text-blue-400"
            description="AI platforms monitoring"
            className="bg-gradient-to-r from-blue-800/20 to-slate-900/20 border-blue-600/20 hover:bg-gradient-to-r hover:from-blue-700/20 hover:to-slate-800/20"
          />

          <MetricCard
            title="Traffic Value"
            value="$1,247"
            change="+8.3%"
            changeType="positive"
            icon={Target}
            iconColor="text-yellow-400"
            description="Estimated monthly value"
            className="bg-gradient-to-r from-yellow-800/20 to-slate-900/20 border-yellow-600/20 hover:bg-gradient-to-r hover:from-yellow-700/20 hover:to-slate-800/20"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Visibility Breakdown */}
          <Card className="bg-slate-800/60 border-slate-700">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-purple-400" />
                  Platform Visibility
                </CardTitle>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  Live Data
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="bg-slate-900/20 border-slate-800/20">
              <VisibilityChart data={visibilityData} type="bar" />
            </CardContent>
          </Card>

          {/* Performance Trends */}
          <Card className="bg-slate-800/60 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                Performance Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <VisibilityChart data={visibilityData} type="pie" />
            </CardContent>
          </Card>
        </div>

        {/* Detailed Platform Stats */}
        <Card className="bg-slate-800/60 border-slate-700">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-white">Platform Performance</CardTitle>
              <Button variant="outline" size="sm" className="border-slate-600 text-gray-300">
                View Details
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {visibilityData.map((platform, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: platform.color }}
                    />
                    <div>
                      <h4 className="text-white font-semibold">{platform.name}</h4>
                      <p className="text-gray-400 text-sm">AI Language Model</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-white font-bold">{platform.score}%</div>
                      <div className="text-gray-400 text-xs">Visibility</div>
                    </div>
                    <div className="w-20">
                      <Progress value={platform.score} className="h-2" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Improvement Recommendations */}
        <Card className="bg-slate-800/60 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Brain className="w-5 h-5 mr-2 text-yellow-400" />
              AI Impact Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {improvements.map((item, index) => (
                <div key={index} className="bg-slate-900/50 p-4 rounded-lg hover:bg-slate-900/70 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <Badge 
                      className={`${
                        item.priority === 'High' 
                          ? 'bg-red-500/20 text-red-400 border-red-500/30'
                          : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                      }`}
                    >
                      {item.priority}
                    </Badge>
                    <Zap className="w-4 h-4 text-purple-400" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Impact Score</span>
                    <span className="text-white font-bold">{item.impact}%</span>
                  </div>
                  <Progress value={item.impact} className="h-1 mt-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
