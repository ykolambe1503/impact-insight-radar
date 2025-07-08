import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Eye, TrendingUp } from 'lucide-react';

interface PlatformScore {
  name: string;
  score: number;
  color: string;
}

interface BrandVisibilityData {
  brandName: string;
  overallScore: number;
  platformScores: PlatformScore[];
}

interface Competitor {
  name: string;
  score: number;
  color: string;
}

const Dashboard: React.FC = () => {
  const brandVisibilityData: BrandVisibilityData = {
    brandName: 'Your Brand',
    overallScore: 82,
    platformScores: [
      { name: 'ChatGPT', score: 85, color: '#10b981' },
      { name: 'Claude', score: 78, color: '#8b5cf6' },
      { name: 'Gemini', score: 72, color: '#f59e0b' },
      { name: 'Perplexity', score: 65, color: '#06b6d4' },
      { name: 'Groq', score: 58, color: '#ef4444' }
    ]
  };

  const competitorData: Competitor[] = [
    {
      name: 'Rent the Runway Dubai',
      score: 78,
      color: '#10b981'
    },
    {
      name: 'Le Tote Dubai',
      score: 72,
      color: '#8b5cf6'
    },
    {
      name: 'Nuuly Dubai',
      score: 68,
      color: '#f59e0b'
    },
    {
      name: 'Rentista Dubai',
      score: 63,
      color: '#06b6d4'
    },
    {
      name: 'Rentals United',
      score: 58,
      color: '#ef4444'
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Top Section - Brand Visibility & Competitor Ranking */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Brand Visibility Sphere */}
          <Card className="bg-slate-800/60 border-slate-700">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white flex items-center">
                  <Eye className="w-5 h-5 mr-2 text-purple-400" />
                  Brand Visibility Score
                </CardTitle>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  {brandVisibilityData.overallScore}%
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative w-full h-40">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <svg viewBox="0 0 100 100">
                    {/* Background Circle */}
                    <circle cx="50" cy="50" r="45" fill="none" 
                      stroke="#10b981" strokeWidth="6" opacity="0.3" />
                    
                    {/* Progress Circle */}
                    <circle cx="50" cy="50" r="45" fill="none" 
                      stroke={`#${brandVisibilityData.overallScore >= 80 ? '10b981' : 
                              brandVisibilityData.overallScore >= 60 ? 'f59e0b' : 'ef4444'}`}
                      strokeWidth="6" 
                      strokeDasharray="283"
                      strokeDashoffset={283 - (283 * brandVisibilityData.overallScore / 100)}
                      transform="rotate(-90) translate(-50)" />
                    
                    {/* Score Text */}
                    <text x="50" y="50" textAnchor="middle" dy=".3em" 
                      className={`text-4xl font-bold ${
                        brandVisibilityData.overallScore >= 80 ? 'text-green-400' :
                        brandVisibilityData.overallScore >= 60 ? 'text-yellow-400' :
                        'text-red-400'
                      }`}>
                      {brandVisibilityData.overallScore}
                    </text>
                  </svg>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-white text-sm">Platform Breakdown</h3>
                <div className="space-y-1">
                  {brandVisibilityData.platformScores.map((platform, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <span className="text-gray-300">{platform.name}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: platform.color }} />
                        <span className="text-white">{platform.score}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Competitor Ranking */}
          <Card className="bg-slate-800/60 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                Competitor Ranking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {competitorData.map((competitor, index) => (
                  <div key={competitor.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <div className="text-2xl font-bold text-white">{index + 1}</div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-medium">{competitor.name}</h4>
                        <p className="text-gray-400 text-sm">Visibility Score</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-32">
                        <Progress
                          value={competitor.score}
                          className={`h-2 ${
                            competitor.score >= 80 ? 'bg-green-400' :
                            competitor.score >= 60 ? 'bg-yellow-400' :
                            'bg-red-400'
                          }`}
                        />
                      </div>
                      <span className="text-white font-semibold">{competitor.score}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Platform Stats */}
        <Card className="bg-slate-800/60 border-slate-700">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-white">Platform Performance Details</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {brandVisibilityData.platformScores.map((platform, index) => (
                <div key={index} className="bg-slate-900/50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: platform.color }}
                      />
                      <h4 className="text-white font-semibold">{platform.name}</h4>
                    </div>
                    <Badge className="bg-slate-700 text-gray-300">
                      {platform.score}%
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Citations</span>
                      <span className="text-white">{Math.floor(platform.score / 10) * 3}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Mentions</span>
                      <span className="text-white">{Math.floor(platform.score / 5) * 2}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Trend</span>
                      <span className={`${platform.score > 70 ? 'text-green-400' : 'text-yellow-400'}`}>
                        {platform.score > 70 ? '↗ Growing' : '→ Stable'}
                      </span>
                    </div>
                  </div>
                  
                  <Progress value={platform.score} className="h-2 mt-3" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
