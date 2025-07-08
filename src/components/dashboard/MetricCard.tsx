
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: LucideIcon;
  iconColor?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export const MetricCard = ({ 
  title, 
  value, 
  change, 
  changeType = 'neutral', 
  icon: Icon, 
  iconColor = 'text-purple-400',
  description,
  children,
  className
}: MetricCardProps) => {
  const changeColors = {
    positive: 'text-emerald-400 bg-emerald-400/10',
    negative: 'text-red-400 bg-red-400/10',
    neutral: 'text-gray-400 bg-gray-400/10'
  };

  return (
    <Card className={`bg-gradient-to-br from-black via-gray-900 to-black border-gray-800 backdrop-blur-xl shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300 ${className || ''}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <CardTitle className="text-sm font-medium text-gray-300">{title}</CardTitle>
        <Icon className={`h-5 w-5 ${iconColor}`} />
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline space-x-3">
          <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{value}</div>
          {change && (
            <div className={`text-sm px-2 py-1 rounded-full ${changeColors[changeType]}`}>
              {change}
            </div>
          )}
        </div>
        {description && (
          <p className="text-xs text-gray-500 mt-2">{description}</p>
        )}
        {children && (
          <div className="mt-4">
            {children}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MetricCard;
