
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, TrendingUp } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface TimeSeriesTrendsProps {
  selectedTimeRange: string;
}

export const TimeSeriesTrends: React.FC<TimeSeriesTrendsProps> = ({ selectedTimeRange }) => {
  const timeSeriesData = [
    { date: '2025-01-01', mentions: 120, sentiment: 75, contextScore: 8.2, attribution: 65 },
    { date: '2025-01-02', mentions: 135, sentiment: 78, contextScore: 8.4, attribution: 68 },
    { date: '2025-01-03', mentions: 142, sentiment: 82, contextScore: 8.6, attribution: 72 },
    { date: '2025-01-04', mentions: 158, sentiment: 85, contextScore: 8.8, attribution: 75 },
    { date: '2025-01-05', mentions: 167, sentiment: 87, contextScore: 8.9, attribution: 78 },
    { date: '2025-01-06', mentions: 189, sentiment: 89, contextScore: 9.1, attribution: 82 },
    { date: '2025-01-07', mentions: 203, sentiment: 91, contextScore: 9.2, attribution: 85 }
  ];

  const timeRanges = ['7d', '30d', '90d', '1y'];

  return (
    <Card className="bg-slate-800/60 border-slate-700">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center text-white">
            <Clock className="w-5 h-5 mr-2" />
            Time Series Trends
          </CardTitle>
          <div className="flex space-x-2">
            {timeRanges.map((range) => (
              <Button
                key={range}
                variant={selectedTimeRange === range ? "default" : "outline"}
                size="sm"
              >
                {range}
              </Button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={timeSeriesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
              <XAxis 
                dataKey="date" 
                tick={{ fill: '#9ca3af', fontSize: 12 }}
                tickFormatter={(value) => new Date(value).toLocaleDateString()}
              />
              <YAxis tick={{ fill: '#9ca3af', fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #475569',
                  borderRadius: '8px',
                  color: '#fff'
                }}
                labelFormatter={(value) => new Date(value).toLocaleDateString()}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="mentions" 
                stroke="#8b5cf6" 
                strokeWidth={3}
                dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
                name="Citations"
              />
              <Line 
                type="monotone" 
                dataKey="sentiment" 
                stroke="#10b981" 
                strokeWidth={2}
                dot={{ fill: '#10b981', strokeWidth: 2, r: 3 }}
                name="Sentiment Score"
              />
              <Line 
                type="monotone" 
                dataKey="contextScore" 
                stroke="#f59e0b" 
                strokeWidth={2}
                dot={{ fill: '#f59e0b', strokeWidth: 2, r: 3 }}
                name="Context Score"
              />
              <Line 
                type="monotone" 
                dataKey="attribution" 
                stroke="#06b6d4" 
                strokeWidth={2}
                dot={{ fill: '#06b6d4', strokeWidth: 2, r: 3 }}
                name="Attribution Rate"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
