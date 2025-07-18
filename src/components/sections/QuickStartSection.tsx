import ImageToVideoCard from "@/components/cards/ImageToVideoCard";
import ChooseStyleCard from "@/components/cards/ChooseStyleCard";
import ExploreModelsCard from "@/components/cards/ExploreModelsCard";
import CreateImageCard from "@/components/cards/CreateImageCard";
import EnhanceQualityCard from "@/components/cards/EnhanceQualityCard";
import ImageToPromptCard from "@/components/cards/ImageToPromptCard";

const QuickStartSection = () => {
  return (
    <div className="px-4 lg:px-8 py-4 lg:py-6 bg-[#262233]">
      <h2 className="text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-6">
        Быстрый старт
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
        <ImageToVideoCard />
        <ChooseStyleCard />
        <ExploreModelsCard />
        <CreateImageCard />
        <EnhanceQualityCard />
        <ImageToPromptCard />
      </div>
    </div>
  );
};

export default QuickStartSection;
