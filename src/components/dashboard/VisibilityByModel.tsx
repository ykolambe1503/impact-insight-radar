
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
      color: '#10b981'
    },
    { 
      name: 'Claude', 
      citations: 78, 
      mentions: 189, 
      change: '+6',
      trend: 'up',
      color: '#8b5cf6'
    },
    { 
      name: 'Gemini', 
      citations: 72, 
      mentions: 156, 
      change: '+3',
      trend: 'up',
      color: '#f59e0b'
    },
    { 
      name: 'Grok', 
      citations: 65, 
      mentions: 98, 
      change: '-2',
      trend: 'down',
      color: '#ef4444'
    },
    { 
      name: 'Perplexity', 
      citations: 58, 
      mentions: 87, 
      change: '+1',
      trend: 'up',
      color: '#06b6d4'
    }
  ];

  return (
    <Card className="bg-slate-800/60 border-slate-700">
      <CardHeader>
        <CardTitle className="flex items-center text-white">
          <Brain className="w-5 h-5 mr-2" />
          Visibility & Mentions by Model
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {models.map((model, index) => (
            <div key={index} className="bg-slate-900/50 p-4 rounded-lg animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: model.color }}
                  />
                  <h4 className="text-white font-semibold">{model.name}</h4>
                  <Badge className={`${model.trend === 'up' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                    {model.trend === 'up' ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                    {model.change}
                  </Badge>
                </div>
                <div className="text-right">
                  <div className="text-white font-bold">{model.citations}%</div>
                  <div className="text-xs text-gray-400">Citation Rate</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Citation Frequency</span>
                  <span className="text-white">{model.citations}%</span>
                </div>
                <Progress value={model.citations} className="h-2" />
                
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-gray-400">Total Mentions</span>
                  <span className="text-white">{model.mentions}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
