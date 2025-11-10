import { Building2, Map, FileText, Bell, User, Leaf, Calendar, Activity } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import cityHero from "@/assets/city-hero.jpg";

const Index = () => {
  const navigate = useNavigate();

  const shortcuts = [
    {
      icon: Map,
      title: "Mapa",
      description: "Pontos de interesse",
      path: "/mapa",
      gradient: "from-primary to-primary-glow",
    },
    {
      icon: FileText,
      title: "Serviços",
      description: "Horários e reportes",
      path: "/servicos",
      gradient: "from-secondary to-accent",
    },
    {
      icon: Bell,
      title: "Alertas",
      description: "Notícias da cidade",
      path: "/alertas",
      gradient: "from-primary to-secondary",
    },
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Ações verdes",
      path: "/sustentabilidade",
      gradient: "from-secondary to-accent",
    },
    {
      icon: Calendar,
      title: "Eventos",
      description: "Cultura e lazer",
      path: "/eventos",
      gradient: "from-primary to-accent",
    },
    {
      icon: Activity,
      title: "Painel",
      description: "Dados em tempo real",
      path: "/painel",
      gradient: "from-primary-glow to-primary",
    },
    {
      icon: User,
      title: "Perfil",
      description: "Seus dados",
      path: "/perfil",
      gradient: "from-accent to-secondary",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Section */}
      <div className="relative h-[280px] overflow-hidden">
        <img
          src={cityHero}
          alt="Smart City"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-background" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <Building2 className="w-16 h-16 text-white mb-4" />
          <h1 className="text-4xl font-bold text-white mb-2">CityConecta</h1>
          <p className="text-white/90 text-lg">A cidade na palma da sua mão</p>
        </div>
      </div>

      {/* Shortcuts Grid */}
      <div className="px-6 -mt-8">
        <div className="grid grid-cols-2 gap-3">
          {shortcuts.map((shortcut) => {
            const Icon = shortcut.icon;
            return (
              <Card
                key={shortcut.path}
                onClick={() => navigate(shortcut.path)}
                className="p-4 cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border"
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${shortcut.gradient} flex items-center justify-center mb-2`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-0.5">
                  {shortcut.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {shortcut.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Info Section */}
        <div className="mt-8 space-y-4">
          <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <Bell className="w-5 h-5 text-primary" />
              Bem-vindo ao CityConecta
            </h3>
            <p className="text-sm text-muted-foreground">
              Acesse serviços públicos, acompanhe alertas da cidade e contribua
              para uma cidade mais inteligente e sustentável.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
