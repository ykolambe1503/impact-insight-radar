import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  HelpCircle, 
  AlertCircle, 
  CheckCircle, 
  Info, 
  FileText, 
  Mail, 
  Phone, 
  Globe
} from 'lucide-react';

const HelpPage = () => {
  const navigate = useNavigate();
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="text-center">
            <HelpCircle className="w-12 h-12 mx-auto text-purple-400 mb-4" />
            <h1 className="text-3xl font-bold text-white">Help Center</h1>
            <p className="text-gray-400 mt-2">Get help with AI Insights features and support</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-purple-400" />
                  Documentation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Detailed guides and API documentation
                  </p>
                  <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-500/10 w-full">
                    View Documentation
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-purple-400" />
                  Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Contact our support team
                  </p>
                  <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-500/10 w-full">
                    Open Support Ticket
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-purple-400" />
                  Live Chat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Chat with our support team
                  </p>
                  <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-500/10 w-full">
                    Start Chat
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-purple-400" />
                  Community
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Join our community forums
                  </p>
                  <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-500/10 w-full">
                    Visit Forums
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">FAQs</h2>
            <div className="space-y-4">
              <div className="bg-slate-800/50 border-slate-700 rounded-lg p-4">
                <h3 className="text-gray-300 mb-2">How does AI Insights work?</h3>
                <p className="text-gray-400">
                  AI Insights analyzes your website's presence across major AI platforms, providing detailed visibility scores and optimization suggestions.
                </p>
              </div>
              <div className="bg-slate-800/50 border-slate-700 rounded-lg p-4">
                <h3 className="text-gray-300 mb-2">What platforms are monitored?</h3>
                <p className="text-gray-400">
                  We monitor ChatGPT, Claude, Gemini, and other major AI platforms to provide comprehensive visibility insights.
                </p>
              </div>
              <div className="bg-slate-800/50 border-slate-700 rounded-lg p-4">
                <h3 className="text-gray-300 mb-2">How often are updates provided?</h3>
                <p className="text-gray-400">
                  Real-time monitoring with daily updates to your visibility scores and recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
