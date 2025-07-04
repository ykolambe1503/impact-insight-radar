
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Loader2, LogOut, Plus } from "lucide-react";
import type { Tables } from "@/integrations/supabase/types";

type Report = Tables<"reports">;

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState<any>(null);
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [formData, setFormData] = useState({
    website_url: "",
    persona: ""
  });

  useEffect(() => {
    checkUser();
    fetchReports();
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      navigate("/");
      return;
    }
    setUser(user);
  };

  const fetchReports = async () => {
    try {
      const { data, error } = await supabase
        .from("reports")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setReports(data || []);
    } catch (error) {
      console.error("Error fetching reports:", error);
      toast({
        title: "Error",
        description: "Failed to fetch reports",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const generateReport = async () => {
    if (!formData.website_url || !formData.persona) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setGenerating(true);
    try {
      // Mock ChatGPT response and sentiment analysis for now
      const mockChatGptResponse = `This website has great potential for ${formData.persona}. The design is modern and the content is engaging. However, there are opportunities for improvement in user experience and content optimization.`;
      const mockSentimentScore = Math.floor(Math.random() * 30) + 60; // 60-90%
      const geminiScore = 65;
      const claudeScore = 70;
      const averageScore = Math.round((mockSentimentScore + geminiScore + claudeScore) / 3);

      const optimizationSuggestions = mockSentimentScore < 70 
        ? `Consider improving content for ${formData.persona}: Use more engaging headlines, add testimonials, and optimize for mobile experience.`
        : `Great performance for ${formData.persona}! Consider A/B testing different call-to-action buttons to further improve engagement.`;

      const { data, error } = await supabase
        .from("reports")
        .insert({
          user_id: user.id,
          website_url: formData.website_url,
          persona: formData.persona as any,
          chatgpt_response: mockChatGptResponse,
          chatgpt_sentiment_score: mockSentimentScore,
          gemini_sentiment_score: geminiScore,
          claude_sentiment_score: claudeScore,
          average_sentiment_score: averageScore,
          optimization_suggestions: optimizationSuggestions,
        })
        .select()
        .single();

      if (error) throw error;

      toast({
        title: "Report Generated!",
        description: "Your AI visibility report has been created successfully.",
      });

      navigate(`/report/${data.id}`);
    } catch (error) {
      console.error("Error generating report:", error);
      toast({
        title: "Error",
        description: "Failed to generate report",
        variant: "destructive",
      });
    } finally {
      setGenerating(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-900">
            AI<span className="text-blue-600">mpact</span>
          </h1>
          <Button onClick={handleSignOut} variant="outline" size="sm">
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Report Generation Form */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Plus className="h-5 w-5 mr-2" />
                  Generate New Report
                </CardTitle>
                <CardDescription>
                  Analyze your website's visibility across AI platforms
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Website URL</label>
                  <Input
                    type="url"
                    placeholder="https://example.com"
                    value={formData.website_url}
                    onChange={(e) => setFormData(prev => ({ ...prev, website_url: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Target Persona</label>
                  <Select onValueChange={(value) => setFormData(prev => ({ ...prev, persona: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a persona" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Gen Z">Gen Z</SelectItem>
                      <SelectItem value="Small Business Owner">Small Business Owner</SelectItem>
                      <SelectItem value="Tech Enthusiast">Tech Enthusiast</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button 
                  onClick={generateReport} 
                  disabled={generating}
                  className="w-full"
                >
                  {generating ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Generating Report...
                    </>
                  ) : (
                    "Generate Report"
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Reports Table */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Your Reports</CardTitle>
                <CardDescription>
                  Click on any report to view detailed analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                {reports.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <p>No reports generated yet.</p>
                    <p className="text-sm">Create your first report to get started!</p>
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Website</TableHead>
                        <TableHead>Persona</TableHead>
                        <TableHead>Avg. Score</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {reports.map((report) => (
                        <TableRow 
                          key={report.id}
                          className="cursor-pointer hover:bg-gray-50"
                          onClick={() => navigate(`/report/${report.id}`)}
                        >
                          <TableCell>
                            {new Date(report.created_at).toLocaleDateString()}
                          </TableCell>
                          <TableCell className="max-w-xs truncate">
                            {report.website_url}
                          </TableCell>
                          <TableCell>
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                              {report.persona}
                            </span>
                          </TableCell>
                          <TableCell>
                            <span className={`font-medium ${
                              (report.average_sentiment_score || 0) >= 70 
                                ? 'text-green-600' 
                                : (report.average_sentiment_score || 0) >= 50 
                                ? 'text-yellow-600' 
                                : 'text-red-600'
                            }`}>
                              {report.average_sentiment_score}%
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
