
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  TrendingDown, 
  Eye, 
  Users
} from 'lucide-react';

const ComprehensiveDashboard: React.FC = () => {
  const location = useLocation();
  const [userDetails, setUserDetails] = useState({
    website: '',
    brandName: '',
    email: '',
    competitors: [] as string[],
    analyzeMode: 'auto'
  });

  useEffect(() => {
    // Extract user details from URL parameters
    const params = new URLSearchParams(location.search);
    const website = params.get('website') || '';
    const brandName = params.get('brand') || '';
    const email = params.get('email') || '';
    const competitorsParam = params.get('competitors') || '[]';
    const analyzeMode = params.get('analyzeMode') || 'auto';
    
    let competitors: string[] = [];
    try {
      competitors = JSON.parse(decodeURIComponent(competitorsParam));
    } catch (e) {
      console.error('Error parsing competitors:', e);
    }

    setUserDetails({
      website,
      brandName,
      email,
      competitors,
      analyzeMode
    });
  }, [location.search]);

  const visibilityScore = 87;
  const change = '+12%';

  const competitorScores = [
    { name: userDetails.brandName || 'Your Brand', score: 87, change: '+12%', trend: 'up', color: '#8b5cf6', gradient: 'from-purple-500 to-purple-600' },
    { name: 'Competitor A', score: 72, change: '+6%', trend: 'up', color: '#10b981', gradient: 'from-emerald-500 to-emerald-600' },
    { name: 'Competitor B', score: 68, change: '-3%', trend: 'down', color: '#f59e0b', gradient: 'from-amber-500 to-amber-600' },
    { name: 'Competitor C', score: 61, change: '+1%', trend: 'up', color: '#ef4444', gradient: 'from-red-500 to-red-600' }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8 animate-fade-in min-h-screen">
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            AI Impact Analysis
          </h1>
          <p className="text-gray-400 text-lg">
            Brand Visibility Dashboard
          </p>
        </div>

        {/* Main 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Main Visibility Score */}
          <Card className="bg-gradient-to-br from-black via-gray-900 to-black border-gray-800 backdrop-blur-xl shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-bold text-white flex items-center justify-center">
                <Eye className="w-8 h-8 mr-3 text-purple-400" />
                Brand Visibility Score
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-6">
              {/* Circular Progress */}
              <div className="relative w-64 h-64 flex items-center justify-center">
                <svg className="w-64 h-64 transform -rotate-90" viewBox="0 0 256 256">
                  {/* Background circle */}
                  <circle
                    cx="128"
                    cy="128"
                    r="112"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-gray-800/50"
                  />
                  {/* Progress circle */}
                  <circle
                    cx="128"
                    cy="128"
                    r="112"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={`${2 * Math.PI * 112}`}
                    strokeDashoffset={`${2 * Math.PI * 112 * (1 - visibilityScore / 100)}`}
                    className="transition-all duration-1000 ease-out drop-shadow-lg"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="50%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Score Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    {visibilityScore}
                  </div>
                  <div className="text-lg text-gray-400 mt-2">out of 100</div>
                  <div className="flex items-center mt-3 bg-emerald-400/10 px-3 py-1 rounded-full">
                    <TrendingUp className="w-4 h-4 text-emerald-400 mr-1" />
                    <span className="text-emerald-400 font-medium">{change}</span>
                  </div>
                </div>
              </div>

              {/* Score Description */}
              <div className="text-center space-y-2">
                <p className="text-gray-300 text-lg">
                  {visibilityScore >= 80 ? 'Excellent' : visibilityScore >= 60 ? 'Good' : visibilityScore >= 40 ? 'Fair' : 'Needs Improvement'} Visibility
                </p>
                <p className="text-gray-500 text-sm">
                  Your brand appears in {visibilityScore}% of relevant AI responses
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Right Column - Competitors Visibility */}
          <Card className="bg-gradient-to-br from-black via-gray-900 to-black border-gray-800 backdrop-blur-xl shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center">
                <Users className="w-8 h-8 mr-3 text-blue-400" />
                Competitive Landscape
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {competitorScores.map((competitor, index) => (
                  <div key={index} className="bg-gray-900/30 border border-gray-800/50 p-4 rounded-lg hover:bg-gray-900/50 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div 
                          className={`w-4 h-4 rounded-full bg-gradient-to-r ${competitor.gradient} shadow-lg`}
                          style={{ boxShadow: `0 0 8px ${competitor.color}40` }}
                        />
                        <h4 className="text-white font-semibold text-lg">{competitor.name}</h4>
                        {index === 0 && (
                          <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                            You
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={`${competitor.trend === 'up' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : 'bg-red-500/20 text-red-400 border-red-500/30'}`}>
                          {competitor.trend === 'up' ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                          {competitor.change}
                        </Badge>
                        <div className="text-white font-bold text-2xl">{competitor.score}</div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="w-full bg-gray-800/50 rounded-full h-3 shadow-inner">
                        <div 
                          className={`h-3 rounded-full transition-all duration-1000 ease-out bg-gradient-to-r ${competitor.gradient} shadow-lg`}
                          style={{ 
                            width: `${competitor.score}%`,
                            boxShadow: `0 0 8px ${competitor.color}40`
                          }}
                        />
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Visibility Score</span>
                        <span className="text-white font-medium">{competitor.score}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary Stats */}
              <div className="mt-8 p-4 bg-gray-900/30 border border-gray-800/50 rounded-lg">
                <h4 className="text-white font-semibold mb-3">Market Position</h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-purple-400">
                      #{competitorScores.findIndex(c => c.name === (userDetails.brandName || 'Your Brand')) + 1}
                    </div>
                    <div className="text-xs text-gray-400">Market Rank</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-400">
                      {Math.max(0, competitorScores[0].score - competitorScores[1].score)}
                    </div>
                    <div className="text-xs text-gray-400">Point Lead</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ComprehensiveDashboard;
