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
      className="border-b px-6 bg-[#262233] py-2"
      style={{ borderBottomColor: "#374151" }}
    >
      <div className="flex items-center justify-end gap-4">
        <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
          <img
            src="https://cdn.poehali.dev/files/9ab99646-1b03-41c4-ba98-7b5c129c3e7b.png"
            alt="YouTube"
            className="w-[44px] h-[44px] object-contain"
          />
        </button>
        <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
          <img
            src="https://cdn.poehali.dev/files/94cfcd36-15bc-41e1-96df-268aad1b6cd9.png"
            alt="Discord"
            className="w-[32px] h-[32px] object-contain"
          />
        </button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <Icon name="MoreVertical" size={20} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem className="cursor-pointer">
              <Icon name="MessageSquare" size={16} className="mr-2" />
              Фидбэк
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Icon name="HelpCircle" size={16} className="mr-2" />
              Помощь
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Icon name="BookOpen" size={16} className="mr-2" />
              Инструкции
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <button className="text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 bg-[#3452b8]">
          <Icon name="Plus" size={16} />
          Создать
        </button>
        <button className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
          Войти
        </button>
      </div>
    </div>
  );
};

export default ActionBar;
