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
        <div className="p-3 lg:p-4">
          <h3 className="font-semibold text-white text-base lg:text-lg mb-1 leading-tight">
            {title}
          </h3>
          {author && (
            <p className="text-gray-400 text-sm mb-2 lg:mb-3 leading-none">
              От {author}
            </p>
          )}

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm font-medium mt-2 lg:mt-[10px]">
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
      className={`${color} rounded-xl lg:rounded-2xl p-4 lg:p-6 cursor-pointer transition-transform hover:scale-105 relative overflow-hidden ${
        isLarge
          ? "min-h-[160px] lg:min-h-[200px]"
          : "min-h-[100px] lg:min-h-[120px]"
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
              className={`font-bold text-white mb-2 leading-tight ${isLarge ? "text-lg lg:text-2xl" : "text-base lg:text-lg"}`}
            >
              {title}
            </h3>
            {description && (
              <p className="text-white text-opacity-90 text-sm leading-relaxed mb-0">
                {description}
              </p>
            )}
          </div>
        </div>

        {icon && icon.trim() && (
          <div className={`mb-2 lg:mb-4`}>
            <div
              className={`inline-flex p-2 lg:p-3 rounded-lg lg:rounded-xl bg-white bg-opacity-20 ${isLarge ? "mb-2 lg:mb-4" : "mb-1 lg:mb-2"}`}
            >
              <Icon
                name={icon}
                size={isLarge ? 24 : 20}
                className="text-white"
              />
            </div>
          </div>
        )}

        {isLarge && (
          <div className="flex flex-col sm:flex-row gap-2 mt-2 lg:mt-[10px]">
            {title === "Изображение" ? (
              <>
                <button className="flex-1 py-2 lg:py-3 px-3 lg:px-4 rounded-lg hover:bg-opacity-30 transition-colors flex items-center justify-center gap-2 text-sm text-[#ffffff] bg-[#262233]">
                  <Icon name="Plus" size={16} />
                  <span className="hidden sm:inline">Создать изображение</span>
                  <span className="sm:hidden">Создать</span>
                </button>
                <button className="flex-1 text-white py-2 lg:py-3 px-3 lg:px-4 rounded-lg hover:bg-opacity-30 transition-colors flex items-center justify-center gap-2 text-sm bg-[#262233]">
                  <Icon name="Edit" size={16} />
                  Редактировать
                </button>
              </>
            ) : (
              <button className="flex-1 text-white py-2 lg:py-3 px-3 lg:px-4 rounded-lg hover:bg-opacity-30 transition-colors flex items-center justify-center gap-2 text-sm bg-[#262233]">
                <Icon name="Plus" size={16} />
                <span className="hidden sm:inline">Создать историю</span>
                <span className="sm:hidden">Создать</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ToolCard;
