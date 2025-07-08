
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
      case 'medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default: return 'bg-green-500/20 text-green-400 border-green-500/30';
    }
  };

  return (
    <Card className="bg-slate-800/60 border-slate-700">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-300">Real-time Alerts</CardTitle>
        <Activity className="h-5 w-5 text-red-400 animate-pulse" />
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {alerts.map((alert, index) => (
            <div key={index} className="flex items-start space-x-3 animate-fade-in">
              <alert.icon className="w-4 h-4 mt-1 text-gray-400" />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-300">{alert.message}</p>
                <p className="text-xs text-gray-500">{alert.time}</p>
              </div>
              <Badge className={getSeverityColor(alert.severity)}>
                {alert.severity}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
