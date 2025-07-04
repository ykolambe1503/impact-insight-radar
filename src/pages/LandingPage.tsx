
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, TrendingUp, Shield, Sparkles } from "lucide-react";

const LandingPage = () => {
  const navigate = useNavigate();

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
    navigate("/");
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1496307653780-42ee777d4833?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            AI<span className="text-blue-400">mpact</span>
          </div>
          <Button 
            onClick={handleGetStarted}
            variant="outline" 
            className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-md"
          >
            Sign In
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-40 flex items-center justify-center min-h-[80vh] px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Glassy Card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 shadow-2xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">AI-Powered Business Intelligence</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Track Your
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Visibility
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Monitor how your business appears across AI platforms like ChatGPT, Gemini, and Claude. 
              Get real-time sentiment analysis and optimization insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button 
                onClick={handleGetStarted}
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Start Tracking Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-md px-8 py-4 text-lg rounded-xl"
              >
                Watch Demo
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                <BarChart3 className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
                <h3 className="text-2xl font-bold text-white mb-2">3 AI Platforms</h3>
                <p className="text-gray-400">ChatGPT, Gemini & Claude coverage</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                <TrendingUp className="w-8 h-8 text-green-400 mb-4 mx-auto" />
                <h3 className="text-2xl font-bold text-white mb-2">Real-Time</h3>
                <p className="text-gray-400">Instant sentiment analysis</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                <Shield className="w-8 h-8 text-purple-400 mb-4 mx-auto" />
                <h3 className="text-2xl font-bold text-white mb-2">Secure</h3>
                <p className="text-gray-400">Enterprise-grade protection</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative z-40 pb-12">
        <div className="max-w-2xl mx-auto text-center px-6">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Optimize Your AI Presence?
            </h2>
            <p className="text-gray-300 mb-6">
              Join businesses already tracking their AI visibility and improving their digital footprint.
            </p>
            <Button 
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Get Started Free
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-1/3 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-500" />
    </div>
  );
};

export default LandingPage;
