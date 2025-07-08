
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Eye, Lightbulb } from 'lucide-react';

export const BrandVisibilityScore = () => {
  const score = 87;
  const change = '+12%';

  const aiModels = [
    { name: 'ChatGPT', mentioned: true, color: 'text-emerald-400' },
    { name: 'Claude', mentioned: true, color: 'text-blue-400' },
    { name: 'Gemini', mentioned: false, color: 'text-gray-500' },
    { name: 'Grok', mentioned: true, color: 'text-purple-400' },
    { name: 'Perplexity', mentioned: false, color: 'text-gray-500' }
  ];

  return (
    <Card className="bg-gradient-to-br from-black via-gray-900 to-black border-gray-800 backdrop-blur-xl shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <CardTitle className="text-sm font-medium text-gray-300">Brand Visibility Score</CardTitle>
        <Eye className="h-5 w-5 text-purple-400" />
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-3">
          <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            {score}
          </div>
          <div className="text-sm text-emerald-400 flex items-center bg-emerald-400/10 px-2 py-1 rounded-full">
            <TrendingUp className="w-3 h-3 mr-1" />
            {change}
          </div>
        </div>
        <div className="mt-4">
          <div className="w-full bg-gray-800/50 rounded-full h-3 shadow-inner">
            <div 
              className="bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out shadow-lg shadow-purple-500/30"
              style={{ width: `${score}%` }}
            />
          </div>
        </div>
        
        {/* AI Models Mention Status */}
        <div className="mt-6 border-t border-gray-800 pt-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-gray-400 font-medium">Recent AI Mentions</span>
            <span className="text-xs text-gray-400">Last 24h</span>
          </div>
          <div className="grid grid-cols-5 gap-3">
            {aiModels.map((model, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div className="relative">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    model.mentioned 
                      ? 'bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg shadow-gray-900/50' 
                      : 'bg-gray-900/50'
                  }`}>
                    <Lightbulb 
                      className={`w-4 h-4 ${model.color} ${
                        model.mentioned 
                          ? 'animate-pulse drop-shadow-lg' 
                          : 'opacity-30'
                      }`}
                      style={{
                        filter: model.mentioned 
                          ? `drop-shadow(0 0 8px ${model.color === 'text-emerald-400' ? '#10b981' : model.color === 'text-blue-400' ? '#3b82f6' : model.color === 'text-purple-400' ? '#8b5cf6' : '#6b7280'})` 
                          : 'none'
                      }}
                    />
                  </div>
                  {model.mentioned && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
                  )}
                </div>
                <span className="text-xs text-gray-400 text-center font-medium">{model.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <p className="text-xs text-gray-500 mt-4">vs. last week</p>
      </CardContent>
    </Card>
  );
};
