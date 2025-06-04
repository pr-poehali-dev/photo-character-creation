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
    <div className="flex-1 p-4 lg:p-8 bg-[#262233]">
      <div>
        <h2 className="text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-6">
          Рекомендуемые приложения
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          <ToolCard
            title="Изображение в видео"
            image="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&h=250&fit=crop"
            badge="Новое"
            size="small"
          />
          <ToolCard
            title="Улучшение качества"
            image="https://cdn.poehali.dev/files/3f7227e9-83d8-4853-b4df-2790d0a68a01.jpg"
            size="small"
          />
          <ToolCard
            title="ИИ фильтры"
            image="https://cdn.poehali.dev/files/2b76a07d-f1df-4d32-b93b-c71a2a200489.png"
            size="small"
          />
          <ToolCard
            title="Скетч в изображение"
            image="https://cdn.poehali.dev/files/6fa69e8b-923a-411b-b0aa-894ab61087d6.jpg"
            size="small"
          />
          <ToolCard
            title="Доска смешивания"
            image="https://cdn.poehali.dev/files/ec8be7e9-acbf-42aa-9636-e473293ac6c9.jpg"
            size="small"
          />
          <ToolCard
            title="Изменить выражение"
            image="https://cdn.poehali.dev/files/1c345f92-3ccd-4e74-aa07-6148cecce5df.png"
            size="small"
          />
          <ToolCard
            title="Расширить"
            image="https://cdn.poehali.dev/files/24fda29b-13b1-4094-ac3e-8fb1d852ed7f.jpg"
            size="small"
          />
          <ToolCard
            title="Удалить фон"
            image="https://cdn.poehali.dev/files/1c373d64-04c2-44ac-83b5-45ab6c6afc94.jpg"
            size="small"
          />
        </div>
        <div className="flex justify-center mt-6 lg:mt-8">
          <button className="border border-gray-300 px-4 py-2 rounded-lg text-white font-medium transition-colors hover:bg-[rgba(31,41,55,0.82)] hover:border-gray-300 active:bg-[rgba(31,41,55,0.82)] active:border-gray-300 text-sm lg:text-base">
            Смотреть все
          </button>
        </div>
      </div>

      {/* Выберите модель секция */}
      <div className="mt-8 lg:mt-12">
        <h2 className="text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-6">
          Выберите модель
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          <ModelCard
            title="Обучить свою модель"
            description="Настройте свою креативность"
            hasPlus={true}
            isPro={true}
            actionText="Создать"
          />
          <ModelCard
            title="Flux"
            description="Быстрая генерация изображений"
            image="https://cdn.poehali.dev/files/a5cc0f95-e9c5-4615-a9d9-8b80f7cc6855.png"
            actionText="Использовать"
            tags={["Flux", "Стандарт"]}
          />
          <ModelCard
            title="Flux Realism"
            description="Высокое качество и детализация"
            image="https://cdn.poehali.dev/files/d77e630a-80f6-4b30-a9c4-9266698daa2d.png"
            actionText="Использовать"
            tags={["Flux", "Фотореализм", "Популярная"]}
          />
        </div>
        <div className="flex justify-center mt-6 lg:mt-8">
          <button className="border border-gray-300 px-4 py-2 rounded-lg text-white font-medium transition-colors hover:bg-[rgba(31,41,55,0.82)] hover:border-gray-300 active:bg-[rgba(31,41,55,0.82)] active:border-gray-300 text-sm lg:text-base">
            Показать все модели
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
