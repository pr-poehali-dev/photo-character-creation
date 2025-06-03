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
          <div className={icon ? "mt-2" : "mt-0"}>
            <h3
              className={`font-bold mb-2 ${isLarge ? "text-2xl" : "text-lg"}`}
              style={{ color: "#262233" }}
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
