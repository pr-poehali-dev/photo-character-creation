import { useState } from "react";
import Icon from "@/components/ui/icon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SidebarProps {
  isMobileMenuOpen?: boolean;
  onMobileMenuClose?: () => void;
}

const Sidebar = ({
  isMobileMenuOpen = false,
  onMobileMenuClose,
}: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMyWorksExpanded, setIsMyWorksExpanded] = useState(false);
  const [isResourcesExpanded, setIsResourcesExpanded] = useState(false);
  const menuItems = [
    { icon: "Home", label: "Главная", active: true },
    { icon: "Users", label: "Персонажи", badge: "NEW" },
    { icon: "Video", label: "Видео" },
    { icon: "ImageIcon", label: "Создать изображение" },
    { icon: "Edit", label: "Редактор" },
    { icon: "Palette", label: "Стили" },
    { icon: "Bot", label: "Модели" },
    { icon: "Zap", label: "Приложения" },
    { icon: "MessageSquare", label: "Сообщество" },
    { icon: "Settings", label: "Настройки" },
  ];

  return (
    <>
      {/* Мобильный оверлей */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onMobileMenuClose}
        />
      )}

      <div
        className={`${
          isCollapsed ? "w-20" : "w-64"
        } text-white min-h-screen p-4 transition-all duration-300 border-r
        fixed lg:relative z-50 lg:z-auto
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
        style={{ backgroundColor: "#1E1B2A", borderRightColor: "#374151" }}
      >
        {/* Кнопка закрытия для мобильных */}
        <button
          className="absolute top-4 right-4 lg:hidden text-gray-400 hover:text-white"
          onClick={onMobileMenuClose}
        >
          <Icon name="X" size={20} />
        </button>

        <div className="flex items-center gap-3 mb-8 mx-0 px-[7px]">
          <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
            <img
              src="https://cdn.poehali.dev/files/cbfcfd9c-1b19-4f61-8336-442c50974aef.png"
              alt="Контент AI"
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>
          {!isCollapsed && (
            <span className="py-0 text-xl font-medium">Контент AI</span>
          )}
        </div>

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex items-center justify-between px-3 py-2 cursor-pointer transition-colors text-gray-300 hover:bg-gray-800 hover:text-white mb-4 w-full border-t border-b border-gray-700 mt-4"
        >
          {!isCollapsed && (
            <span className="text-sm font-medium">Свернуть</span>
          )}
          <Icon name="ChevronRight" size={20} />
        </button>

        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 px-3 ${isCollapsed ? "py-3" : "py-2"} rounded-lg cursor-pointer transition-colors ${
                item.active ? "text-white" : "text-gray-300 hover:text-white"
              }`}
              style={{
                backgroundColor: item.active
                  ? "rgba(69, 65, 81, 0.8)"
                  : undefined,
                ":hover": !item.active
                  ? { backgroundColor: "#547CFF" }
                  : undefined,
              }}
              onMouseEnter={(e) => {
                if (!item.active) {
                  e.currentTarget.style.backgroundColor =
                    "rgba(69, 65, 81, 0.8)";
                }
              }}
              onMouseLeave={(e) => {
                if (!item.active) {
                  e.currentTarget.style.backgroundColor = "";
                }
              }}
            >
              <Icon name={item.icon} size={isCollapsed ? 24 : 20} />
              {!isCollapsed && (
                <>
                  <span className="text-sm font-medium">{item.label}</span>
                  {item.badge && (
                    <span className="ml-auto bg-green-500 text-xs px-2 py-0.5 rounded-full">
                      Новое
                    </span>
                  )}
                </>
              )}
            </div>
          ))}
        </nav>

        {!isCollapsed && (
          <div className="mt-auto pt-8">
            <div>
              <button
                className="flex items-center justify-between w-full rounded-lg p-4 hover:bg-[rgba(69,65,81,0.8)] transition-colors cursor-pointer bg-[#1E1B2A] py-[7px]"
                onClick={() => setIsMyWorksExpanded(!isMyWorksExpanded)}
              >
                <div className="flex items-center gap-3">
                  <span className="font-semibold">Мои работы</span>
                </div>
                <Icon
                  name="ChevronRight"
                  size={16}
                  className={`text-gray-400 transition-transform ${isMyWorksExpanded ? "rotate-90" : ""}`}
                />
              </button>

              {isMyWorksExpanded && (
                <div className="mt-2 space-y-1 pl-4">
                  <div className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg cursor-pointer transition-colors">
                    <Icon name="Clock" size={16} />
                    <span className="text-sm">История создания</span>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg cursor-pointer transition-colors">
                    <Icon name="Bookmark" size={16} />
                    <span className="text-sm">Закладки</span>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg cursor-pointer transition-colors">
                    <Icon name="Heart" size={16} />
                    <span className="text-sm">Понравилось</span>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg cursor-pointer transition-colors">
                    <Icon name="FolderOpen" size={16} />
                    <span className="text-sm">Сохраненные альбомы</span>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg cursor-pointer transition-colors">
                    <Icon name="Settings" size={16} />
                    <span className="text-sm">Обученные модели</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {!isCollapsed && (
          <div className="mt-4">
            <div>
              <button
                className="flex items-center justify-between w-full rounded-lg p-4 hover:bg-[rgba(69,65,81,0.8)] transition-colors cursor-pointer bg-[#1E1B2A] py-[7px]"
                onClick={() => setIsResourcesExpanded(!isResourcesExpanded)}
              >
                <div className="flex items-center gap-3">
                  <span className="font-semibold">Ресурсы</span>
                </div>
                <Icon
                  name="ChevronRight"
                  size={16}
                  className={`text-gray-400 transition-transform ${isResourcesExpanded ? "rotate-90" : ""}`}
                />
              </button>

              {isResourcesExpanded && (
                <div className="mt-2 space-y-1 pl-4">
                  <div className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg cursor-pointer transition-colors">
                    <Icon name="BookOpen" size={16} />
                    <span className="text-sm">Уроки</span>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg cursor-pointer transition-colors">
                    <Icon name="HelpCircle" size={16} />
                    <span className="text-sm">Wiki</span>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg cursor-pointer transition-colors">
                    <Icon name="LifeBuoy" size={16} />
                    <span className="text-sm">Центр помощи</span>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg cursor-pointer transition-colors">
                    <Icon name="Sparkles" size={16} />
                    <span className="text-sm">Что нового</span>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg cursor-pointer transition-colors">
                    <Icon name="Palette" size={16} />
                    <span className="text-sm">Галерея тем</span>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg cursor-pointer transition-colors">
                    <Icon name="FileText" size={16} />
                    <span className="text-sm">Блог</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
