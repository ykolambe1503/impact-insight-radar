
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
      color: 'text-emerald-400',
      gradient: 'from-emerald-500 to-emerald-600',
      percentage: 87
    },
    {
      title: 'Source Attribution Rate',
      value: '76%',
      description: 'AI links back to site',
      icon: Target,
      color: 'text-blue-400',
      gradient: 'from-blue-500 to-blue-600',
      percentage: 76
    },
    {
      title: 'Impact Estimate',
      value: '$12.4K',
      description: 'Lead value from mentions',
      icon: Zap,
      color: 'text-purple-400',
      gradient: 'from-purple-500 to-purple-600',
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
    if (intensity > 0.8) return 'bg-gradient-to-r from-emerald-500 to-emerald-600';
    if (intensity > 0.6) return 'bg-gradient-to-r from-amber-500 to-amber-600';
    if (intensity > 0.4) return 'bg-gradient-to-r from-orange-500 to-orange-600';
    return 'bg-gradient-to-r from-red-500 to-red-600';
  };

  return (
    <Card className="bg-gradient-to-br from-black via-gray-900 to-black border-gray-800 backdrop-blur-xl shadow-2xl shadow-green-500/10">
      <CardHeader>
        <CardTitle className="flex items-center text-white">
          <Shield className="w-5 h-5 mr-2 text-green-400" />
          Context Quality & Impact
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Metrics */}
          <div className="space-y-4">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-gray-900/30 border border-gray-800/50 p-4 rounded-lg hover:bg-gray-900/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gray-800/50 rounded-full">
                      <metric.icon className={`w-5 h-5 ${metric.color}`} />
                    </div>
                    <h4 className="text-white font-medium">{metric.title}</h4>
                  </div>
                  <div className={`text-lg font-bold ${metric.color}`}>
                    {metric.value}
                  </div>
                </div>
                <p className="text-xs text-gray-400 mb-3">{metric.description}</p>
                <div className="w-full bg-gray-800/50 rounded-full h-3 shadow-inner">
                  <div 
                    className={`h-3 rounded-full transition-all duration-1000 ease-out bg-gradient-to-r ${metric.gradient} shadow-lg`}
                    style={{ width: `${metric.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Heatmap */}
          <div className="space-y-4">
            <h4 className="text-white font-medium mb-3">Platform Quality Heatmap</h4>
            {heatmapData.map((item, index) => (
              <div key={index} className="bg-gray-900/30 border border-gray-800/50 p-4 rounded-lg hover:bg-gray-900/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-300 font-medium">{item.platform}</span>
                  <div className="flex space-x-2">
                    <div 
                      className={`w-5 h-5 rounded-full ${getHeatmapColor(item.quality * 10)} shadow-lg`}
                      title={`Quality: ${item.quality}/10`}
                    />
                    <div 
                      className={`w-5 h-5 rounded-full ${getHeatmapColor(item.attribution)} shadow-lg`}
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
