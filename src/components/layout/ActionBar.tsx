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
      className="border-b px-6 bg-[#262233] py-2.5"
      style={{ borderBottomColor: "#374151" }}
    >
      <div className="flex items-center justify-end gap-4">
        <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors mr-1 px-0">
          <img
            src="https://cdn.poehali.dev/files/9ac6be48-d195-4ac2-9b99-9971a72859e1.png"
            alt="YouTube"
            className="w-[44px] h-[44px] object-contain"
          />
        </button>
        <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors mr-1 px-0">
          <img
            src="https://cdn.poehali.dev/files/94cfcd36-15bc-41e1-96df-268aad1b6cd9.png"
            alt="Discord"
            className="w-[32px] h-[32px] object-contain"
          />
        </button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-2 text-gray-300 hover:text-gray-500 transition-colors mr-1">
              <Icon name="HelpCircle" size={20} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-48 bg-[#262233] border-gray-700"
          >
            <DropdownMenuItem
              className="cursor-pointer text-gray-300 hover:text-white transition-colors focus:bg-[rgba(69,65,81,0.8)] focus:text-white"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(69, 65, 81, 0.8)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "";
              }}
            >
              <Icon name="MessageSquare" size={16} className="mr-2" />
              Фидбэк
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer text-gray-300 hover:text-white transition-colors focus:bg-[rgba(69,65,81,0.8)] focus:text-white"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(69, 65, 81, 0.8)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "";
              }}
            >
              <Icon name="HelpCircle" size={16} className="mr-2" />
              Помощь
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer text-gray-300 hover:text-white transition-colors focus:bg-[rgba(69,65,81,0.8)] focus:text-white"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(69, 65, 81, 0.8)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "";
              }}
            >
              <Icon name="BookOpen" size={16} className="mr-2" />
              Инструкции
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <button className="text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 bg-[#3861d3]">
          <Icon name="Plus" size={16} />
          Создать
        </button>
        <button className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-[#1d4ed8] active:bg-[#1d4ed8] hover:text-white active:text-white hover:border-[#1d4ed8] active:border-[#1d4ed8] transition-colors">
          Войти
        </button>
      </div>
    </div>
  );
};

export default ActionBar;
