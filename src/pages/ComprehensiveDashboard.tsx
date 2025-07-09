
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  Eye, 
  Users, 
  Brain,
  Target,
  Activity,
  Clock,
  BarChart3,
  Radar,
  MessageSquare,
  Lightbulb,
  Shield,
  Zap,
  Globe,
  Mail,
  Building2,
  Calendar
} from 'lucide-react';
import { BrandVisibilityScore } from '@/components/dashboard/BrandVisibilityScore';
import { ShareOfVoice } from '@/components/dashboard/ShareOfVoice';
import { RealTimeAlerts } from '@/components/dashboard/RealTimeAlerts';
import { VisibilityByModel } from '@/components/dashboard/VisibilityByModel';
import { PersonaSentiment } from '@/components/dashboard/PersonaSentiment';
import { ContextQuality } from '@/components/dashboard/ContextQuality';
import { CompetitorBenchmark } from '@/components/dashboard/CompetitorBenchmark';
import { PromptInsights } from '@/components/dashboard/PromptInsights';
import { TimeSeriesTrends } from '@/components/dashboard/TimeSeriesTrends';
import { AlertsRecommendations } from '@/components/dashboard/AlertsRecommendations';
import { UsageModelCoverage } from '@/components/dashboard/UsageModelCoverage';
import { ScanResults } from '@/components/dashboard/ScanResults';

const ComprehensiveDashboard: React.FC = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d');
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

  const getAnalyzeModeLabel = (mode: string) => {
    switch (mode) {
      case 'auto': return 'Auto Analysis';
      case 'manual': return 'Manual Entry';
      case 'both': return 'Both';
      default: return 'Auto Analysis';
    }
  };

  const getAnalyzeModeColor = (mode: string) => {
    switch (mode) {
      case 'auto': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'manual': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'both': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      default: return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8 animate-fade-in">
        {/* Header Section with User Details */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Impact Analysis
            </h1>
            <p className="text-gray-400 text-lg">
              Comprehensive insights and visibility tracking
            </p>
          </div>

          {/* User Input Details Card */}
          <Card className="bg-gradient-to-br from-black via-gray-900 to-black border-gray-800 backdrop-blur-xl shadow-2xl shadow-purple-500/10">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-white">
                <Target className="w-6 h-6 mr-3 text-purple-400" />
                Analysis Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Website */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-400 text-sm font-medium">Website</span>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-800/50 rounded-lg p-3">
                    <p className="text-white font-medium truncate" title={userDetails.website}>
                      {userDetails.website || 'Not specified'}
                    </p>
                  </div>
                </div>

                {/* Brand Name */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Building2 className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-400 text-sm font-medium">Brand Name</span>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-800/50 rounded-lg p-3">
                    <p className="text-white font-medium">
                      {userDetails.brandName || 'Not specified'}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-emerald-400" />
                    <span className="text-gray-400 text-sm font-medium">Contact Email</span>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-800/50 rounded-lg p-3">
                    <p className="text-white font-medium truncate" title={userDetails.email}>
                      {userDetails.email || 'Not specified'}
                    </p>
                  </div>
                </div>

                {/* Analysis Mode */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Brain className="w-4 h-4 text-amber-400" />
                    <span className="text-gray-400 text-sm font-medium">Analysis Mode</span>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-800/50 rounded-lg p-3">
                    <Badge className={getAnalyzeModeColor(userDetails.analyzeMode)}>
                      {getAnalyzeModeLabel(userDetails.analyzeMode)}
                    </Badge>
                  </div>
                </div>

                {/* Competitors */}
                <div className="space-y-2 md:col-span-2">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-red-400" />
                    <span className="text-gray-400 text-sm font-medium">Competitors</span>
                    <Badge className="bg-gray-800/50 text-gray-400 border-gray-700">
                      {userDetails.competitors.length}
                    </Badge>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-800/50 rounded-lg p-3">
                    {userDetails.competitors.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {userDetails.competitors.map((competitor, index) => (
                          <Badge
                            key={index}
                            className="bg-red-500/20 text-red-400 border-red-500/30"
                          >
                            {competitor}
                          </Badge>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-400">No competitors specified</p>
                    )}
                  </div>
                </div>

                {/* Generated Date */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 text-sm font-medium">Generated</span>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-800/50 rounded-lg p-3">
                    <p className="text-white font-medium">
                      {new Date().toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Header Section with Scan Results */}
        <div className="grid grid-cols-1 gap-6">
          <ScanResults />
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-gray-900/50 border-gray-800 backdrop-blur-sm">
            <TabsTrigger value="overview" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white">Overview</TabsTrigger>
            <TabsTrigger value="analysis" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white">Deep Analysis</TabsTrigger>
            <TabsTrigger value="competitors" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white">Competitors</TabsTrigger>
            <TabsTrigger value="insights" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white">Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Visibility & Mentions by Model */}
            <VisibilityByModel />
            
            {/* Audience Persona Sentiment */}
            <PersonaSentiment />
            
            {/* Context Quality & Impact */}
            <ContextQuality />
          </TabsContent>

          <TabsContent value="analysis" className="space-y-6">
            {/* Time Series Trends */}
            <TimeSeriesTrends selectedTimeRange={selectedTimeRange} />
            
            {/* Prompt-Level Insights */}
            <PromptInsights />
          </TabsContent>

          <TabsContent value="competitors" className="space-y-6">
            {/* Competitor Benchmarking */}
            <CompetitorBenchmark />
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            {/* Alerts & Recommendations */}
            <AlertsRecommendations />
            
            {/* Usage & Model Coverage */}
            <UsageModelCoverage />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default ComprehensiveDashboard;
