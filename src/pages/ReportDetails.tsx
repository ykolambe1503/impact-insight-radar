import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Globe, Mail, Users, Plus, Minus, Bot, Rocket, Search, Check, Target } from 'lucide-react';

interface ReportDetailsProps {
  // Add any props if needed
}

const ReportDetails: React.FC<ReportDetailsProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const website = new URLSearchParams(location.search).get('website');

  if (!website) {
    console.error('No website parameter found');
    navigate(-1);
    return null;
  }

  // Initialize form data
  const [formData, setFormData] = useState({
    brandName: '',
    email: '',
    competitors: [] as string[],
    analyzeCompetitors: 'auto', // 'auto', 'manual', or 'both'
  });

  const [newCompetitor, setNewCompetitor] = useState('');
  const [autoCompetitors, setAutoCompetitors] = useState([] as string[]);

  const addCompetitor = () => {
    if (newCompetitor.trim()) {
      setFormData(prev => ({
        ...prev,
        competitors: [...prev.competitors, newCompetitor.trim()]
      }));
      setNewCompetitor('');
    }
  };

  const removeCompetitor = (index: number) => {
    setFormData(prev => ({
      ...prev,
      competitors: prev.competitors.filter((_, i) => i !== index)
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.brandName.trim() || !formData.email.trim()) {
      alert('Please fill in brand name and email');
      return;
    }
    
    const allCompetitors = formData.analyzeCompetitors === 'both' 
      ? [...formData.competitors, ...autoCompetitors]
      : formData.analyzeCompetitors === 'manual'
        ? formData.competitors
        : autoCompetitors;

    navigate(`/ai-report?website=${website}&brand=${encodeURIComponent(formData.brandName)}&email=${encodeURIComponent(formData.email)}&competitors=${encodeURIComponent(JSON.stringify(allCompetitors))}&analyzeMode=${formData.analyzeCompetitors}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Target className="w-12 h-12 text-purple-400" />
                <div>
                  <h1 className="text-4xl font-bold text-white">AI Insights Platform</h1>
                  <p className="text-gray-400 mt-2">
                    Get comprehensive AI-powered analysis of your website and competitors
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Advanced AI analysis using multiple LLMs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Competitor analysis with AI-powered insights</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Real-time performance metrics</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Why Choose AI Insights?</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Rocket className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Get actionable insights in minutes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Search className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Deep competitor analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Brain className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">AI-powered recommendations</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-gray-300 mb-2">
                    Website URL
                  </Label>
                  <Input
                    value={website}
                    disabled
                    className="bg-slate-800/50 border-slate-700 text-white placeholder-gray-400"
                  />
                </div>

                <div>
                  <Label className="text-gray-300 mb-2">
                    Brand Name
                  </Label>
                  <Input
                    name="brandName"
                    placeholder="Enter your brand name"
                    value={formData.brandName}
                    onChange={handleChange}
                    className="bg-slate-800/50 border-slate-700 text-white placeholder-gray-400"
                  />
                </div>

                <div>
                  <Label className="text-gray-300 mb-2">
                    Contact Email
                  </Label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-slate-800/50 border-slate-700 text-white placeholder-gray-400"
                  />
                </div>

                <div>
                  <Label className="text-gray-300 mb-2">
                    Competitor Analysis
                  </Label>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-4">
                        <Button
                          variant={formData.analyzeCompetitors === 'auto' ? 'default' : 'outline'}
                          onClick={() => setFormData(prev => ({ ...prev, analyzeCompetitors: 'auto' }))}
                          className="flex-1"
                        >
                          <Bot className="w-5 h-5 mr-2" />
                          Auto Analysis
                        </Button>
                        <Button
                          variant={formData.analyzeCompetitors === 'manual' ? 'default' : 'outline'}
                          onClick={() => setFormData(prev => ({ ...prev, analyzeCompetitors: 'manual' }))}
                          className="flex-1"
                        >
                          <Search className="w-5 h-5 mr-2" />
                          Manual Entry
                        </Button>
                        <Button
                          variant={formData.analyzeCompetitors === 'both' ? 'default' : 'outline'}
                          onClick={() => setFormData(prev => ({ ...prev, analyzeCompetitors: 'both' }))}
                          className="flex-1"
                        >
                          <Users className="w-5 h-5 mr-2" />
                          Both
                        </Button>
                      </div>
                      <p className="text-sm text-gray-400">
                        Choose how you want to analyze competitors:
                        <br />
                        Auto Analysis: AI will automatically find competitors
                        <br />
                        Manual Entry: You can enter competitors manually
                        <br />
                        Both: AI will find competitors and you can add more manually
                      </p>
                    </div>

                    {formData.analyzeCompetitors !== 'auto' && (
                      <div className="space-y-4">
                        <div className="flex space-x-4">
                          <Input
                            placeholder="Enter competitor URL"
                            value={newCompetitor}
                            onChange={(e) => setNewCompetitor(e.target.value)}
                            className="flex-1 bg-slate-800/50 border-slate-700 text-white placeholder-gray-400"
                          />
                          <Button
                            onClick={addCompetitor}
                            className="bg-purple-600 hover:bg-purple-700 text-white"
                          >
                            <Plus className="w-4 h-4 mr-2" />
                            Add
                          </Button>
                        </div>
                        <div className="space-y-2">
                          {formData.competitors.map((competitor, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <span className="text-gray-300">{competitor}</span>
                              <Button
                                variant="ghost"
                                onClick={() => removeCompetitor(index)}
                                className="text-red-400 hover:text-red-500"
                              >
                                <Minus className="w-4 h-4" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex justify-end space-x-4">
                  <Button
                    variant="outline"
                    onClick={() => navigate(-1)}
                    className="border-purple-400 text-purple-400 hover:bg-purple-500/10"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white hover:scale-105 transition-all duration-300"
                  >
                    <Brain className="w-5 h-5 mr-2" />
                    Continue
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportDetails;
