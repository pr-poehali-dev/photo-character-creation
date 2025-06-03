import Icon from "@/components/ui/icon";
import ToolCard from "@/components/ui/ToolCard";
import QuickStartCard from "@/components/ui/QuickStartCard";
import ModelCard from "@/components/ui/ModelCard";

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
            image="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&h=250&fit=crop"
            badge="Новое"
            size="small"
          />
          <ToolCard
            title="Улучшение качества"
            image="https://cdn.poehali.dev/files/8136f7b2-0589-4246-80e2-6ff4f306206c.jpg"
            size="small"
          />
          <ToolCard
            title="ИИ фильтры"
            image="https://cdn.poehali.dev/files/2b76a07d-f1df-4d32-b93b-c71a2a200489.png"
            size="small"
          />
          <ToolCard
            title="Скетч в изображение"
            image="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=250&fit=crop"
            size="small"
          />
          <ToolCard
            title="Доска смешивания"
            image="https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?w=400&h=250&fit=crop"
            size="small"
          />
          <ToolCard
            title="Изменить выражение лица"
            image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
            size="small"
          />
          <ToolCard
            title="Расширить"
            image="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop"
            size="small"
          />
          <ToolCard
            title="Удалить фон"
            image="https://cdn.poehali.dev/files/1c373d64-04c2-44ac-83b5-45ab6c6afc94.jpg"
            size="small"
          />
        </div>
        <div className="flex justify-center mt-8">
          <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-200 font-medium">
            Смотреть все
          </button>
        </div>
      </div>

      {/* Выберите модель секция */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-6">Выберите модель</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ModelCard
            title="Train your own model"
            description="Customize your creativity"
            hasPlus={true}
            isPro={true}
            actionText="Create"
            secondaryAction="Gallery"
          />
          <ModelCard
            title="FLUX.1 [schnell]"
            description="Быстрая генерация изображений"
            image="https://cdn.poehali.dev/files/6851a32c-5312-44f4-bd1f-4d75a2617dbd.png"
            actionText="Использовать"
            tags={["Flux", "Standard"]}
          />
          <ModelCard
            title="Stable Diffusion XL"
            description="Высокое качество и детализация"
            icon="Sparkles"
            actionText="Использовать"
          />
        </div>
        <div className="flex justify-center mt-8">
          <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-200 font-medium">
            Показать все модели
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
