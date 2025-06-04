import Icon from "@/components/ui/icon";

const ImageToVideoCard = () => {
  return (
    <div
      className="rounded-xl p-4 cursor-pointer hover:opacity-80 transition-all relative overflow-hidden"
      style={{ backgroundColor: "#332D47" }}
    >
      {/* Фоновое изображение */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url(https://cdn.poehali.dev/files/cb4306e0-6549-4908-9adb-06296f848079.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Контент */}
      <div className="flex items-start gap-4 relative z-10">
        <div className="p-3 rounded-lg bg-yellow-600 flex-shrink-0">
          <Icon name="Play" size={24} className="text-white" />
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-white text-lg mb-0 leading-tight">
            Изображение в видео
          </h4>
          <p className="text-blue-200/80 text-sm leading-relaxed mb-0">
            Оживите ваше изображение
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageToVideoCard;
