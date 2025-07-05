
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Star, CheckCircle, TrendingUp, Users, Zap, Shield, Brain, Target, ArrowRight, Globe, BarChart3, Eye, Sparkles, Bot } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();
  const [website, setWebsite] = useState('');

  const handleRunReport = () => {
    if (website.trim()) {
      navigate(`/ai-report?website=${encodeURIComponent(website)}`);
    }
  };

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="relative z-50 px-6 py-4">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">AI Visibility</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white">
              Sign In
            </Button>
          </div>
        </nav>
      </header>

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
                  onClick={handleRunReport}
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

      {/* Sample Dashboard Preview */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              See What You'll Get
            </h2>
            <p className="text-gray-300 text-lg">
              Preview of your comprehensive AI visibility dashboard
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dashboardPreviews.map((item, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                      <item.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <CardTitle className="text-white">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <div className="bg-slate-900/50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">{item.metric}</span>
                      <span className="text-lg font-bold text-purple-400">{item.value}</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-40 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-blue-400 animate-pulse">AImpact</span>?
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
                onClick={handleGetStarted}
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

const dashboardPreviews = [
  {
    title: "AI Model Scores",
    description: "See how each AI model rates your website across key metrics",
    icon: BarChart3,
    metric: "Average Score",
    value: "8.2/10",
    progress: 82
  },
  {
    title: "Visibility Trends",
    description: "Track your AI visibility performance over time",
    icon: TrendingUp,
    metric: "Growth Rate",
    value: "+24%",
    progress: 75
  },
  {
    title: "Content Analysis",
    description: "Detailed breakdown of content optimization opportunities",
    icon: Eye,
    metric: "Optimization",
    value: "67%",
    progress: 67
  }
];

export default LandingPage;
