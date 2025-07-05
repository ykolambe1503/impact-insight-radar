import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const ReportForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const websiteUrl = searchParams.get("url") || "";

  const [formData, setFormData] = useState({
    brandName: "",
    websiteDescription: "",
    websiteUrl: websiteUrl,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form submitted:", formData);
    // Navigate to report generation page
    navigate(`/report-preview?url=${encodeURIComponent(formData.websiteUrl)}&brand=${encodeURIComponent(formData.brandName)}`);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div 
            onClick={() => navigate("/")} 
            className="cursor-pointer text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300"
          >
            AImpact
          </div>
          <Button 
            onClick={() => navigate("/login")}
            variant="outline" 
            className="bg-transparent border border-white/20 hover:border-white/30 text-white hover:text-white/90 px-6 py-3 rounded-lg hover:bg-white/5 transition-all duration-300"
          >
            Sign In
          </Button>
        </div>
      </nav>

      {/* Glassy Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm" />
      
      {/* Hero Section */}
      <div className="relative z-40 flex items-center justify-center min-h-[80vh] px-6 pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Hero Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 rounded-full px-4 py-2 mb-8">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 text-sm font-medium">AI-Powered Analysis</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                Complete Your Report
              </h1>

              <p className="text-xl text-gray-300 max-w-2xl">
                Provide essential details about your brand to generate a comprehensive AI impact analysis.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => navigate("/")}
                  variant="outline"
                  className="bg-transparent border border-white/20 hover:border-white/30 text-white hover:text-white/90 px-6 py-3 rounded-xl hover:bg-white/5 transition-all duration-300"
                >
                  Back to Home
                </Button>
                <Button
                  onClick={() => window.open(websiteUrl, '_blank')}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl hover:shadow-xl transition-all duration-300"
                >
                  Visit Website
                </Button>
              </div>
            </div>

            {/* Right - Form */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl" />
              <div className="relative bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <label htmlFor="brandName" className="block text-sm font-medium text-white">
                      Brand Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="brandName"
                        name="brandName"
                        value={formData.brandName}
                        onChange={handleChange}
                        placeholder="Enter your brand name"
                        className="w-full md:w-[500px] px-6 py-4 rounded-xl border border-white/20 bg-black/50 text-white placeholder-gray-400 focus:outline-none focus:border-white/30 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                        required
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <span className="text-gray-400">*</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label htmlFor="websiteDescription" className="block text-sm font-medium text-white">
                      Website Description
                    </label>
                    <div className="relative">
                      <textarea
                        id="websiteDescription"
                        name="websiteDescription"
                        value={formData.websiteDescription}
                        onChange={handleChange}
                        placeholder="Briefly describe your website and its purpose"
                        className="w-full md:w-[500px] px-6 py-4 rounded-xl border border-white/20 bg-black/50 text-white placeholder-gray-400 focus:outline-none focus:border-white/30 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                        required
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <span className="text-gray-400">*</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label htmlFor="websiteUrl" className="block text-sm font-medium text-white">
                      Website URL
                    </label>
                    <div className="relative">
                      <input
                        type="url"
                        id="websiteUrl"
                        name="websiteUrl"
                        value={formData.websiteUrl}
                        onChange={handleChange}
                        placeholder="https://yourwebsite.com"
                        className="w-full md:w-[500px] px-6 py-4 rounded-xl border border-white/20 bg-black/50 text-white placeholder-gray-400 focus:outline-none focus:border-white/30 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                        required
                        readOnly
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <span className="text-gray-400">*</span>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
Run Free AI Impact Analysis
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 py-8 px-6 text-center text-gray-400 text-sm">
        <div className="bg-black/80 backdrop-blur-md rounded-t-xl">
          <p>AImpact © 2025. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default ReportForm;
