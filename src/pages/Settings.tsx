import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Settings, 
  AlertCircle, 
  CheckCircle, 
  Info, 
  Mail, 
  Bell, 
  Globe, 
  Lock
} from 'lucide-react';

const SettingsPage = () => {
  const navigate = useNavigate();
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="text-center">
            <Settings className="w-12 h-12 mx-auto text-purple-400 mb-4" />
            <h1 className="text-3xl font-bold text-white">Settings</h1>
            <p className="text-gray-400 mt-2">Configure your AI Insights preferences</p>
          </div>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="w-5 h-5 mr-2 text-purple-400" />
                Account Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <label className="text-gray-300">Password</label>
                    <div className="mt-1">
                      <Input type="password" placeholder="••••••••" className="bg-slate-800/50 border-slate-700" />
                    </div>
                  </div>
                  <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-500/10">
                    Change
                  </Button>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <label className="text-gray-300">2FA Status</label>
                    <div className="mt-1">
                      <Badge variant="outline" className="text-purple-400 border-purple-400">
                        Disabled
                      </Badge>
                    </div>
                  </div>
                  <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-500/10">
                    Enable 2FA
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-purple-400" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <label className="text-gray-300">Email Notifications</label>
                    <div className="mt-1">
                      <Badge variant="outline" className="text-purple-400 border-purple-400">
                        Enabled
                      </Badge>
                    </div>
                  </div>
                  <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-500/10">
                    Manage
                  </Button>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <label className="text-gray-300">Alert Threshold</label>
                    <div className="mt-1">
                      <Input type="number" placeholder="AI Score Drop" className="bg-slate-800/50 border-slate-700 w-24" />
                    </div>
                  </div>
                  <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-500/10">
                    Set
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="w-5 h-5 mr-2 text-purple-400" />
                API Integration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <label className="text-gray-300">API Key</label>
                    <div className="mt-1">
                      <Input type="password" placeholder="••••••••" className="bg-slate-800/50 border-slate-700" />
                    </div>
                  </div>
                  <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-500/10">
                    Regenerate
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
