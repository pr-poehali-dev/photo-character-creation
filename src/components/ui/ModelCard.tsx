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
  tags?: string[];
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
  tags = [],
}: ModelCardProps) => {
  return (
    <div className="bg-[#1a1625] rounded-xl overflow-hidden hover:bg-[#1f1a2e] transition-colors duration-200 cursor-pointer group flex flex-col h-full">
      {/* Image section */}
      <div className="relative h-40 bg-gradient-to-br from-blue-600/20 to-purple-600/20">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : hasPlus ? (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 bg-blue-600/30 rounded-full flex items-center justify-center">
              <Icon name="Plus" size={32} className="text-blue-400" />
            </div>
          </div>
        ) : icon ? (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
              <Icon name={icon as any} size={32} className="text-white" />
            </div>
          </div>
        ) : null}

        {/* Pro lock icon */}
        {isPro && (
          <div className="absolute top-3 right-3">
            <Icon name="Lock" size={16} className="text-yellow-500" />
          </div>
        )}
      </div>

      {/* Content section */}
      <div className="p-4 flex-1 flex flex-col">
        {/* Title and description */}
        <div className="mb-3">
          <h3 className="text-white font-semibold text-base mb-1 leading-tight">
            {title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-0">
            {description}
          </p>
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`px-2 py-1 rounded text-xs font-medium ${
                  index === 0
                    ? "bg-orange-600/20 text-orange-400"
                    : "bg-green-600/20 text-green-400"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex gap-2 mt-auto pt-[10px]">
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 font-medium text-sm">
            {actionText}
          </button>
          {secondaryAction && (
            <button className="flex-1 bg-transparent hover:bg-white/10 text-gray-300 py-2 px-4 rounded-lg transition-colors duration-200 font-medium text-sm border border-gray-600">
              {secondaryAction}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
