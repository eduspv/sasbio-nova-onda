import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ScrollToTop } from "@/components/ScrollToTop";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import FranchisePage from "./pages/FranchisePage";

// ✅ Páginas específicas de serviço
import ServicePage from "./pages/ServicesPage";
import BiodescontaminacaoPage from "./pages/services/biodescontaminacao";
import SasmuvPage from "./pages/services/sasmuv";
import BanhoNoLeitoPage from "./pages/services/banho-no-leito";
import SaudeMentalPage from "./pages/services/saude-mental";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          {/* ✅ GARANTE QUE TODA ROTA ABRA NO TOPO */}
          <ScrollToTop />

          <Routes>
            <Route path="/" element={<HomePage />} />

            {/* Serviços */}
            <Route path="/servicos" element={<ServicePage />} />
            <Route
              path="/servicos/biodescontaminacao"
              element={<BiodescontaminacaoPage />}
            />
            <Route path="/servicos/sasmuv" element={<SasmuvPage />} />
            <Route
              path="/servicos/banho-no-leito"
              element={<BanhoNoLeitoPage />}
            />
            <Route
              path="/servicos/saude-mental"
              element={<SaudeMentalPage />}
            />

            {/* Páginas gerais */}
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/noticias" element={<NewsPage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route
              path="/sejaumfranqueado"
              element={<FranchisePage />}
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
