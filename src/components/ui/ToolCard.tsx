import Icon from "@/components/ui/icon";

interface ToolCardProps {
  title: string;
  description?: string;
  icon?: string;
  color?: string;
  size?: "small" | "large";
  badge?: string;
  onClick?: () => void;
  image?: string;
  author?: string;
}

const ToolCard = ({
  title,
  description,
  icon,
  color,
  size = "large",
  badge,
  onClick,
  image,
  author,
}: ToolCardProps) => {
  const isLarge = size === "large";

  // Если есть изображение, используем новый дизайн с превью
  if (image) {
    return (
      <div
        className="bg-[#3D3849] rounded-xl overflow-hidden cursor-pointer transition-transform hover:scale-105 relative"
        onClick={onClick}
      >
        {badge && (
          <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-md text-xs font-medium z-10">
            {badge}
          </div>
        )}

        {/* Превью изображение */}
        <div className="aspect-[16/10] relative overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* Контент */}
        <div className="p-4">
          <h3 className="font-semibold text-white text-lg mb-1">{title}</h3>
          {author && <p className="text-gray-400 text-sm mb-3">От {author}</p>}

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm font-medium">
            <Icon name="Play" size={16} />
            Запустить
          </button>
        </div>
      </div>
    );
  }

  // Старый дизайн для остальных карточек
  return (
    <div
      className={`${color} rounded-2xl p-6 cursor-pointer transition-transform hover:scale-105 relative overflow-hidden ${
        isLarge ? "min-h-[200px]" : "min-h-[120px]"
      }`}
      onClick={onClick}
    >
      {badge && (
        <div className="absolute top-3 right-3 bg-black bg-opacity-20 text-white px-2 py-1 rounded-full text-xs">
          {badge}
        </div>
      )}

      <div className="flex flex-col h-full">
        <div className="flex-1">
          <div className={icon ? "mt-2" : "mt-0"}>
            <h3
              className={`font-bold text-white mb-2 ${isLarge ? "text-2xl" : "text-lg"}`}
            >
              {title}
            </h3>
            {description && (
              <p className="text-white text-opacity-90 text-sm">
                {description}
              </p>
            )}
          </div>
        </div>

        {icon && icon.trim() && (
          <div className="mb-4">
            <div
              className={`inline-flex p-3 rounded-xl bg-white bg-opacity-20 ${isLarge ? "mb-4" : "mb-2"}`}
            >
              <Icon
                name={icon}
                size={isLarge ? 32 : 24}
                className="text-white"
              />
            </div>
          </div>
        )}

        {isLarge && (
          <div className="flex gap-2">
            {title === "Изображение" ? (
              <>
                <button className="flex-1 py-3 px-4 rounded-lg hover:bg-opacity-30 transition-colors flex items-center justify-center gap-2 text-sm text-[#ffffff] bg-[#262233]">
                  <Icon name="Plus" size={16} />
                  Создать изображение
                </button>
                <button className="flex-1 text-white py-3 px-4 rounded-lg hover:bg-opacity-30 transition-colors flex items-center justify-center gap-2 text-sm bg-[#262233]">
                  <Icon name="Edit" size={16} />
                  Редактировать
                </button>
              </>
            ) : (
              <button className="flex-1 text-white py-3 px-4 rounded-lg hover:bg-opacity-30 transition-colors flex items-center justify-center gap-2 text-sm bg-[#262233]">
                <Icon name="Plus" size={16} />
                Создать историю
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ToolCard;
