
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BarChart3, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import type { Tables } from "@/integrations/supabase/types";

type Report = Tables<"reports">;

const ReportDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [report, setReport] = useState<Report | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReport();
  }, [id]);

  const fetchReport = async () => {
    try {
      const { data, error } = await supabase
        .from("reports")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;
      setReport(data);
    } catch (error) {
      console.error("Error fetching report:", error);
      navigate("/dashboard");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!report) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Report not found</p>
      </div>
    );
  }

  const chartData = [
    {
      name: "ChatGPT",
      score: report.chatgpt_sentiment_score || 0,
    },
    {
      name: "Gemini",
      score: report.gemini_sentiment_score || 0,
    },
    {
      name: "Claude",
      score: report.claude_sentiment_score || 0,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Button 
            onClick={() => navigate("/dashboard")} 
            variant="ghost" 
            className="mb-2"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          <h1 className="text-2xl font-bold text-blue-900">Report Details</h1>
          <p className="text-gray-600">Generated on {new Date(report.created_at).toLocaleDateString()}</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Report Overview */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Website Analysis</CardTitle>
                <CardDescription>
                  Target URL: {report.website_url}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Target Persona</label>
                    <div className="mt-1">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {report.persona}
                      </span>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Visibility Status</label>
                    <div className="mt-1">
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        {report.visibility_status}
                      </span>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Average Sentiment Score</label>
                    <div className="mt-1">
                      <span className={`text-2xl font-bold ${
                        (report.average_sentiment_score || 0) >= 70 
                          ? 'text-green-600' 
                          : (report.average_sentiment_score || 0) >= 50 
                          ? 'text-yellow-600' 
                          : 'text-red-600'
                      }`}>
                        {report.average_sentiment_score}%
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Optimization Suggestions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  {report.optimization_suggestions}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sentiment Analysis Chart */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  AI Platform Sentiment Scores
                </CardTitle>
                <CardDescription>
                  Sentiment analysis across different AI platforms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis domain={[0, 100]} />
                      <Tooltip 
                        formatter={(value) => [`${value}%`, 'Sentiment Score']}
                      />
                      <Bar 
                        dataKey="score" 
                        fill="#2563eb" 
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ChatGPT Analysis</CardTitle>
                <CardDescription>
                  Detailed response from ChatGPT
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">
                    {report.chatgpt_response}
                  </p>
                </div>
                <div className="mt-4">
                  <span className="text-sm font-medium text-gray-600">Sentiment Score: </span>
                  <span className={`font-bold ${
                    (report.chatgpt_sentiment_score || 0) >= 70 
                      ? 'text-green-600' 
                      : (report.chatgpt_sentiment_score || 0) >= 50 
                      ? 'text-yellow-600' 
                      : 'text-red-600'
                  }`}>
                    {report.chatgpt_sentiment_score}%
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ReportDetail;
