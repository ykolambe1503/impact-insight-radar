
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
    <Card className="bg-gradient-to-br from-black via-gray-900 to-black border-gray-800 backdrop-blur-xl shadow-2xl shadow-blue-500/10">
      <CardHeader>
        <CardTitle className="flex items-center text-white">
          <Users className="w-5 h-5 mr-2 text-blue-400" />
          Audience Persona Sentiment
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            {personas.map((persona, index) => (
              <div key={index} className="bg-gray-900/30 border border-gray-800/50 p-4 rounded-lg hover:bg-gray-900/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-white font-medium">{persona.name}</h4>
                  <div className="flex items-center text-emerald-400 text-sm bg-emerald-400/10 px-2 py-1 rounded-full">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {persona.trend}
                  </div>
                </div>
                <div className="flex space-x-1 rounded-full overflow-hidden h-3 bg-gray-800/50 shadow-inner">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-lg"
                    style={{ width: `${persona.positive}%` }}
                  />
                  <div 
                    className="h-full bg-gradient-to-r from-amber-500 to-amber-600 shadow-lg"
                    style={{ width: `${persona.neutral}%` }}
                  />
                  <div 
                    className="h-full bg-gradient-to-r from-red-500 to-red-600 shadow-lg"
                    style={{ width: `${persona.negative}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-2">
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
                    backgroundColor: '#111827', 
                    border: '1px solid #374151',
                    borderRadius: '12px',
                    color: '#fff',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                  }}
                />
                <Bar dataKey="positive" stackId="a" fill="url(#positiveGradient)" />
                <Bar dataKey="neutral" stackId="a" fill="url(#neutralGradient)" />
                <Bar dataKey="negative" stackId="a" fill="url(#negativeGradient)" />
                <defs>
                  <linearGradient id="positiveGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#059669" />
                  </linearGradient>
                  <linearGradient id="neutralGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#d97706" />
                  </linearGradient>
                  <linearGradient id="negativeGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#dc2626" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
