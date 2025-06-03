import Icon from "@/components/ui/icon";

const ActionBar = () => {
  return (
    <div
      className="border-b-2 px-6 py-3 bg-[#262233]"
      style={{ borderBottomColor: "#374151" }}
    >
      <div className="flex items-center justify-end gap-4">
        <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
          <Icon name="Youtube" size={20} />
        </button>
        <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
          <Icon name="MessageCircle" size={20} />
        </button>
        <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
          <Icon name="HelpCircle" size={20} />
        </button>
        <button className="text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 bg-[#3452b8]">
          <Icon name="Plus" size={16} />
          Создать
        </button>
        <button className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
          Войти
        </button>
      </div>
    </div>
  );
};

export default ActionBar;
