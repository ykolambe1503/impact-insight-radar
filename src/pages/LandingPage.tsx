import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, Star, CheckCircle, TrendingUp, Users, Zap, Shield, Brain, Target, ArrowRight, Globe, BarChart3, Eye, Sparkles, Bot } from 'lucide-react';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [website, setWebsite] = useState('');

  const handleRunReport = () => {
    if (website.trim()) {
      navigate(`/report-details?website=${encodeURIComponent(website)}`);
    }
  };

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6 animate-fade-in">
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30 transition-colors">
              <Sparkles className="w-4 h-4 mr-2" />
              Powered by Advanced AI Analysis
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Maximize Your
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient bg-300%">
                {" "}AI Visibility
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover how ChatGPT, Claude, Gemini, and other AI models perceive your website. 
              Get actionable insights to dominate AI-powered search results.
            </p>
          </div>

          {/* CTA Section */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="max-w-md mx-auto space-y-4">
              <div className="flex space-x-2">
                <Input
                  type="url"
                  placeholder="Enter your website URL..."
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="flex-1 bg-slate-800/50 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500"
                />
                <Button 
                  onClick={() => {
                    if (!website.trim()) {
                      alert('Please enter a website URL');
                      return;
                    }
                    
                    try {
                      const url = new URL(website);
                      if (!url.hostname) {
                        throw new Error('Invalid URL');
                      }
                      navigate(`/report-details?website=${encodeURIComponent(website)}`);
                    } catch (error) {
                      alert('Please enter a valid website URL');
                    }
                  }}
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 hover:scale-105 transition-all duration-300"
                >
                  <Brain className="w-5 h-5 mr-2" />
                  Run Free AI Report
                </Button>
              </div>
              <p className="text-sm text-gray-400">
                ✨ Free analysis • No signup required • Results in 30 seconds
              </p>
            </div>
          </div>

          {/* Animated Arrow */}
          <div className="pt-12 animate-bounce">
            <ChevronDown className="w-8 h-8 text-purple-400 mx-auto" />
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Complete AI Visibility Dashboard
            </h2>
            <p className="text-gray-300 text-lg">
              Monitor your performance across all major AI platforms in one place
            </p>
          </div>

          {/* Main Dashboard Preview */}
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {/* AI Visibility Score Preview */}
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white flex items-center">
                    <Eye className="w-5 h-5 mr-2 text-purple-400" />
                    AI Visibility Score
                  </CardTitle>
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                    Live Data
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">73</div>
                  <div className="text-gray-400 text-sm">/100 Overall Score</div>
                </div>
                <div className="space-y-3">
                  {[
                    { name: 'ChatGPT', score: 85, color: '#10b981' },
                    { name: 'Claude', score: 78, color: '#8b5cf6' },
                    { name: 'Gemini', score: 65, color: '#f59e0b' },
                    { name: 'Perplexity', score: 72, color: '#06b6d4' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="text-gray-300 text-sm">{item.name}</span>
                      </div>
                      <span className="text-white font-semibold">{item.score}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Traffic Estimates Preview */}
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                  AI Traffic Estimates
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">1,247</div>
                  <div className="text-green-400 text-sm flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +12% this month
                  </div>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-yellow-400 font-semibold">💰 Traffic Value</span>
                    <span className="text-white font-bold">$847/mo</span>
                  </div>
                  <p className="text-gray-400 text-xs">
                    Based on AI-generated traffic estimates
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Platform Coverage Preview */}
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Bot className="w-5 h-5 mr-2 text-blue-400" />
                  Platform Coverage
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { name: 'ChatGPT', users: '122.6M', icon: '🤖' },
                  { name: 'Claude', users: '45.2M', icon: '🧠' },
                  { name: 'Gemini', users: '35M', icon: '💎' },
                  { name: 'Perplexity', users: '15M', icon: '🔮' }
                ].map((platform, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-slate-900/50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <span>{platform.icon}</span>
                      <span className="text-gray-300">{platform.name}</span>
                    </div>
                    <span className="text-white font-semibold">{platform.users}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Improvement Suggestions Preview */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Target className="w-5 h-5 mr-2 text-yellow-400" />
                🎯 AI Optimization Recommendations
              </CardTitle>
              <p className="text-gray-300 text-sm mt-2">Get personalized suggestions to improve your AI visibility</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    icon: <Brain className="w-5 h-5 text-purple-400" />,
                    title: "Expand content targeting AI search queries",
                    description: "Optimize for generative AI and conversational search patterns"
                  },
                  {
                    icon: <Zap className="w-5 h-5 text-yellow-400" />,
                    title: "Implement structured data and schema markup",
                    description: "Help AI models better understand and cite your content"
                  },
                  {
                    icon: <Eye className="w-5 h-5 text-pink-400" />,
                    title: "Monitor AI-generated content mentions",
                    description: "Track and respond to how AI models represent your brand"
                  },
                  {
                    icon: <TrendingUp className="w-5 h-5 text-orange-400" />,
                    title: "Create prompt-optimized content",
                    description: "Develop content that performs well in AI model responses"
                  }
                ].map((suggestion, index) => (
                  <div key={index} className="bg-slate-900/50 p-4 rounded-lg hover:bg-slate-900/70 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-purple-500/20 rounded-lg">
                        {suggestion.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">{suggestion.title}</h4>
                        <p className="text-gray-400 text-sm">{suggestion.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-40 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-blue-400 animate-pulse">AI Visibility</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead of the competition with comprehensive AI visibility tracking and actionable insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
              <Eye className="w-12 h-12 text-blue-400 mb-6 group-hover:animate-pulse" />
              <h3 className="text-2xl font-bold text-white mb-4">Complete Visibility</h3>
              <p className="text-gray-300">
                Track how your business appears across all major AI platforms in one centralized dashboard.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
              <Target className="w-12 h-12 text-green-400 mb-6 group-hover:animate-spin" />
              <h3 className="text-2xl font-bold text-white mb-4">Sentiment Analysis</h3>
              <p className="text-gray-300">
                Get detailed sentiment scores and understand how AI perceives your brand and messaging.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
              <Zap className="w-12 h-12 text-yellow-400 mb-6 group-hover:animate-bounce" />
              <h3 className="text-2xl font-bold text-white mb-4">Optimization Tips</h3>
              <p className="text-gray-300">
                Receive actionable recommendations to improve your AI visibility and sentiment scores.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
              <Bot className="w-12 h-12 text-purple-400 mb-6 group-hover:animate-pulse" />
              <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Insights</h3>
              <p className="text-gray-300">
                Leverage advanced AI algorithms to uncover patterns and opportunities in your data.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
              <Users className="w-12 h-12 text-pink-400 mb-6 group-hover:animate-bounce" />
              <h3 className="text-2xl font-bold text-white mb-4">Multi-Persona Testing</h3>
              <p className="text-gray-300">
                Test how different user personas perceive your business across various AI platforms.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
              <TrendingUp className="w-12 h-12 text-orange-400 mb-6 group-hover:animate-pulse" />
              <h3 className="text-2xl font-bold text-white mb-4">Historical Tracking</h3>
              <p className="text-gray-300">
                Monitor changes over time and track the impact of your optimization efforts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative z-40 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How It <span className="text-blue-400">Works</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get started with AI visibility tracking in just three simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-all duration-300 animate-pulse">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">Enter Your Website</h3>
              <p className="text-gray-300">
                Simply provide your website URL and select the persona you want to test with.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-all duration-300 animate-pulse delay-200">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">AI Analysis</h3>
              <p className="text-gray-300">
                Our AI queries multiple platforms and analyzes the responses for sentiment and visibility.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-all duration-300 animate-pulse delay-400">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">Get Insights</h3>
              <p className="text-gray-300">
                Receive detailed reports with actionable recommendations to improve your AI presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-40 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="text-blue-400">Users Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:scale-105 transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-white font-bold">JS</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-semibold">John Smith</h4>
                  <p className="text-gray-400 text-sm">Marketing Director</p>
                </div>
              </div>
              <p className="text-gray-300">
                "AImpact helped us understand how our brand appears in AI responses. The insights were game-changing for our digital strategy."
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:scale-105 transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center animate-pulse delay-200">
                  <span className="text-white font-bold">SD</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-semibold">Sarah Davis</h4>
                  <p className="text-gray-400 text-sm">Small Business Owner</p>
                </div>
              </div>
              <p className="text-gray-300">
                "Finally, a tool that shows me how AI platforms perceive my business. The optimization suggestions are incredibly valuable."
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:scale-105 transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center animate-pulse delay-400">
                  <span className="text-white font-bold">MJ</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-semibold">Mike Johnson</h4>
                  <p className="text-gray-400 text-sm">Tech Startup Founder</p>
                </div>
              </div>
              <p className="text-gray-300">
                "The multi-persona testing feature is brilliant. We can see how different audiences perceive us through AI."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative z-40 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple <span className="text-blue-400">Pricing</span>
            </h2>
            <p className="text-xl text-gray-300">
              Start for free and scale as you grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:scale-105 transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-white mb-4">Free Plan</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$0</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 animate-pulse" />
                  5 reports per month
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 animate-pulse delay-100" />
                  Basic sentiment analysis
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 animate-pulse delay-200" />
                  3 AI platforms
                </li>
              </ul>
              <Button 
                onClick={handleGetStarted}
                className="w-full bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300"
                variant="outline"
              >
                Get Started Free
              </Button>
            </div>

            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 rounded-2xl p-8 relative hover:scale-105 transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold animate-pulse">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Pro Plan</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$29</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 animate-pulse" />
                  Unlimited reports
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 animate-pulse delay-100" />
                  Advanced analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 animate-pulse delay-200" />
                  All AI platforms
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 animate-pulse delay-300" />
                  Priority support
                </li>
              </ul>
              <Button 
                onClick={handleGetStarted}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white hover:scale-105 transition-all duration-300"
              >
                Start Pro Trial
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="relative z-40 pb-12">
        <div className="max-w-2xl mx-auto text-center px-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:scale-105 transition-all duration-300 transform hover:-translate-y-2">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Optimize Your AI Presence?
            </h2>
            <p className="text-gray-300 mb-6">
              Join thousands of businesses already tracking their AI visibility and improving their digital footprint.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
              <Input
                type="url"
                placeholder="Your website URL"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 flex-1"
              />
              <Button 
                onClick={handleRunReport}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                Start Free
                <ArrowRight className="ml-2 w-4 h-4 animate-bounce" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-ping" />
      <div className="absolute top-1/3 right-10 w-32 h-32 bg-purple-500/10 rounded-full animate-ping delay-1000" />
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-pink-500/10 rounded-full animate-ping delay-500" />
    </div>
  );
};

export default LandingPage;
