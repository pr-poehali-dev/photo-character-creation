import { useState } from "react";
import Icon from "@/components/ui/icon";

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-purple-600 text-white py-2 px-6 flex items-center justify-between text-sm">
      <div className="flex items-center flex-1 justify-center">
        <div className="flex items-center gap-2.5">
          <span className="text-center font-normal">
            ⚡ Предложение ограничено! Откройте для себя год безграничных
            возможностей для творчества все годовые планы со скидкой 50%
          </span>
          <button className="bg-white text-purple-600 px-3 py-1 rounded text-xs font-medium hover:bg-gray-100 transition-colors whitespace-nowrap">
            Посмотреть
          </button>
        </div>
      </div>

      <div className="flex items-center">
        <button
          className="text-white hover:text-gray-200 transition-colors"
          onClick={() => setIsVisible(false)}
        >
          <Icon name="X" size={16} />
        </button>
      </div>
    </div>
  );
};

export default PromoBanner;
