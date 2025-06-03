import Icon from "@/components/ui/icon";

interface QuickStartCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
}

const QuickStartCard = ({
  title,
  description,
  icon,
  color,
}: QuickStartCardProps) => {
  return (
    <div className="relative bg-[#1a1625] rounded-lg p-4 hover:bg-[#1f1b2e] transition-colors cursor-pointer border border-gray-700/50">
      <div className="flex items-start gap-3">
        <div
          className={`w-10 h-10 ${color} rounded-lg flex items-center justify-center flex-shrink-0`}
        >
          {icon && <Icon name={icon} size={20} className="text-white" />}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-medium text-sm mb-1">{title}</h3>
          <p className="text-gray-400 text-xs leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default QuickStartCard;
