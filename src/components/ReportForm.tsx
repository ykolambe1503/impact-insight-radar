import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Globe, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ReportFormProps {
  onFormSubmit: (data: {
    brandName: string;
    website: string;
    email: string;
  }) => void;
}

const ReportForm = ({ onFormSubmit }: ReportFormProps) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    brandName: '',
    website: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.brandName.trim() || !formData.website.trim() || !formData.email.trim()) {
      alert('Please fill in all fields');
      return;
    }
    onFormSubmit(formData);
  };

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Brain className="w-5 h-5 mr-2 text-purple-400" />
          Run AI Report
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="brandName" className="text-gray-300">
              Brand Name
            </Label>
            <Input
              id="brandName"
              name="brandName"
              placeholder="Enter your brand name"
              value={formData.brandName}
              onChange={handleChange}
              className="bg-slate-800/50 border-slate-700 text-white placeholder-gray-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="website" className="text-gray-300">
              Website URL
            </Label>
            <Input
              id="website"
              name="website"
              type="url"
              placeholder="Enter your website URL"
              value={formData.website}
              onChange={handleChange}
              className="bg-slate-800/50 border-slate-700 text-white placeholder-gray-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300">
              Contact Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              className="bg-slate-800/50 border-slate-700 text-white placeholder-gray-400"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white hover:scale-105 transition-all duration-300"
          >
            <Brain className="w-5 h-5 mr-2" />
            Run Report
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ReportForm;
