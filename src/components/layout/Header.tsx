import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-900">
            Что вы хотите создать?
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
            <Icon name="Youtube" size={20} />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
            <Icon name="MessageCircle" size={20} />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
            <Icon name="HelpCircle" size={20} />
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <Icon name="Plus" size={16} />
            Создать
          </button>
          <button className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            Войти
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
