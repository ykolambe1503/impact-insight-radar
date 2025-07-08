
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, TrendingUp, Users, Activity } from 'lucide-react';

export const RealTimeAlerts = () => {
  const alerts = [
    { 
      type: 'positive', 
      message: 'Mentions up 15% on ChatGPT', 
      time: '2m ago',
      icon: TrendingUp,
      severity: 'low'
    },
    { 
      type: 'warning', 
      message: 'Negative sentiment spike on Claude', 
      time: '5m ago',
      icon: AlertTriangle,
      severity: 'medium'
    },
    { 
      type: 'info', 
      message: 'Gen Z engagement increased', 
      time: '12m ago',
      icon: Users,
      severity: 'low'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'medium': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      default: return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
    }
  };

  return (
    <Card className="bg-gradient-to-br from-black via-gray-900 to-black border-gray-800 backdrop-blur-xl shadow-2xl shadow-red-500/10 hover:shadow-red-500/20 transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <CardTitle className="text-sm font-medium text-gray-300">Real-time Alerts</CardTitle>
        <Activity className="h-5 w-5 text-red-400 animate-pulse" />
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {alerts.map((alert, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-gray-900/30 rounded-lg border border-gray-800/50 hover:bg-gray-900/50 transition-all duration-200 animate-fade-in">
              <div className="mt-1 p-1 bg-gray-800/50 rounded-full">
                <alert.icon className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-300 font-medium">{alert.message}</p>
                <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
              </div>
              <Badge className={`${getSeverityColor(alert.severity)} border font-medium`}>
                {alert.severity}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
