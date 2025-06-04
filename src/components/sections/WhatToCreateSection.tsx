import ToolCard from "@/components/ui/ToolCard";

const WhatToCreateSection = () => {
  return (
    <div className="px-4 lg:px-8 py-4 lg:py-6 bg-[#262233]">
      <h2 className="text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-6">
        Что вы хотите создать
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
        <ToolCard
          title="Изображение"
          icon=""
          color="bg-gradient-to-br from-[#547CFF] to-[#4267CC]"
          onClick={() => console.log("Открыть генератор изображений")}
        />
        <ToolCard
          title="Сторителлинг"
          icon=""
          color="bg-[#FF8254]"
          onClick={() => console.log("Открыть генератор историй")}
        />
      </div>
    </div>
  );
};

export default WhatToCreateSection;
