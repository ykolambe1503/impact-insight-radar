import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Globe, User, Settings, HelpCircle, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleNav = (path: string) => {
    navigate(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900 to-pink-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Globe className="w-8 h-8 text-purple-400" />
            <span className="text-xl font-bold text-white">AI Impact Radar</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Button
              variant="ghost"
              onClick={() => handleNav('/')}
              className="text-white hover:text-purple-400"
            >
              Home
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleNav('/features')}
              className="text-white hover:text-purple-400"
            >
              Features
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleNav('/how-it-works')}
              className="text-white hover:text-purple-400"
            >
              How it Works
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleNav('/pricing')}
              className="text-white hover:text-purple-400"
            >
              Pricing
            </Button>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => handleNav('/help')}
              className="text-white hover:text-purple-400"
            >
              <HelpCircle className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleNav('/settings')}
              className="text-white hover:text-purple-400"
            >
              <Settings className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              onClick={() => handleNav('/login')}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
