import Icon from "@/components/ui/icon";
import QuickStartCard from "@/components/ui/QuickStartCard";

const QuickStartSection = () => {
  const quickStartItems = [
    {
      title: "Изображение в видео",
      description: "Оживите ваше изображение",
      icon: "Play",
      color: "bg-yellow-600",
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
      color: "bg-gradient-to-br from-indigo-600 to-purple-700",
    },
  ];

  return (
    <div className="px-8 py-6 bg-[#262233]">
      <h2 className="text-2xl font-bold text-white mb-6">Быстрый старт</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {quickStartItems.map((item, index) => (
          <QuickStartCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default QuickStartSection;
