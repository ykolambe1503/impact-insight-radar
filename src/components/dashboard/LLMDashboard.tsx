import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  BarChart2,
  Brain,
  CheckCircle,
  Clock,
  Globe,
  Lightbulb,
  Rocket,
  TrendingUp,
  Users,
} from "lucide-react";
import { MetricCard } from './MetricCard';
import { BarChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Bar } from 'recharts';

interface LLMDashboardProps {
  brandName: string;
  data: {
    platforms: Array<{
      name: string;
      mentions: number;
      sentiment: number;
      reach: number;
      engagement: number;
      recommendations: string[];
    }>;
  };
}

const PlatformCard: React.FC<{ platform: LLMDashboardProps['data']['platforms'][0] }> = ({ platform }) => {
  const colorScheme = {
    ChatGPT: '#10b981',
    Claude: '#8b5cf6',
    Gemini: '#f59e0b',
    Perplexity: '#06b6d4',
    Groq: '#ef4444',
    default: '#8884d8',
  };

  const platformColor = colorScheme[platform.name] || colorScheme.default;

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center space-x-2">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ backgroundColor: platformColor }}
          >
            <span className="text-white font-semibold">{platform.name[0]}</span>
          </div>
          <div>
            <CardTitle className="text-lg">{platform.name}</CardTitle>
            <CardDescription>
              {platform.mentions} mentions this month
            </CardDescription>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="text-sm text-green-400">
            +{platform.sentiment.toFixed(1)}%
          </div>
          <TrendingUp className="w-4 h-4 text-green-400" />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <MetricCard
            title="Reach"
            value={platform.reach.toLocaleString()}
            changeType="positive"
            icon={Globe}
            description="Estimated user reach"
          />
          <MetricCard
            title="Engagement"
            value={`${platform.engagement}%`}
            changeType="positive"
            icon={Users}
            description="User engagement rate"
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-300">Recommendations</h3>
          <ul className="space-y-1">
            {platform.recommendations.map((rec, index) => (
              <li key={index} className="flex items-center space-x-2 text-sm text-gray-400">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

const MentionsTimeline: React.FC<{ data: Array<{ date: string; mentions: number }> }> = ({ data }) => {
  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Clock className="w-5 h-5 mr-2" />
          Mentions Timeline
        </CardTitle>
        <CardDescription>
          Brand mentions across platforms over time
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tick={{ fill: '#9ca3af' }} />
            <YAxis tick={{ fill: '#9ca3af' }} />
            <Tooltip />
            <Bar dataKey="mentions" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export const LLMDashboard: React.FC<LLMDashboardProps> = ({ brandName, data }) => {
  const totalMentions = data.platforms.reduce((sum, platform) => sum + platform.mentions, 0);
  const avgSentiment = data.platforms.reduce((sum, platform) => sum + platform.sentiment, 0) / data.platforms.length;

  return (
    <div className="space-y-6">
      {/* Overview Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Mentions"
          value={totalMentions.toLocaleString()}
          changeType="positive"
          icon={Brain}
          description="Total mentions across all platforms"
        />
        <MetricCard
          title="Average Sentiment"
          value={`${avgSentiment.toFixed(1)}%`}
          changeType="positive"
          icon={Rocket}
          description="Overall brand sentiment"
        />
        <MetricCard
          title="Reach"
          value={`${totalMentions * 1000} users`}
          changeType="positive"
          icon={Globe}
          description="Estimated total reach"
        />
        <MetricCard
          title="Engagement Rate"
          value={`${(totalMentions / data.platforms.length).toFixed(1)}%`}
          changeType="positive"
          icon={Users}
          description="Average engagement across platforms"
        />
      </div>

      {/* Platform Performance Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.platforms.map((platform) => (
          <PlatformCard key={platform.name} platform={platform} />
        ))}
      </div>

      {/* Mentions Timeline */}
      <MentionsTimeline
        data={[
          { date: '2025-06-01', mentions: 120 },
          { date: '2025-06-08', mentions: 150 },
          { date: '2025-06-15', mentions: 180 },
          { date: '2025-06-22', mentions: 200 },
          { date: '2025-06-29', mentions: 220 },
        ]}
      />

      {/* Actionable Insights */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Lightbulb className="w-5 h-5 mr-2" />
            Actionable Insights
          </CardTitle>
          <CardDescription>
            Strategic recommendations based on AI platform performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {data.platforms.map((platform) => (
              <div key={platform.name} className="space-y-2">
                <h3 className="text-sm font-medium text-gray-300">
                  {platform.name} Strategy
                </h3>
                <ul className="space-y-1">
                  {platform.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
