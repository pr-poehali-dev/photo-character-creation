import Icon from "@/components/ui/icon";

const EnhanceQualityCard = () => {
  return (
    <div
      className="rounded-xl p-4 cursor-pointer hover:opacity-80 transition-all"
      style={{ backgroundColor: "#332D47" }}
    >
      <div className="flex items-start gap-4">
        <div className="p-4 rounded-lg bg-orange-600 flex-shrink-0">
          <Icon name="Zap" size={24} className="text-white" />
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-white text-lg mb-0 leading-tight">
            Улучшить качество
          </h4>
          <p className="text-blue-200/80 text-sm leading-relaxed mb-0">
            Улучшите ваши изображения
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnhanceQualityCard;
