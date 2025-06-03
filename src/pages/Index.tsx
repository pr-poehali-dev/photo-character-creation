import Sidebar from "@/components/layout/Sidebar";
import ActionBar from "@/components/layout/ActionBar";
import PromoBanner from "@/components/layout/PromoBanner";
import WhatToCreateSection from "@/components/sections/WhatToCreateSection";
import QuickStartSection from "@/components/sections/QuickStartSection";
import MainContent from "@/components/sections/MainContent";

const Index = () => {
  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#262233" }}>
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <PromoBanner />
        <ActionBar />
        <WhatToCreateSection />
        <QuickStartSection />
        <MainContent />
      </div>
    </div>
  );
};

export default Index;
