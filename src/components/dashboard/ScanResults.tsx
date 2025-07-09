
import React, { useState } from 'react';
import { ScanResultCard } from './ScanResultCard';

export const ScanResults = () => {
  const [isScanning, setIsScanning] = useState(false);

  // Mock scan data
  const mockScanResult = {
    visibilityScore: 87,
    mentions: [
      { model: 'ChatGPT', count: 247, color: '#10b981' },
      { model: 'Claude', count: 189, color: '#8b5cf6' },
      { model: 'Gemini', count: 156, color: '#f59e0b' },
      { model: 'Grok', count: 98, color: '#ef4444' },
      { model: 'Perplexity', count: 87, color: '#06b6d4' }
    ],
    personaSentiment: [
      { persona: 'Gen Z', positive: 78, neutral: 18, negative: 4 },
      { persona: 'Small Business', positive: 82, neutral: 15, negative: 3 },
      { persona: 'Tech Enthusiasts', positive: 89, neutral: 10, negative: 1 },
      { persona: 'Enterprise', positive: 71, neutral: 22, negative: 7 }
    ],
    recommendation: "Focus on creating more casual, Gen Z-friendly content to improve sentiment scores. Consider adding interactive elements and trending topics to boost engagement across all AI models."
  };

  const handleScanAgain = async () => {
    setIsScanning(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsScanning(false);
  };

  return (
    <div className="w-full">
      <ScanResultCard 
        result={mockScanResult}
        onScanAgain={handleScanAgain}
        isScanning={isScanning}
      />
    </div>
  );
};
