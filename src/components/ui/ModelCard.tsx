import Icon from "@/components/ui/icon";

interface ModelCardProps {
  title: string;
  description: string;
  image?: string;
  icon?: string;
  hasPlus?: boolean;
  isPro?: boolean;
  actionText?: string;
  secondaryAction?: string;
}

const ModelCard = ({
  title,
  description,
  image,
  icon,
  hasPlus = false,
  isPro = false,
  actionText = "Create",
  secondaryAction,
}: ModelCardProps) => {
  return (
    <div className="bg-[#1a1625] rounded-xl p-6 hover:bg-[#1f1a2e] transition-colors duration-200 cursor-pointer group">
      {/* Header with lock icon if pro */}
      {isPro && (
        <div className="flex justify-end mb-4">
          <Icon name="Lock" size={16} className="text-yellow-500" />
        </div>
      )}

      {/* Main content area */}
      <div className="flex flex-col items-center justify-center mb-6 h-32">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-16 h-16 rounded-full object-cover mb-3"
          />
        ) : hasPlus ? (
          <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-3">
            <Icon name="Plus" size={24} className="text-blue-500" />
          </div>
        ) : icon ? (
          <div className="w-16 h-16 bg-gray-600/20 rounded-full flex items-center justify-center mb-3">
            <Icon name={icon as any} size={24} className="text-gray-300" />
          </div>
        ) : null}
      </div>

      {/* Title and description */}
      <div className="text-center mb-6">
        <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>

      {/* Action buttons */}
      <div className="flex gap-2">
        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 font-medium">
          {actionText}
        </button>
        {secondaryAction && (
          <button className="flex-1 bg-transparent border border-gray-600 hover:border-gray-500 text-gray-300 py-2 px-4 rounded-lg transition-colors duration-200 font-medium">
            {secondaryAction}
          </button>
        )}
      </div>
    </div>
  );
};

export default ModelCard;
