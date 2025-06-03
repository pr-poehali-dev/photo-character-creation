import Icon from "@/components/ui/icon";

interface ToolCardProps {
  title: string;
  description?: string;
  icon: string;
  color: string;
  size?: "small" | "large";
  badge?: string;
  onClick?: () => void;
}

const ToolCard = ({
  title,
  description,
  icon,
  color,
  size = "large",
  badge,
  onClick,
}: ToolCardProps) => {
  const isLarge = size === "large";

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
          <div className="mt-2">
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

        {icon && (
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
          <div className="flex gap-2 mt-6">
            <button className="flex-1 bg-black bg-opacity-30 text-white px-4 hover:bg-opacity-40 transition-colors flex items-center justify-center gap-2 py-3 rounded-lg text-sm">
              <Icon name="Plus" size={16} />
              {title === "Storytelling"
                ? "Создать историю"
                : "Создать изображение"}
            </button>
            <button className="flex-1 bg-black bg-opacity-30 text-white py-3 px-4 rounded-lg hover:bg-opacity-40 transition-colors flex items-center justify-center gap-2 text-sm">
              <Icon name="Edit" size={16} />
              {title === "Storytelling" ? "Мои истории" : "Редактировать"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToolCard;
