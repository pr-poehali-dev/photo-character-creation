import Icon from "@/components/ui/icon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ActionBarProps {
  onMobileMenuToggle?: () => void;
}

const ActionBar = ({ onMobileMenuToggle }: ActionBarProps) => {
  return (
    <div
      className="border-b px-4 lg:px-6 bg-[#262233] py-2.5"
      style={{ borderBottomColor: "#374151" }}
    >
      <div className="flex items-center justify-between lg:justify-end gap-4">
        {/* Мобильное меню гамбургер */}
        <button
          className="lg:hidden text-gray-300 hover:text-white transition-colors"
          onClick={onMobileMenuToggle}
        >
          <Icon name="Menu" size={24} />
        </button>

        <div className="flex items-center gap-2 lg:gap-4">
          <button className="p-1 lg:p-2 text-gray-600 hover:text-gray-900 transition-colors">
            <img
              src="https://cdn.poehali.dev/files/9ac6be48-d195-4ac2-9b99-9971a72859e1.png"
              alt="YouTube"
              className="w-8 h-8 lg:w-[44px] lg:h-[44px] object-contain"
            />
          </button>
          <button className="p-1 lg:p-2 text-gray-600 hover:text-gray-900 transition-colors">
            <img
              src="https://cdn.poehali.dev/files/94cfcd36-15bc-41e1-96df-268aad1b6cd9.png"
              alt="Discord"
              className="w-6 h-6 lg:w-[32px] lg:h-[32px] object-contain"
            />
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-1 lg:p-2 text-gray-300 hover:text-gray-500 transition-colors">
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
                  e.currentTarget.style.backgroundColor =
                    "rgba(69, 65, 81, 0.8)";
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
                  e.currentTarget.style.backgroundColor =
                    "rgba(69, 65, 81, 0.8)";
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
                  e.currentTarget.style.backgroundColor =
                    "rgba(69, 65, 81, 0.8)";
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
          <button className="text-white px-3 lg:px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 bg-[#3861d3] text-sm lg:text-base">
            <Icon name="Plus" size={16} />
            <span className="hidden sm:inline">Создать</span>
          </button>
          <button className="border border-gray-300 px-3 lg:px-4 py-2 rounded-lg text-white transition-colors hover:bg-[rgba(31,41,55,0.82)] hover:border-gray-300 active:bg-[rgba(31,41,55,0.82)] active:border-gray-300 text-sm lg:text-base">
            <span className="hidden sm:inline">Войти</span>
            <span className="sm:hidden">
              <Icon name="User" size={16} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionBar;
