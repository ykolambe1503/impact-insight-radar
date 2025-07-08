
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, TrendingUp } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from 'recharts';

export const PersonaSentiment = () => {
  const personas = [
    {
      name: 'Gen Z',
      positive: 65,
      neutral: 25,
      negative: 10,
      trend: '+5%'
    },
    {
      name: 'Small Business',
      positive: 78,
      neutral: 18,
      negative: 4,
      trend: '+8%'
    },
    {
      name: 'Tech Enthusiasts',
      positive: 82,
      neutral: 15,
      negative: 3,
      trend: '+12%'
    },
    {
      name: 'Enterprise',
      positive: 71,
      neutral: 22,
      negative: 7,
      trend: '+3%'
    }
  ];

  const chartData = personas.map(persona => ({
    name: persona.name,
    positive: persona.positive,
    neutral: persona.neutral,
    negative: persona.negative
  }));

  return (
    <Card className="bg-slate-800/60 border-slate-700">
      <CardHeader>
        <CardTitle className="flex items-center text-white">
          <Users className="w-5 h-5 mr-2" />
          Audience Persona Sentiment
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            {personas.map((persona, index) => (
              <div key={index} className="bg-slate-900/50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-white font-medium">{persona.name}</h4>
                  <div className="flex items-center text-green-400 text-sm">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {persona.trend}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div 
                    className="h-2 bg-green-500 rounded"
                    style={{ width: `${persona.positive}%` }}
                  />
                  <div 
                    className="h-2 bg-yellow-500 rounded"
                    style={{ width: `${persona.neutral}%` }}
                  />
                  <div 
                    className="h-2 bg-red-500 rounded"
                    style={{ width: `${persona.negative}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>Positive: {persona.positive}%</span>
                  <span>Neutral: {persona.neutral}%</span>
                  <span>Negative: {persona.negative}%</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis dataKey="name" tick={{ fill: '#9ca3af', fontSize: 12 }} />
                <YAxis tick={{ fill: '#9ca3af', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e293b', 
                    border: '1px solid #475569',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
                <Bar dataKey="positive" stackId="a" fill="#10b981" />
                <Bar dataKey="neutral" stackId="a" fill="#f59e0b" />
                <Bar dataKey="negative" stackId="a" fill="#ef4444" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
