
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Activity, CheckCircle, XCircle, Clock } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export const UsageModelCoverage = () => {
  const scanMetrics = {
    dailyPrompts: 2847,
    weeklyPrompts: 18234,
    successRate: 97.3
  };

  const models = [
    { name: 'ChatGPT', status: 'online', uptime: 99.9, coverage: 'Full', lastUpdate: '2m ago' },
    { name: 'Claude', status: 'online', uptime: 99.7, coverage: 'Full', lastUpdate: '5m ago' },
    { name: 'Gemini', status: 'online', uptime: 98.9, coverage: 'Full', lastUpdate: '3m ago' },
    { name: 'Grok', status: 'maintenance', uptime: 95.2, coverage: 'Limited', lastUpdate: '2h ago' },
    { name: 'Perplexity', status: 'online', uptime: 99.1, coverage: 'Full', lastUpdate: '1m ago' }
  ];

  const historicalCoverage = [
    { month: 'Jan 2025', models: 5, prompts: 45234 },
    { month: 'Dec 2024', models: 4, prompts: 38129 },
    { month: 'Nov 2024', models: 4, prompts: 34567 },
    { month: 'Oct 2024', models: 3, prompts: 29834 }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'online': return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'maintenance': return <Clock className="w-4 h-4 text-yellow-400" />;
      default: return <XCircle className="w-4 h-4 text-red-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'maintenance': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default: return 'bg-red-500/20 text-red-400 border-red-500/30';
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Scan Volume & Models */}
      <Card className="bg-slate-800/60 border-slate-700">
        <CardHeader>
          <CardTitle className="flex items-center text-white">
            <Activity className="w-5 h-5 mr-2" />
            Usage & Model Coverage
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Scan Metrics */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{scanMetrics.dailyPrompts.toLocaleString()}</div>
                <div className="text-xs text-gray-400">Daily Prompts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{scanMetrics.weeklyPrompts.toLocaleString()}</div>
                <div className="text-xs text-gray-400">Weekly Prompts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{scanMetrics.successRate}%</div>
                <div className="text-xs text-gray-400">Success Rate</div>
              </div>
            </div>

            {/* Model Status */}
            <div className="space-y-3">
              <h4 className="text-white font-medium">Models Monitored</h4>
              {models.map((model, index) => (
                <div key={index} className="bg-slate-900/50 p-3 rounded-lg flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(model.status)}
                    <div>
                      <h5 className="text-white font-medium text-sm">{model.name}</h5>
                      <div className="flex items-center space-x-2 text-xs text-gray-400">
                        <span>Uptime: {model.uptime}%</span>
                        <span>•</span>
                        <span>Updated: {model.lastUpdate}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Badge className={getStatusColor(model.status)}>
                      {model.status}
                    </Badge>
                    <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                      {model.coverage}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Historical Coverage */}
      <Card className="bg-slate-800/60 border-slate-700">
        <CardHeader>
          <CardTitle className="flex items-center text-white">
            <Clock className="w-5 h-5 mr-2" />
            Historical Coverage
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {historicalCoverage.map((item, index) => (
              <div key={index} className="bg-slate-900/50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-white font-medium">{item.month}</h4>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                      {item.models} models
                    </Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Prompts Scanned</span>
                    <span className="text-white">{item.prompts.toLocaleString()}</span>
                  </div>
                  <Progress 
                    value={(item.prompts / 50000) * 100} 
                    className="h-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
