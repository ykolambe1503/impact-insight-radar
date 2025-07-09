
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  RefreshCw, 
  TrendingUp, 
  Eye, 
  Brain,
  Users,
  Lightbulb,
  BarChart3
} from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

interface ScanResult {
  visibilityScore: number;
  mentions: {
    model: string;
    count: number;
    color: string;
  }[];
  personaSentiment: {
    persona: string;
    positive: number;
    neutral: number;
    negative: number;
  }[];
  recommendation: string;
}

interface ScanResultCardProps {
  result: ScanResult;
  onScanAgain: () => void;
  isScanning?: boolean;
}

export const ScanResultCard = ({ result, onScanAgain, isScanning = false }: ScanResultCardProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Large Visibility Score Header */}
      <Card className="bg-gradient-to-br from-black via-gray-900 to-black border-gray-800 backdrop-blur-xl shadow-2xl shadow-purple-500/20">
        <CardHeader className="text-center pb-2">
          <CardTitle className="flex items-center justify-center text-gray-300 text-lg">
            <Eye className="w-6 h-6 mr-2 text-purple-400" />
            Overall Visibility Score
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="relative">
            <div className="text-8xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              {result.visibilityScore}
            </div>
            <div className="absolute -top-2 -right-2">
              <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                <TrendingUp className="w-3 h-3 mr-1" />
                +12%
              </Badge>
            </div>
          </div>
          <div className="w-full bg-gray-800/50 rounded-full h-4 shadow-inner mb-4">
            <div 
              className="bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 h-4 rounded-full transition-all duration-2000 ease-out shadow-lg shadow-purple-500/30"
              style={{ width: `${result.visibilityScore}%` }}
            />
          </div>
          <Button 
            onClick={onScanAgain}
            disabled={isScanning}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${isScanning ? 'animate-spin' : ''}`} />
            {isScanning ? 'Scanning...' : 'Scan Again'}
          </Button>
        </CardContent>
      </Card>

      {/* Mobile-responsive grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Mentions Bar Chart */}
        <Card className="bg-gradient-to-br from-black via-gray-900 to-black border-gray-800 backdrop-blur-xl shadow-2xl shadow-blue-500/10">
          <CardHeader>
            <CardTitle className="flex items-center text-white">
              <BarChart3 className="w-5 h-5 mr-2 text-blue-400" />
              Mentions per Model
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={result.mentions}>
                  <XAxis 
                    dataKey="model" 
                    tick={{ fill: '#9ca3af', fontSize: 12 }}
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
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
                  <Bar 
                    dataKey="count" 
                    fill="url(#mentionsGradient)"
                    radius={[4, 4, 0, 0]}
                  />
                  <defs>
                    <linearGradient id="mentionsGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Persona Sentiment Gauges */}
        <Card className="bg-gradient-to-br from-black via-gray-900 to-black border-gray-800 backdrop-blur-xl shadow-2xl shadow-emerald-500/10">
          <CardHeader>
            <CardTitle className="flex items-center text-white">
              <Users className="w-5 h-5 mr-2 text-emerald-400" />
              Persona Sentiment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {result.personaSentiment.map((persona, index) => (
                <div key={index} className="bg-gray-900/30 border border-gray-800/50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-white font-medium">{persona.persona}</h4>
                    <div className="text-emerald-400 text-sm bg-emerald-400/10 px-2 py-1 rounded-full">
                      {persona.positive}% positive
                    </div>
                  </div>
                  
                  {/* Sentiment gauge */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>Positive</span>
                      <span>Neutral</span>
                      <span>Negative</span>
                    </div>
                    <div className="flex space-x-1 rounded-full overflow-hidden h-3 bg-gray-800/50 shadow-inner">
                      <div 
                        className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600"
                        style={{ width: `${persona.positive}%` }}
                      />
                      <div 
                        className="h-full bg-gradient-to-r from-amber-500 to-amber-600"
                        style={{ width: `${persona.neutral}%` }}
                      />
                      <div 
                        className="h-full bg-gradient-to-r from-red-500 to-red-600"
                        style={{ width: `${persona.negative}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>{persona.positive}%</span>
                      <span>{persona.neutral}%</span>
                      <span>{persona.negative}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recommendation Box */}
      <Card className="bg-gradient-to-br from-black via-gray-900 to-black border-gray-800 backdrop-blur-xl shadow-2xl shadow-amber-500/10">
        <CardHeader>
          <CardTitle className="flex items-center text-white">
            <Lightbulb className="w-5 h-5 mr-2 text-amber-400" />
            AI Recommendation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl p-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-amber-100 leading-relaxed text-lg font-medium">
                  {result.recommendation}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
