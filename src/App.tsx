import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LandingPage from "./pages/LandingPage";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import ReportDetails from "./pages/ReportDetails";
import AIReportAnalysis from "./pages/AIReportAnalysis";
import NotFound from "./pages/NotFound";
import Settings from "./pages/Settings";
import Help from "./pages/Help";
import ComprehensiveDashboard from '@/pages/ComprehensiveDashboard';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Layout><Index /></Layout>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/comprehensive-dashboard" element={<ComprehensiveDashboard />} />
            <Route path="/report-details" element={<Layout><ReportDetails /></Layout>} />
            <Route path="/ai-report" element={<Layout><AIReportAnalysis /></Layout>} />
            <Route path="/settings" element={<Layout><Settings /></Layout>} />
            <Route path="/help" element={<Layout><Help /></Layout>} />
            <Route path="/features" element={<Layout><LandingPage /></Layout>} />
            <Route path="/how-it-works" element={<Layout><LandingPage /></Layout>} />
            <Route path="/pricing" element={<Layout><LandingPage /></Layout>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<Layout><NotFound /></Layout>} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

// Type definitions for components
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sonner-toaster': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
