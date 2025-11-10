import { Home, MoreHorizontal } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Map, FileText, Bell, User, Leaf, Calendar, Activity } from "lucide-react";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const mainNavItems = [
    { icon: Home, label: "Início", path: "/" },
    { icon: Map, label: "Mapa", path: "/mapa" },
    { icon: FileText, label: "Serviços", path: "/servicos" },
    { icon: Bell, label: "Alertas", path: "/alertas" },
  ];

  const moreItems = [
    { icon: User, label: "Perfil", path: "/perfil" },
    { icon: Leaf, label: "Sustentabilidade", path: "/sustentabilidade" },
    { icon: Calendar, label: "Eventos", path: "/eventos" },
    { icon: Activity, label: "Painel", path: "/painel" },
  ];

  const isMoreActive = moreItems.some(item => location.pathname === item.path);

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="flex items-center justify-around h-16">
        {mainNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={cn(
                "flex flex-col items-center justify-center gap-1 flex-1 h-full transition-colors",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className={cn(
                "flex flex-col items-center justify-center gap-1 flex-1 h-full transition-colors",
                isMoreActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <MoreHorizontal className="w-5 h-5" />
              <span className="text-xs font-medium">Mais</span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 mb-2">
            {moreItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <DropdownMenuItem
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={cn(
                    "cursor-pointer",
                    isActive && "bg-primary/10 text-primary"
                  )}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.label}
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default BottomNav;
