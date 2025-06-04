import Icon from "@/components/ui/icon";

const ImageToVideoCard = () => {
  return (
    <div
      className="rounded-xl overflow-hidden cursor-pointer hover:opacity-80 transition-all"
      style={{ backgroundColor: "#332D47" }}
    >
      {/* Изображение лотоса */}
      <div className="aspect-[16/10] relative overflow-hidden">
        <img
          src="https://cdn.poehali.dev/files/d633a359-125b-45b3-9fc2-d22c1765b82f.jpg"
          alt="Изображение в видео"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <div className="flex items-start gap-4">
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
    </div>
  );
};

export default ImageToVideoCard;
