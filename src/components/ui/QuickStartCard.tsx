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
    <div
      className="rounded-xl p-4 cursor-pointer hover:opacity-80 transition-all"
      style={{ backgroundColor: "#332D47" }}
    >
      <div className="flex items-start gap-4">
        <div className={`p-2 rounded-lg ${color}`}>
          <Icon name={icon || "FolderOpen"} size={20} className="text-white" />
        </div>

        <div className="flex-1">
          <h4 className="font-semibold text-white mb-1">{title}</h4>
          <p className="text-blue-200 text-sm font-medium leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuickStartCard;
