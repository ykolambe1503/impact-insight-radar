
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, BarChart3, TrendingUp, Shield, Sparkles, CheckCircle, Users, Zap, Eye, Target, Bot, Globe, MessageSquare, Brain } from "lucide-react";

const LandingPage = () => {
  const navigate = useNavigate();
  const [websiteUrl, setWebsiteUrl] = useState("");

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        navigate("/dashboard");
      }
    };
    checkUser();
  }, [navigate]);

  const handleGetStarted = () => {
    navigate("/login");
  };

  const handleRunReport = () => {
    if (websiteUrl) {
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1496307653780-42ee777d4833?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 p-6 animate-fade-in">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-white hover:scale-105 transition-transform duration-300">
            AI<span className="text-blue-400">mpact</span>
          </div>
          <Button 
            onClick={handleGetStarted}
            variant="outline" 
            className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300"
          >
            Sign In
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-40 flex items-center justify-center min-h-[80vh] px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Glassy Card */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-12 shadow-2xl hover:bg-white/10 transition-all duration-500 transform hover:scale-[1.02]">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-2 mb-8 animate-pulse">
              <Sparkles className="w-4 h-4 text-blue-400 animate-spin" />
              <span className="text-blue-300 text-sm font-medium">AI-Powered Business Intelligence</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
              Track Your
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                AI Visibility
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
              Monitor how your business appears across AI platforms like ChatGPT, Gemini, and Claude. 
              Get real-time sentiment analysis and optimization insights.
            </p>

            {/* CTA Input Section */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in delay-500 max-w-2xl mx-auto">
              <div className="flex-1 w-full">
                <Input
                  type="url"
                  placeholder="Enter your website URL (e.g., yoursite.com)"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-14 text-lg rounded-xl focus:bg-white/20 transition-all duration-300"
                />
              </div>
              <Button 
                onClick={handleRunReport}
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 h-14"
              >
                Run Free AI Report
                <ArrowRight className="ml-2 w-5 h-5 animate-bounce" />
              </Button>
            </div>

            <p className="text-gray-400 text-sm animate-fade-in delay-700">
              ✨ Free report • No signup required • Get results in 60 seconds
            </p>
          </div>
        </div>
      </div>

      {/* Sample Dashboard Section */}
      <div className="relative z-40 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              See Your <span className="text-blue-400 animate-pulse">AI Presence</span> in Action
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get comprehensive insights into how AI platforms perceive and present your business.
            </p>
          </div>

          {/* Dashboard Preview */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-[1.01]">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">AI Visibility Dashboard</h3>
                <p className="text-gray-400">Real-time monitoring across all major AI platforms</p>
              </div>
              <div className="bg-green-500/20 border border-green-400/30 rounded-full px-4 py-2">
                <span className="text-green-300 text-sm font-medium">● Live Tracking</span>
              </div>
            </div>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* Sentiment Score Card */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-white">Overall Sentiment</h4>
                  <TrendingUp className="w-6 h-6 text-green-400 group-hover:animate-bounce" />
                </div>
                <div className="text-4xl font-bold text-green-400 mb-2">8.4/10</div>
                <p className="text-gray-400 text-sm">↑ 12% from last week</p>
                <div className="mt-4 bg-green-400/20 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full w-4/5 animate-pulse"></div>
                </div>
              </div>

              {/* Platform Coverage */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-white">Platform Coverage</h4>
                  <Globe className="w-6 h-6 text-blue-400 group-hover:animate-spin" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">ChatGPT</span>
                    <span className="text-green-400 font-medium">Active</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Gemini</span>
                    <span className="text-green-400 font-medium">Active</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Claude</span>
                    <span className="text-green-400 font-medium">Active</span>
                  </div>
                </div>
              </div>

              {/* Recent Queries */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-white">Recent Queries</h4>
                  <MessageSquare className="w-6 h-6 text-purple-400 group-hover:animate-pulse" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">247</div>
                <p className="text-gray-400 text-sm">mentions this month</p>
                <div className="mt-4 flex items-center text-purple-400">
                  <ArrowRight className="w-4 h-4 animate-bounce mr-2" />
                  <span className="text-sm">View all queries</span>
                </div>
              </div>
            </div>

            {/* AI Responses Preview */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Brain className="w-5 h-5 text-blue-400 mr-2 animate-pulse" />
                AI Response Analysis
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-blue-400 font-medium">ChatGPT Response</span>
                    <span className="text-green-400 text-sm">Positive (9.2/10)</span>
                  </div>
                  <p className="text-gray-300 text-sm italic">
                    "This company is known for innovative solutions and excellent customer service..."
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-purple-400 font-medium">Claude Response</span>
                    <span className="text-green-400 text-sm">Positive (8.7/10)</span>
                  </div>
                  <p className="text-gray-300 text-sm italic">
                    "A reputable business with strong market presence and positive customer feedback..."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-40 py-20 px-6">
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
      </div>

      {/* How It Works Section */}
      <div className="relative z-40 py-20 px-6">
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
      </div>

      {/* Testimonials Section */}
      <div className="relative z-40 py-20 px-6">
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
      </div>

      {/* Pricing Section */}
      <div className="relative z-40 py-20 px-6">
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
      </div>

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

export default LandingPage;
