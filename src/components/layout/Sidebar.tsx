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
      className={`${isCollapsed ? "w-16" : "w-64"} bg-gray-900 text-white min-h-screen p-4 transition-all duration-300`}
    >
      <div className="flex items-center gap-3 mb-8 mx-0 px-0">
        <div className="w-6 h-6 rounded-md flex items-center justify-center overflow-hidden flex-shrink-0">
          <img
            src="https://cdn.poehali.dev/files/a45605a9-8a99-4369-9b5d-cb14a3412135.png"
            alt="Логотип"
            className="w-full h-full object-contain"
          />
        </div>
        {!isCollapsed && (
          <span className="font-medium text-base">Создание картинок</span>
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
              item.active
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-gray-800 hover:text-white"
            }`}
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
          <div className="bg-gray-800 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Мои работы</h4>
            <p className="text-sm text-gray-400 mb-3">
              Управляйте вашими проектами
            </p>
            <Icon name="ChevronRight" size={16} className="text-gray-400" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
