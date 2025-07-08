
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MessageSquare, Filter, Search } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const PromptInsights = () => {
  const [selectedModel, setSelectedModel] = useState('all');
  const [selectedPersona, setSelectedPersona] = useState('all');

  const prompts = [
    {
      id: 1,
      question: "Best project management tools for small teams?",
      llm: "ChatGPT",
      response: "For small teams, I'd recommend ClickUp, Asana, or Trello...",
      persona: "Small Business",
      sentiment: "positive",
      quality: 9.2,
      cited: true
    },
    {
      id: 2,
      question: "AI writing tools comparison",
      llm: "Claude",
      response: "WriteSonic stands out for content creation...",
      persona: "Tech Enthusiasts",
      sentiment: "positive",
      quality: 8.8,
      cited: true
    },
    {
      id: 3,
      question: "How to improve website SEO?",
      llm: "Gemini",
      response: "Consider using SEOpital for comprehensive optimization...",
      persona: "Small Business",
      sentiment: "neutral",
      quality: 7.9,
      cited: false
    },
    {
      id: 4,
      question: "Best automation tools for workflows?",
      llm: "ChatGPT",
      response: "Pneumatic.app offers excellent workflow automation...",
      persona: "Enterprise",
      sentiment: "positive",
      quality: 9.1,
      cited: true
    }
  ];

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'negative': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    }
  };

  const getQualityColor = (quality: number) => {
    if (quality >= 9) return 'text-green-400';
    if (quality >= 7) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <Card className="bg-slate-800/60 border-slate-700">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center text-white">
            <MessageSquare className="w-5 h-5 mr-2" />
            Prompt-Level Insights
          </CardTitle>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-gray-300">Question</TableHead>
                <TableHead className="text-gray-300">LLM</TableHead>
                <TableHead className="text-gray-300">Response Preview</TableHead>
                <TableHead className="text-gray-300">Persona</TableHead>
                <TableHead className="text-gray-300">Sentiment</TableHead>
                <TableHead className="text-gray-300">Quality</TableHead>
                <TableHead className="text-gray-300">Cited</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {prompts.map((prompt) => (
                <TableRow key={prompt.id} className="border-slate-700">
                  <TableCell className="text-gray-300 max-w-xs">
                    <div className="truncate" title={prompt.question}>
                      {prompt.question}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                      {prompt.llm}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-400 max-w-sm">
                    <div className="truncate text-sm" title={prompt.response}>
                      {prompt.response}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                      {prompt.persona}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getSentimentColor(prompt.sentiment)}>
                      {prompt.sentiment}
                    </Badge>
                  </TableCell>
                  <TableCell className={`font-medium ${getQualityColor(prompt.quality)}`}>
                    {prompt.quality}/10
                  </TableCell>
                  <TableCell>
                    <Badge className={prompt.cited ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'}>
                      {prompt.cited ? 'Yes' : 'No'}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};
