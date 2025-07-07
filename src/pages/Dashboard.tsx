
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
  Zap,
  Clock,
  Users,
  Globe,
  Calendar,
  MessageSquare,
  BarChart3,
  CheckCircle,
  XCircle,
  AlertTriangle
} from 'lucide-react';

const Dashboard = () => {
  const visibilityData = [
    { name: 'ChatGPT', score: 85, color: '#10b981' },
    { name: 'Claude', score: 78, color: '#8b5cf6' },
    { name: 'Gemini', score: 72, color: '#f59e0b' },
    { name: 'Perplexity', score: 65, color: '#06b6d4' },
    { name: 'Groq', score: 58, color: '#ef4444' }
  ];

  // Weekly performance trend data
  const weeklyTrendData = [
    { name: 'Mon', visibility: 72, traffic: 45, citations: 12 },
    { name: 'Tue', visibility: 75, traffic: 52, citations: 15 },
    { name: 'Wed', visibility: 78, traffic: 61, citations: 18 },
    { name: 'Thu', visibility: 82, traffic: 68, citations: 22 },
    { name: 'Fri', visibility: 85, traffic: 74, citations: 25 },
    { name: 'Sat', visibility: 80, traffic: 58, citations: 20 },
    { name: 'Sun', visibility: 77, traffic: 48, citations: 16 }
  ];

  // Geographic distribution data
  const geographicData = [
    { region: 'North America', percentage: 45, color: '#10b981' },
    { region: 'Europe', percentage: 28, color: '#8b5cf6' },
    { region: 'Asia Pacific', percentage: 18, color: '#f59e0b' },
    { region: 'Others', percentage: 9, color: '#06b6d4' }
  ];

  // Analyzed prompts data per LLM
  const promptAnalysisData = [
    {
      platform: 'ChatGPT',
      totalPrompts: 1247,
      categories: {
        'Technical Questions': { count: 423, successRate: 92, avgQuality: 4.6 },
        'Creative Writing': { count: 298, successRate: 87, avgQuality: 4.3 },
        'Code Generation': { count: 267, successRate: 94, avgQuality: 4.7 },
        'Data Analysis': { count: 189, successRate: 89, avgQuality: 4.4 },
        'General Knowledge': { count: 70, successRate: 91, avgQuality: 4.5 }
      },
      color: '#10b981'
    },
    {
      platform: 'Claude',
      totalPrompts: 987,
      categories: {
        'Technical Questions': { count: 342, successRate: 90, avgQuality: 4.5 },
        'Creative Writing': { count: 276, successRate: 93, avgQuality: 4.8 },
        'Code Generation': { count: 198, successRate: 88, avgQuality: 4.4 },
        'Data Analysis': { count: 134, successRate: 91, avgQuality: 4.6 },
        'General Knowledge': { count: 37, successRate: 89, avgQuality: 4.3 }
      },
      color: '#8b5cf6'
    },
    {
      platform: 'Gemini',
      totalPrompts: 756,
      categories: {
        'Technical Questions': { count: 267, successRate: 85, avgQuality: 4.2 },
        'Creative Writing': { count: 189, successRate: 82, avgQuality: 4.1 },
        'Code Generation': { count: 156, successRate: 87, avgQuality: 4.3 },
        'Data Analysis': { count: 98, successRate: 88, avgQuality: 4.4 },
        'General Knowledge': { count: 46, successRate: 84, avgQuality: 4.0 }
      },
      color: '#f59e0b'
    },
    {
      platform: 'Perplexity',
      totalPrompts: 623,
      categories: {
        'Technical Questions': { count: 198, successRate: 88, avgQuality: 4.3 },
        'Creative Writing': { count: 134, successRate: 79, avgQuality: 3.9 },
        'Code Generation': { count: 112, successRate: 85, avgQuality: 4.2 },
        'Data Analysis': { count: 89, successRate: 92, avgQuality: 4.5 },
        'General Knowledge': { count: 90, successRate: 87, avgQuality: 4.1 }
      },
      color: '#06b6d4'
    }
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

  // Recent activity data
  const recentActivity = [
    { platform: 'ChatGPT', action: 'New citation', time: '2 hours ago', type: 'positive' },
    { platform: 'Claude', action: 'Ranking improved', time: '5 hours ago', type: 'positive' },
    { platform: 'Gemini', action: 'Content indexed', time: '1 day ago', type: 'neutral' },
    { platform: 'Perplexity', action: 'Visibility drop', time: '2 days ago', type: 'negative' }
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
          {/* Platform Visibility Breakdown */}
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
            <CardContent>
              <VisibilityChart data={visibilityData} type="bar" />
            </CardContent>
          </Card>

          {/* Weekly Performance Trends */}
          <Card className="bg-slate-800/60 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                Weekly Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <VisibilityChart data={weeklyTrendData} type="line" />
            </CardContent>
          </Card>
        </div>

        {/* Analyzed Prompts per LLM Section */}
        <Card className="bg-slate-800/60 border-slate-700">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-white flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-cyan-400" />
                Analyzed Prompts per LLM
              </CardTitle>
              <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                Last 30 Days
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {promptAnalysisData.map((platform, index) => (
                <div key={index} className="bg-slate-900/50 p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: platform.color }}
                      />
                      <h3 className="text-white font-semibold text-lg">{platform.platform}</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{platform.totalPrompts.toLocaleString()}</div>
                      <div className="text-xs text-gray-400">Total Prompts</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {Object.entries(platform.categories).map(([category, data], categoryIndex) => (
                      <div key={categoryIndex} className="bg-slate-800/50 p-3 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-sm font-medium text-gray-300">{category}</h4>
                          <div className="flex items-center space-x-2">
                            {data.successRate >= 90 ? (
                              <CheckCircle className="w-4 h-4 text-green-400" />
                            ) : data.successRate >= 80 ? (
                              <AlertTriangle className="w-4 h-4 text-yellow-400" />
                            ) : (
                              <XCircle className="w-4 h-4 text-red-400" />
                            )}
                            <span className="text-xs text-gray-400">{data.successRate}%</span>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-3 text-xs">
                          <div>
                            <div className="text-white font-semibold">{data.count}</div>
                            <div className="text-gray-400">Prompts</div>
                          </div>
                          <div>
                            <div className="text-white font-semibold">{data.successRate}%</div>
                            <div className="text-gray-400">Success Rate</div>
                          </div>
                          <div>
                            <div className="text-white font-semibold">{data.avgQuality}/5</div>
                            <div className="text-gray-400">Avg Quality</div>
                          </div>
                        </div>
                        
                        <Progress 
                          value={data.successRate} 
                          className="h-1 mt-2" 
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Geographic Distribution & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Geographic Distribution */}
          <Card className="bg-slate-800/60 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Globe className="w-5 h-5 mr-2 text-blue-400" />
                Geographic Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {geographicData.map((region, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: region.color }}
                      />
                      <span className="text-gray-300">{region.region}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-white font-semibold">{region.percentage}%</span>
                      <div className="w-20">
                        <Progress value={region.percentage} className="h-2" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="bg-slate-800/60 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Clock className="w-5 h-5 mr-2 text-orange-400" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${
                        activity.type === 'positive' ? 'bg-green-400' :
                        activity.type === 'negative' ? 'bg-red-400' : 'bg-yellow-400'
                      }`} />
                      <div>
                        <p className="text-white text-sm font-medium">{activity.action}</p>
                        <p className="text-gray-400 text-xs">{activity.platform}</p>
                      </div>
                    </div>
                    <span className="text-gray-400 text-xs">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Platform Stats */}
        <Card className="bg-slate-800/60 border-slate-700">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-white">Platform Performance Details</CardTitle>
              <Button variant="outline" size="sm" className="border-slate-600 text-gray-300">
                View Analytics
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {visibilityData.map((platform, index) => (
                <div key={index} className="bg-slate-900/50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: platform.color }}
                      />
                      <h4 className="text-white font-semibold">{platform.name}</h4>
                    </div>
                    <Badge className="bg-slate-700 text-gray-300">
                      {platform.score}%
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Citations</span>
                      <span className="text-white">{Math.floor(platform.score / 10) * 3}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Mentions</span>
                      <span className="text-white">{Math.floor(platform.score / 5) * 2}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Trend</span>
                      <span className={`${platform.score > 70 ? 'text-green-400' : 'text-yellow-400'}`}>
                        {platform.score > 70 ? '↗ Growing' : '→ Stable'}
                      </span>
                    </div>
                  </div>
                  
                  <Progress value={platform.score} className="h-2 mt-3" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* AI Impact Recommendations */}
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
