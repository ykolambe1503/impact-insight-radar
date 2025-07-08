
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Target, Zap } from 'lucide-react';

export const ContextQuality = () => {
  const metrics = [
    {
      title: 'Context Quality Score',
      value: '8.7/10',
      description: 'Accuracy measure',
      icon: Shield,
      color: 'text-green-400',
      percentage: 87
    },
    {
      title: 'Source Attribution Rate',
      value: '76%',
      description: 'AI links back to site',
      icon: Target,
      color: 'text-blue-400',
      percentage: 76
    },
    {
      title: 'Impact Estimate',
      value: '$12.4K',
      description: 'Lead value from mentions',
      icon: Zap,
      color: 'text-purple-400',
      percentage: 68
    }
  ];

  const heatmapData = [
    { platform: 'ChatGPT', quality: 9.2, attribution: 82 },
    { platform: 'Claude', quality: 8.8, attribution: 78 },
    { platform: 'Gemini', quality: 8.1, attribution: 71 },
    { platform: 'Grok', quality: 7.9, attribution: 69 },
    { platform: 'Perplexity', quality: 8.5, attribution: 75 }
  ];

  const getHeatmapColor = (value: number, max: number = 100) => {
    const intensity = value / max;
    if (intensity > 0.8) return 'bg-green-500';
    if (intensity > 0.6) return 'bg-yellow-500';
    if (intensity > 0.4) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <Card className="bg-slate-800/60 border-slate-700">
      <CardHeader>
        <CardTitle className="flex items-center text-white">
          <Shield className="w-5 h-5 mr-2" />
          Context Quality & Impact
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Metrics */}
          <div className="space-y-4">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-slate-900/50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <metric.icon className={`w-5 h-5 ${metric.color}`} />
                    <h4 className="text-white font-medium">{metric.title}</h4>
                  </div>
                  <div className={`text-lg font-bold ${metric.color}`}>
                    {metric.value}
                  </div>
                </div>
                <p className="text-xs text-gray-400 mb-2">{metric.description}</p>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-1000 ease-out ${getHeatmapColor(metric.percentage)}`}
                    style={{ width: `${metric.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Heatmap */}
          <div className="space-y-3">
            <h4 className="text-white font-medium mb-3">Platform Quality Heatmap</h4>
            {heatmapData.map((item, index) => (
              <div key={index} className="bg-slate-900/50 p-3 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300 text-sm">{item.platform}</span>
                  <div className="flex space-x-2">
                    <div 
                      className={`w-4 h-4 rounded ${getHeatmapColor(item.quality * 10)}`}
                      title={`Quality: ${item.quality}/10`}
                    />
                    <div 
                      className={`w-4 h-4 rounded ${getHeatmapColor(item.attribution)}`}
                      title={`Attribution: ${item.attribution}%`}
                    />
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Quality: {item.quality}/10</span>
                  <span>Attribution: {item.attribution}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
