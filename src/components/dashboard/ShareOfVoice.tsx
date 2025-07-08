
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart3, TrendingUp } from 'lucide-react';

export const ShareOfVoice = () => {
  const competitors = [
    { name: 'Your Brand', share: 34, color: '#8b5cf6', gradient: 'from-purple-500 to-purple-600' },
    { name: 'Competitor A', share: 28, color: '#10b981', gradient: 'from-emerald-500 to-emerald-600' },
    { name: 'Competitor B', share: 22, color: '#f59e0b', gradient: 'from-amber-500 to-amber-600' },
    { name: 'Competitor C', share: 16, color: '#ef4444', gradient: 'from-red-500 to-red-600' }
  ];

  return (
    <Card className="bg-gradient-to-br from-black via-gray-900 to-black border-gray-800 backdrop-blur-xl shadow-2xl shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <CardTitle className="text-sm font-medium text-gray-300">Share of Voice</CardTitle>
        <BarChart3 className="h-5 w-5 text-emerald-400" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {competitors.map((competitor, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-900/30 rounded-lg border border-gray-800/50 hover:bg-gray-900/50 transition-all duration-200">
              <div className="flex items-center space-x-3">
                <div 
                  className={`w-4 h-4 rounded-full bg-gradient-to-r ${competitor.gradient} shadow-lg`}
                  style={{ boxShadow: `0 0 8px ${competitor.color}40` }}
                />
                <span className="text-sm text-gray-300 font-medium">{competitor.name}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-24 bg-gray-800/50 rounded-full h-3 shadow-inner">
                  <div 
                    className={`h-3 rounded-full transition-all duration-1000 ease-out bg-gradient-to-r ${competitor.gradient} shadow-lg`}
                    style={{ 
                      width: `${competitor.share * 2}%`,
                      boxShadow: `0 0 8px ${competitor.color}40`
                    }}
                  />
                </div>
                <span className="text-sm font-bold text-white min-w-[3rem] text-right">{competitor.share}%</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
