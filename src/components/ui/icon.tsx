import {
  Home,
  Users,
  Video,
  ImageIcon,
  Edit,
  Palette,
  Bot,
  Zap,
  MessageSquare,
  Settings,
  Sparkles,
  Youtube,
  MessageCircle,
  HelpCircle,
  Plus,
  ChevronRight,
  X,
  BookOpen,
  Brain,
  FileText,
  User,
  Heart,
  Brush,
  CircleAlert,
  Play,
} from "lucide-react";

const iconMap = {
  Home,
  Users,
  Video,
  ImageIcon,
  Edit,
  Palette,
  Bot,
  Zap,
  MessageSquare,
  Settings,
  Sparkles,
  Youtube,
  MessageCircle,
  HelpCircle,
  Plus,
  ChevronRight,
  X,
  BookOpen,
  Brain,
  FileText,
  User,
  Heart,
  Brush,
  CircleAlert,
  Play,
};

interface IconProps {
  name: keyof typeof iconMap;
  size?: number;
  className?: string;
  fallback?: keyof typeof iconMap;
}

const Icon = ({
  name,
  size = 24,
  className = "",
  fallback = "CircleAlert",
}: IconProps) => {
  const IconComponent = iconMap[name] || iconMap[fallback];
  return <IconComponent size={size} className={className} />;
};

export default Icon;
