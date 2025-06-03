import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import MainContent from "@/components/sections/MainContent";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

export default Index;
