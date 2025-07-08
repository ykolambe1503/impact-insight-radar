
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, TrendingUp, TrendingDown } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export const VisibilityByModel = () => {
  const models = [
    { 
      name: 'ChatGPT', 
      citations: 85, 
      mentions: 247, 
      change: '+10',
      trend: 'up',
      color: '#10b981',
      gradient: 'from-emerald-500 to-emerald-600'
    },
    { 
      name: 'Claude', 
      citations: 78, 
      mentions: 189, 
      change: '+6',
      trend: 'up',
      color: '#8b5cf6',
      gradient: 'from-purple-500 to-purple-600'
    },
    { 
      name: 'Gemini', 
      citations: 72, 
      mentions: 156, 
      change: '+3',
      trend: 'up',
      color: '#f59e0b',
      gradient: 'from-amber-500 to-amber-600'
    },
    { 
      name: 'Grok', 
      citations: 65, 
      mentions: 98, 
      change: '-2',
      trend: 'down',
      color: '#ef4444',
      gradient: 'from-red-500 to-red-600'
    },
    { 
      name: 'Perplexity', 
      citations: 58, 
      mentions: 87, 
      change: '+1',
      trend: 'up',
      color: '#06b6d4',
      gradient: 'from-cyan-500 to-cyan-600'
    }
  ];

  return (
    <Card className="bg-gradient-to-br from-black via-gray-900 to-black border-gray-800 backdrop-blur-xl shadow-2xl shadow-purple-500/10">
      <CardHeader>
        <CardTitle className="flex items-center text-white">
          <Brain className="w-5 h-5 mr-2 text-purple-400" />
          Visibility & Mentions by Model
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {models.map((model, index) => (
            <div key={index} className="bg-gray-900/30 border border-gray-800/50 p-4 rounded-lg hover:bg-gray-900/50 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div 
                    className={`w-4 h-4 rounded-full bg-gradient-to-r ${model.gradient} shadow-lg`}
                    style={{ boxShadow: `0 0 8px ${model.color}40` }}
                  />
                  <h4 className="text-white font-semibold">{model.name}</h4>
                  <Badge className={`${model.trend === 'up' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : 'bg-red-500/20 text-red-400 border-red-500/30'}`}>
                    {model.trend === 'up' ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                    {model.change}
                  </Badge>
                </div>
                <div className="text-right">
                  <div className="text-white font-bold text-xl">{model.citations}%</div>
                  <div className="text-xs text-gray-400">Citation Rate</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Citation Frequency</span>
                  <span className="text-white font-medium">{model.citations}%</span>
                </div>
                <div className="w-full bg-gray-800/50 rounded-full h-3 shadow-inner">
                  <div 
                    className={`h-3 rounded-full transition-all duration-1000 ease-out bg-gradient-to-r ${model.gradient} shadow-lg`}
                    style={{ 
                      width: `${model.citations}%`,
                      boxShadow: `0 0 8px ${model.color}40`
                    }}
                  />
                </div>
                
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-gray-400">Total Mentions</span>
                  <span className="text-white font-medium">{model.mentions}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
