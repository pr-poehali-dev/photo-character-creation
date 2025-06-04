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
      className="rounded-lg lg:rounded-xl p-3 lg:p-4 cursor-pointer hover:opacity-80 transition-all"
      style={{ backgroundColor: "#332D47" }}
    >
      <div className="flex items-start gap-3 lg:gap-4">
        <div className={`p-3 lg:p-4 rounded-lg ${color} flex-shrink-0`}>
          <Icon name={icon || "FolderOpen"} size={20} className="text-white" />
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-white text-base lg:text-lg mb-0 leading-tight">
            {title}
          </h4>
          <p className="text-blue-200/80 text-sm leading-relaxed mb-0">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuickStartCard;
