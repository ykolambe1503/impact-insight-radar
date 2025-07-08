
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Lightbulb, AlertTriangle, TrendingDown, Users, FileText } from 'lucide-react';

export const AlertsRecommendations = () => {
  const alerts = [
    {
      type: 'warning',
      message: 'Negative Gen Z sentiment up 12% on Gemini in last 24h',
      time: '2 hours ago',
      severity: 'high',
      icon: TrendingDown
    },
    {
      type: 'info',
      message: 'ChatGPT citations increased 15% this week',
      time: '6 hours ago',
      severity: 'low',
      icon: TrendingDown
    },
    {
      type: 'warning',
      message: 'Attribution rate dropped on Claude platform',
      time: '1 day ago',
      severity: 'medium',
      icon: AlertTriangle
    }
  ];

  const recommendations = [
    {
      title: 'Add casual tone in your AI content to appeal to Gen Z',
      description: 'Gen Z shows 12% negative sentiment increase. Consider more informal language.',
      priority: 'high',
      effort: 'low',
      impact: 'high',
      icon: Users
    },
    {
      title: 'Publish 500-word FAQ to boost context quality',
      description: 'Context quality score is 8.7/10. A comprehensive FAQ could push it to 9+.',
      priority: 'medium',
      effort: 'medium',
      impact: 'medium',
      icon: FileText
    },
    {
      title: 'Optimize content for Claude platform attribution',
      description: 'Attribution rate on Claude is 8% below average. Focus on clear sourcing.',
      priority: 'medium',
      effort: 'low',
      impact: 'medium',
      icon: Lightbulb
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default: return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500/20 text-red-400';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400';
      default: return 'bg-green-500/20 text-green-400';
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Alerts Feed */}
      <Card className="bg-slate-800/60 border-slate-700">
        <CardHeader>
          <CardTitle className="flex items-center text-white">
            <AlertTriangle className="w-5 h-5 mr-2" />
            Alert Feed
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {alerts.map((alert, index) => (
              <div key={index} className="bg-slate-900/50 p-4 rounded-lg animate-fade-in">
                <div className="flex items-start space-x-3">
                  <alert.icon className="w-5 h-5 mt-1 text-red-400" />
                  <div className="flex-1">
                    <p className="text-gray-300 text-sm">{alert.message}</p>
                    <p className="text-gray-500 text-xs mt-1">{alert.time}</p>
                  </div>
                  <Badge className={getSeverityColor(alert.severity)}>
                    {alert.severity}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <Card className="bg-slate-800/60 border-slate-700">
        <CardHeader>
          <CardTitle className="flex items-center text-white">
            <Lightbulb className="w-5 h-5 mr-2" />
            Recommended Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recommendations.map((rec, index) => (
              <div key={index} className="bg-slate-900/50 p-4 rounded-lg">
                <div className="flex items-start space-x-3 mb-3">
                  <rec.icon className="w-5 h-5 mt-1 text-purple-400" />
                  <div className="flex-1">
                    <h4 className="text-white font-medium text-sm">{rec.title}</h4>
                    <p className="text-gray-400 text-xs mt-1">{rec.description}</p>
                  </div>
                  <Badge className={getPriorityColor(rec.priority)}>
                    {rec.priority}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2 text-xs">
                    <span className="text-gray-500">Effort: {rec.effort}</span>
                    <span className="text-gray-500">Impact: {rec.impact}</span>
                  </div>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                    Apply
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
