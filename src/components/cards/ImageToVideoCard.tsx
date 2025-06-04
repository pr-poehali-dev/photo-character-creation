import Icon from "@/components/ui/icon";

const ImageToVideoCard = () => {
  return (
    <div
      className="rounded-xl p-4 cursor-pointer hover:opacity-80 transition-all relative overflow-hidden"
      style={{ backgroundColor: "#332D47" }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cdn.poehali.dev/files/bbf9dc17-55ec-49b5-b416-c9a611cba95f.jpg')",
        }}
      />

      <div className="flex items-start gap-4 relative z-10">
        <div className="p-3 rounded-lg bg-yellow-600/90 flex-shrink-0 backdrop-blur-sm">
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
