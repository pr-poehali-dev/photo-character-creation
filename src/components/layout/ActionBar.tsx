import Icon from "@/components/ui/icon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ActionBar = () => {
  return (
    <div
      className="border-b px-6 bg-[#262233] py-[17px]"
      style={{ borderBottomColor: "#374151" }}
    >
      <div className="flex items-center justify-end gap-4">
        <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
          <Icon name="Youtube" size={20} />
        </button>
        <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
          <Icon name="MessageCircle" size={20} />
        </button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <Icon name="HelpCircle" size={20} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem>
              <Icon name="MessageSquare" size={16} className="mr-2" />
              Фидбэк
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Icon name="HelpCircle" size={16} className="mr-2" />
              Помощь
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Icon name="FileText" size={16} className="mr-2" />
              Инструкции
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default ActionBar;
