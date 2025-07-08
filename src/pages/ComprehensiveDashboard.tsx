
import React, { useState, useEffect } from 'react';
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
  Zap
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

const ComprehensiveDashboard: React.FC = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d');

  return (
    <DashboardLayout>
      <div className="space-y-8 animate-fade-in">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <BrandVisibilityScore />
          <ShareOfVoice />
          <RealTimeAlerts />
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
