import { useState } from "react";
import { Hero } from "@/components/sections/Hero";
import { Legislation } from "@/components/sections/Legislation";
import { Services } from "@/components/sections/Services";
import { Barriers } from "@/components/sections/Barriers";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FlashAuditModal } from "@/components/modals/FlashAuditModal";
import { BudgetEstimationModal } from "@/components/modals/BudgetEstimationModal";

const Index = () => {
  const [isFlashAuditOpen, setIsFlashAuditOpen] = useState(false);
  const [isBudgetEstimationOpen, setIsBudgetEstimationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero 
          onFlashAuditClick={() => setIsFlashAuditOpen(true)}
          onEstimateClick={() => setIsBudgetEstimationOpen(true)}
        />
        <Legislation />
        <Services />
        <Barriers />
      </main>
      <Footer />
      
      <FlashAuditModal 
        isOpen={isFlashAuditOpen} 
        onClose={() => setIsFlashAuditOpen(false)} 
      />
      <BudgetEstimationModal 
        isOpen={isBudgetEstimationOpen} 
        onClose={() => setIsBudgetEstimationOpen(false)} 
      />
    </div>
  );
};

export default Index;
