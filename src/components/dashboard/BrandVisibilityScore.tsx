
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Eye, Lightbulb } from 'lucide-react';

export const BrandVisibilityScore = () => {
  const score = 87;
  const change = '+12%';

  const aiModels = [
    { name: 'ChatGPT', mentioned: true, color: 'text-green-400' },
    { name: 'Claude', mentioned: true, color: 'text-blue-400' },
    { name: 'Gemini', mentioned: false, color: 'text-gray-600' },
    { name: 'Grok', mentioned: true, color: 'text-purple-400' },
    { name: 'Perplexity', mentioned: false, color: 'text-gray-600' }
  ];

  return (
    <Card className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/20 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-300">Brand Visibility Score</CardTitle>
        <Eye className="h-5 w-5 text-purple-400" />
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2">
          <div className="text-4xl font-bold text-white">{score}</div>
          <div className="text-sm text-green-400 flex items-center">
            <TrendingUp className="w-3 h-3 mr-1" />
            {change}
          </div>
        </div>
        <div className="mt-4">
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${score}%` }}
            />
          </div>
        </div>
        
        {/* AI Models Mention Status */}
        <div className="mt-4 border-t border-gray-700 pt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-400">Recent AI Mentions</span>
            <span className="text-xs text-gray-400">Last 24h</span>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {aiModels.map((model, index) => (
              <div key={index} className="flex flex-col items-center space-y-1">
                <div className="relative">
                  <Lightbulb 
                    className={`w-5 h-5 ${model.color} ${
                      model.mentioned 
                        ? 'animate-pulse drop-shadow-lg' 
                        : 'opacity-30'
                    }`}
                    style={{
                      filter: model.mentioned 
                        ? `drop-shadow(0 0 8px ${model.color === 'text-green-400' ? '#10b981' : model.color === 'text-blue-400' ? '#3b82f6' : model.color === 'text-purple-400' ? '#8b5cf6' : '#6b7280'})` 
                        : 'none'
                    }}
                  />
                  {model.mentioned && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-ping" />
                  )}
                </div>
                <span className="text-xs text-gray-400 text-center">{model.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <p className="text-xs text-gray-400 mt-2">vs. last week</p>
      </CardContent>
    </Card>
  );
};
