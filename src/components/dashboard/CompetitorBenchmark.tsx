
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Radar } from 'lucide-react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar as RechartsRadar, Legend } from 'recharts';

export const CompetitorBenchmark = () => {
  const radarData = [
    {
      metric: 'Citation Frequency',
      'Your Brand': 85,
      'Competitor A': 72,
      'Competitor B': 68,
      'Competitor C': 61
    },
    {
      metric: 'Share of Voice',
      'Your Brand': 78,
      'Competitor A': 82,
      'Competitor B': 65,
      'Competitor C': 58
    },
    {
      metric: 'Sentiment Score',
      'Your Brand': 88,
      'Competitor A': 75,
      'Competitor B': 71,
      'Competitor C': 69
    },
    {
      metric: 'Context Quality',
      'Your Brand': 87,
      'Competitor A': 79,
      'Competitor B': 74,
      'Competitor C': 72
    },
    {
      metric: 'Attribution Rate',
      'Your Brand': 76,
      'Competitor A': 68,
      'Competitor B': 63,
      'Competitor C': 59
    }
  ];

  const dominanceGaps = [
    { platform: 'ChatGPT', leader: 'Your Brand', advantage: '+15%', color: 'green' },
    { platform: 'Claude', leader: 'Competitor A', advantage: '-8%', color: 'red' },
    { platform: 'Gemini', leader: 'Your Brand', advantage: '+12%', color: 'green' },
    { platform: 'Grok', leader: 'Competitor B', advantage: '-5%', color: 'red' },
    { platform: 'Perplexity', leader: 'Your Brand', advantage: '+9%', color: 'green' }
  ];

  return (
    <Card className="bg-slate-800/60 border-slate-700">
      <CardHeader>
        <CardTitle className="flex items-center text-white">
          <Radar className="w-5 h-5 mr-2" />
          Competitor Benchmarking
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Radar Chart */}
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#475569" />
                <PolarAngleAxis 
                  dataKey="metric" 
                  tick={{ fill: '#9ca3af', fontSize: 12 }}
                />
                <PolarRadiusAxis 
                  tick={{ fill: '#9ca3af', fontSize: 10 }}
                  domain={[0, 100]}
                />
                <RechartsRadar
                  name="Your Brand"
                  dataKey="Your Brand"
                  stroke="#8b5cf6"
                  fill="#8b5cf6"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
                <RechartsRadar
                  name="Competitor A"
                  dataKey="Competitor A"
                  stroke="#10b981"
                  fill="#10b981"
                  fillOpacity={0.1}
                  strokeWidth={2}
                />
                <RechartsRadar
                  name="Competitor B"
                  dataKey="Competitor B"
                  stroke="#f59e0b"
                  fill="#f59e0b"
                  fillOpacity={0.1}
                  strokeWidth={2}
                />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Platform Dominance */}
          <div className="space-y-4">
            <h4 className="text-white font-medium">Platform Dominance Gaps</h4>
            {dominanceGaps.map((gap, index) => (
              <div key={index} className="bg-slate-900/50 p-3 rounded-lg flex items-center justify-between">
                <div>
                  <h5 className="text-white font-medium">{gap.platform}</h5>
                  <p className="text-sm text-gray-400">Leader: {gap.leader}</p>
                </div>
                <Badge 
                  className={`${
                    gap.color === 'green' 
                      ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                      : 'bg-red-500/20 text-red-400 border-red-500/30'
                  }`}
                >
                  {gap.advantage}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
