
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';
import { Globe, User, Settings, HelpCircle, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (path: string) => {
    console.log('Navigating to:', path);
    navigate(path);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900 to-pink-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-4 cursor-pointer" onClick={() => handleNav('/')}>
            <Globe className="w-8 h-8 text-purple-400" />
            <span className="text-xl font-bold text-white">AI Impact Radar</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Button
              variant="ghost"
              onClick={() => handleNav('/')}
              className={`text-white hover:text-purple-400 ${
                isActive('/') ? 'text-purple-400 font-semibold' : ''
              }`}
            >
              Home
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleNav('/features')}
              className={`text-white hover:text-purple-400 ${
                isActive('/features') ? 'text-purple-400 font-semibold' : ''
              }`}
            >
              Features
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleNav('/how-it-works')}
              className={`text-white hover:text-purple-400 ${
                isActive('/how-it-works') ? 'text-purple-400 font-semibold' : ''
              }`}
            >
              How it Works
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleNav('/pricing')}
              className={`text-white hover:text-purple-400 ${
                isActive('/pricing') ? 'text-purple-400 font-semibold' : ''
              }`}
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
              className="bg-purple-600 hover:bg-purple-700 text-white border-purple-600"
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
