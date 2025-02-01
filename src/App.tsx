import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Trucks from "./pages/Trucks";
import Trips from "./pages/Trips";
import Tracking from "./pages/Tracking";
import Facilities from "./pages/Facilities";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/trucks" element={<Trucks />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/calendar" element={<div className="ml-64 p-8">Calendar page coming soon</div>} />
          <Route path="/schedule" element={<div className="ml-64 p-8">Schedule page coming soon</div>} />
          <Route path="/reports" element={<div className="ml-64 p-8">Reports page coming soon</div>} />
          <Route path="/analytics" element={<div className="ml-64 p-8">Analytics page coming soon</div>} />
          <Route path="/settings" element={<div className="ml-64 p-8">Settings page coming soon</div>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;