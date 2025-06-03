import Icon from "@/components/ui/icon";

interface QuickStartCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
  badge?: string;
}

const QuickStartCard = ({
  title,
  description,
  icon,
  color,
  badge,
}: QuickStartCardProps) => {
  return (
    <div className="bg-gray-800 rounded-xl p-4 cursor-pointer hover:bg-gray-700 transition-colors">
      <div className="flex items-start gap-4">
        <div className={`p-2 rounded-lg ${color}`}>
          <Icon name={icon} size={20} className="text-white" />
        </div>

        <div className="flex-1">
          <h4 className="font-semibold text-white mb-1">{title}</h4>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default QuickStartCard;
