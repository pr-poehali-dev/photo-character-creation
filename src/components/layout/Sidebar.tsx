import Icon from "@/components/ui/icon";

const Sidebar = () => {
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
    <div className="w-64 bg-gray-900 text-white min-h-screen p-4">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <Icon name="Sparkles" size={20} className="text-white" />
        </div>
        <span className="font-bold text-lg">CreativeAI</span>
      </div>

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
            <span className="text-sm font-medium">{item.label}</span>
            {item.badge && (
              <span className="ml-auto bg-green-500 text-xs px-2 py-0.5 rounded-full">
                {item.badge}
              </span>
            )}
          </div>
        ))}
      </nav>

      <div className="mt-auto pt-8">
        <div className="bg-gray-800 rounded-lg p-4">
          <h4 className="font-semibold mb-2">Мои работы</h4>
          <p className="text-sm text-gray-400 mb-3">
            Управляйте вашими проектами
          </p>
          <Icon name="ChevronRight" size={16} className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
