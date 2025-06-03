import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import PromoBanner from "@/components/layout/PromoBanner";
import MainContent from "@/components/sections/MainContent";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <PromoBanner />
        <MainContent />
      </div>
    </div>
  );
};

export default Index;
