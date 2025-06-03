import Icon from "@/components/ui/icon";
import ToolCard from "@/components/ui/ToolCard";
import QuickStartCard from "@/components/ui/QuickStartCard";

const MainContent = () => {
  const quickStartItems = [
    {
      title: "Изображение в видео",
      description: "Оживите ваше изображение",
      icon: "Play",
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
      title: "Изображение",
      description: "Создайте изображения из промптов",
      icon: "",
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
    {
      title: "Сторителлинг",
      description: "Создайте увлекательные истории",
      icon: "BookOpen",
      color: "bg-[#FF8254]",
    },
  ];

  return (
    <div className="flex-1 p-8 bg-[#262233]">
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">
          Рекомендуемые приложения
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ToolCard
            title="Изображение в видео"
            author="OpenArt"
            image="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&h=250&fit=crop"
            badge="Новое"
            size="small"
          />
          <ToolCard
            title="Улучшение качества"
            author="OpenArt"
            image="https://cdn.poehali.dev/files/8136f7b2-0589-4246-80e2-6ff4f306206c.jpg"
            size="small"
          />
          <ToolCard
            title="ИИ фильтры"
            author="OpenArt"
            image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=250&fit=crop"
            size="small"
          />
          <ToolCard
            title="Скетч в изображение"
            author="OpenArt"
            image="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=250&fit=crop"
            size="small"
          />
          <ToolCard
            title="Доска смешивания"
            author="OpenArt"
            image="https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?w=400&h=250&fit=crop"
            size="small"
          />
          <ToolCard
            title="Изменить выражение лица"
            author="OpenArt"
            image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
            size="small"
          />
          <ToolCard
            title="Расширить"
            author="OpenArt"
            image="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop"
            size="small"
          />
          <ToolCard
            title="Удалить фон"
            author="OpenArt"
            image="https://images.unsplash.com/photo-1541336032412-2048a678540d?w=400&h=250&fit=crop"
            size="small"
          />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
