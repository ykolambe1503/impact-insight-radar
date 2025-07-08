
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart3, TrendingUp } from 'lucide-react';

export const ShareOfVoice = () => {
  const competitors = [
    { name: 'Your Brand', share: 34, color: '#8b5cf6' },
    { name: 'Competitor A', share: 28, color: '#10b981' },
    { name: 'Competitor B', share: 22, color: '#f59e0b' },
    { name: 'Competitor C', share: 16, color: '#ef4444' }
  ];

  return (
    <Card className="bg-slate-800/60 border-slate-700">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-300">Share of Voice</CardTitle>
        <BarChart3 className="h-5 w-5 text-green-400" />
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {competitors.map((competitor, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: competitor.color }}
                />
                <span className="text-sm text-gray-300">{competitor.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-20 bg-gray-700 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${competitor.share * 2}%`,
                      backgroundColor: competitor.color 
                    }}
                  />
                </div>
                <span className="text-sm font-medium text-white">{competitor.share}%</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
