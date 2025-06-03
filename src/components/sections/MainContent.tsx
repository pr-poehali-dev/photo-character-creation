import Icon from "@/components/ui/icon";
import ToolCard from "@/components/ui/ToolCard";
import QuickStartCard from "@/components/ui/QuickStartCard";

const MainContent = () => {
  const featuredApps = [
    {
      title: "Image to Video",
      author: "By OpenArt",
      imageUrl:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=225&fit=crop",
      badge: "New",
    },
    {
      title: "Ultimate Upscale",
      author: "By OpenArt",
      imageUrl:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=225&fit=crop",
    },
    {
      title: "AI Filters",
      author: "By OpenArt",
      imageUrl:
        "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=225&fit=crop",
    },
    {
      title: "Sketch to Image",
      author: "By OpenArt",
      imageUrl:
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=225&fit=crop",
    },
    {
      title: "Blend Board",
      author: "By OpenArt",
      imageUrl:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=400&h=225&fit=crop",
    },
    {
      title: "Change Facial Expression",
      author: "By OpenArt",
      imageUrl:
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=225&fit=crop",
    },
    {
      title: "Expand",
      author: "By OpenArt",
      imageUrl:
        "https://images.unsplash.com/photo-1574169208507-84376144848b?w=400&h=225&fit=crop",
    },
    {
      title: "Remove Background",
      author: "By OpenArt",
      imageUrl:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=225&fit=crop",
    },
  ];

  return (
    <div className="flex-1 p-8 bg-[#262233]">
      {/* Featured Apps */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Featured Apps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredApps.map((app, index) => (
            <ToolCard key={index} {...app} />
          ))}
        </div>
      </div>

      {/* Дополнительный раздел можно оставить или убрать */}
      <div className="text-center">
        <button className="bg-[#1a1825] hover:bg-[#2a2535] text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2 mx-auto">
          View All Flow Apps
          <Icon name="ArrowRight" size={16} />
        </button>
      </div>
    </div>
  );
};

export default MainContent;
