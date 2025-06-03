import Icon from "@/components/ui/icon";

interface ToolCardProps {
  title: string;
  description?: string;
  author?: string;
  imageUrl: string;
  size?: "small" | "large";
  badge?: string;
  onClick?: () => void;
}

const ToolCard = ({
  title,
  author = "By OpenArt",
  imageUrl,
  size = "large",
  badge,
  onClick,
}: ToolCardProps) => {
  return (
    <div
      className="bg-[#1a1825] rounded-xl overflow-hidden cursor-pointer transition-transform hover:scale-105"
      onClick={onClick}
    >
      {/* Preview Image */}
      <div className="relative aspect-video bg-gray-800">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        {badge && (
          <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
            {badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
          <p className="text-gray-400 text-sm">{author}</p>
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm font-medium">
          <Icon name="Play" size={16} />
          Run
        </button>
      </div>
    </div>
  );
};

export default ToolCard;
