import { useState } from "react";
import Icon from "@/components/ui/icon";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
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
    <div
      className={`${isCollapsed ? "w-16" : "w-64"} text-white min-h-screen p-4 transition-all duration-300 border-r`}
      style={{ backgroundColor: "#1E1B2A", borderRightColor: "#374151" }}
    >
      <div className="flex items-center gap-3 mb-8 mx-0 px-0">
        <div className="w-6 h-6 rounded-md flex items-center justify-center overflow-hidden flex-shrink-0">
          <div className="w-full h-full bg-gradient-to-br from-purple-500 to-indigo-600 rounded-md flex items-center justify-center">
            <Icon name="Bot" size={16} className="text-white" />
          </div>
        </div>
        {!isCollapsed && (
          <span className="py-0 text-xl font-medium">Контент AI</span>
        )}
      </div>

      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="flex items-center justify-between px-3 py-2 cursor-pointer transition-colors text-gray-300 hover:bg-gray-800 hover:text-white mb-4 w-full border-t border-b border-gray-700 mt-4"
      >
        {!isCollapsed && <span className="text-sm font-medium">Свернуть</span>}
        <Icon name="ArrowRight" size={20} />
      </button>

      <nav className="space-y-2">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
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
                e.currentTarget.style.backgroundColor = "rgba(69, 65, 81, 0.8)";
              }
            }}
            onMouseLeave={(e) => {
              if (!item.active) {
                e.currentTarget.style.backgroundColor = "";
              }
            }}
          >
            <Icon name={item.icon} size={20} />
            {!isCollapsed && (
              <>
                <span className="text-sm font-medium">{item.label}</span>
                {item.badge && (
                  <span className="ml-auto bg-green-500 text-xs px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </>
            )}
          </div>
        ))}
      </nav>

      {!isCollapsed && (
        <div className="mt-auto pt-8">
          <div className="rounded-lg p-4 bg-[#332D47]">
            <h4 className="font-semibold mb-2">Мои работы</h4>
            <p className="text-sm text-gray-400 mb-3">
              Управляйте вашими проектами
            </p>
            <Icon name="Video" size={16} className="text-gray-400" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
