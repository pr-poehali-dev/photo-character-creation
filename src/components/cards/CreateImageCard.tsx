import Icon from "@/components/ui/icon";

const CreateImageCard = () => {
  return (
    <div
      className="rounded-xl p-4 cursor-pointer hover:opacity-80 transition-all"
      style={{ backgroundColor: "#332D47" }}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-pink-600 flex-shrink-0">
          <Icon name="FolderOpen" size={24} className="text-white" />
        </div>

        <div className="flex flex-col justify-between h-[60px] flex-1 min-w-0">
          <h4 className="font-semibold text-white text-lg mb-0 leading-tight">
            Изображение
          </h4>
          <p className="text-blue-200/80 text-sm leading-relaxed mb-0">
            Создайте изображения из промптов
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateImageCard;
