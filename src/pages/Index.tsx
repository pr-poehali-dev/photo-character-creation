import Sidebar from "@/components/layout/Sidebar";
import ActionBar from "@/components/layout/ActionBar";
import PromoBanner from "@/components/layout/PromoBanner";
import WhatToCreateSection from "@/components/sections/WhatToCreateSection";
import QuickStartSection from "@/components/sections/QuickStartSection";
import MainContent from "@/components/sections/MainContent";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <PromoBanner />
      <div className="flex flex-1" style={{ backgroundColor: "#262233" }}>
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <ActionBar />
          <WhatToCreateSection />
          <QuickStartSection />
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default Index;
