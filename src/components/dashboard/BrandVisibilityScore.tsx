
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Eye } from 'lucide-react';

export const BrandVisibilityScore = () => {
  const score = 87;
  const change = '+12%';

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
        <p className="text-xs text-gray-400 mt-2">vs. last week</p>
      </CardContent>
    </Card>
  );
};
