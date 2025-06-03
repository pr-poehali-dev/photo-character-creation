import Icon from "@/components/ui/icon";
import ToolCard from "@/components/ui/ToolCard";
import QuickStartCard from "@/components/ui/QuickStartCard";

const MainContent = () => {
  const quickStartItems = [
    {
      title: "Изображение в видео",
      description: "Оживите ваше изображение",
      icon: "Video",
      color: "bg-yellow-600",
      badge: "New",
    },
    {
      title: "Выберите стиль",
      description: "Начните со стиля, который вам нравится",
      icon: "Palette",
      color: "bg-green-600",
    },
    {
      title: "Исследуйте модели",
      description: "Посмотрите 100+ настроенных моделей",
      icon: "Bot",
      color: "bg-purple-600",
    },
    {
      title: "Обучить модель",
      description: "Настройте свою креативность",
      icon: "Brain",
      color: "bg-pink-600",
    },
    {
      title: "Улучшить качество",
      description: "Улучшите ваши изображения",
      icon: "Zap",
      color: "bg-orange-600",
    },
    {
      title: "Изображение в промпт",
      description: "Конвертируйте изображение в текстовый промпт",
      icon: "FileText",
      color: "bg-teal-600",
    },
  ];

  return (
    <div className="flex-1 bg-gray-900 p-8">
      {/* Промо баннер */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 mb-8 text-white relative overflow-hidden">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Icon name="Sparkles" size={20} />
              <span className="text-sm font-medium">
                Ограниченное предложение!
              </span>
            </div>
            <p className="text-lg">
              Разблокируйте год безграничного творчества со всеми годовыми
              планами со скидкой 50%
            </p>
          </div>
          <div className="flex gap-3">
            <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Посмотреть план
            </button>
            <button className="text-white hover:text-gray-200 transition-colors">
              <Icon name="X" size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Основные инструменты */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <ToolCard
          title="Изображение"
          icon="ImageIcon"
          color="bg-gradient-to-br from-blue-500 to-blue-700"
        />
        <ToolCard
          title="Storytelling"
          icon="BookOpen"
          color="bg-gradient-to-br from-yellow-500 to-orange-600"
          badge="Генерация"
        />
      </div>

      {/* Быстрый старт */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">Быстрый старт</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickStartItems.map((item, index) => (
            <QuickStartCard key={index} {...item} />
          ))}
        </div>
      </div>

      {/* Рекомендуемые приложения */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">
          Рекомендуемые приложения
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ToolCard
            title="AI Портреты"
            description="Создавайте реалистичные портреты"
            icon="User"
            color="bg-gradient-to-br from-indigo-500 to-purple-600"
            size="small"
          />
          <ToolCard
            title="Фэнтези арт"
            description="Магические существа и миры"
            icon="Sparkles"
            color="bg-gradient-to-br from-purple-500 to-pink-600"
            size="small"
          />
          <ToolCard
            title="Аниме стиль"
            description="Персонажи в стиле аниме"
            icon="Heart"
            color="bg-gradient-to-br from-pink-500 to-red-600"
            size="small"
          />
          <ToolCard
            title="Концепт арт"
            description="Профессиональные концепты"
            icon="Brush"
            color="bg-gradient-to-br from-teal-500 to-green-600"
            size="small"
          />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
