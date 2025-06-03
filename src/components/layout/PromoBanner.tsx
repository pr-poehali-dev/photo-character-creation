import { useState } from "react";
import Icon from "@/components/ui/icon";

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-purple-600 text-white py-2 px-6 flex items-center justify-between text-sm">
      <div className="flex items-center gap-2 flex-1 justify-center">
        <Icon
          name="Zap"
          size={16}
          className="text-yellow-400 fill-yellow-400 drop-shadow-sm"
          style={{ filter: "drop-shadow(0 0 4px rgba(251, 191, 36, 0.6))" }}
        />
        <span className="text-center">
          Предложение ограничено по времени! Откройте для себя год безграничных
          возможностей для творчества со всеми годовыми планами со скидкой 50%
        </span>
      </div>

      <div className="flex items-center gap-3">
        <button className="bg-white text-purple-600 px-3 py-1 rounded text-xs font-medium hover:bg-gray-100 transition-colors">
          Посмотреть план
        </button>
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
