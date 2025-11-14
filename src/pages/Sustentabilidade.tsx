import { Leaf, Recycle, Droplet, Zap, Award, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Sustentabilidade = () => {
  const tips = [
    {
      id: 1,
      icon: Droplet,
      title: "Economize água",
      description: "Feche a torneira ao escovar os dentes. Economia de até 12 litros por dia.",
      points: 10,
    },
    {
      id: 2,
      icon: Zap,
      title: "Desligue aparelhos",
      description: "Tire da tomada aparelhos em stand-by. Reduza até 15% no consumo.",
      points: 15,
    },
    {
      id: 3,
      icon: Recycle,
      title: "Separe o lixo",
      description: "Pratique a coleta seletiva. Recicle papel, plástico, vidro e metal.",
      points: 20,
    },
  ];

  const recyclingPoints = [
    {
      id: 1,
      name: "Ecoponto Centro",
      address: "Rua das Flores, 123",
      distance: "450m",
      materials: ["Papel", "Plástico", "Vidro"],
    },
    {
      id: 2,
      name: "Ponto Verde Sul",
      address: "Av. Principal, 890",
      distance: "1.2km",
      materials: ["Metal", "Eletrônicos"],
    },
    {
      id: 3,
      name: "Recicla Norte",
      address: "Rua do Parque, 456",
      distance: "2.1km",
      materials: ["Orgânicos", "Óleo"],
    },
  ];

  const ranking = [
    { position: 1, name: "Maria Santos", points: 1250, badge: "🏆" },
    { position: 2, name: "João Silva", points: 980, badge: "🥈" },
    { position: 3, name: "Ana Costa", points: 845, badge: "🥉" },
    { position: 4, name: "Você", points: 450, badge: "", isCurrentUser: true },
    { position: 5, name: "Pedro Lima", points: 320, badge: "" },
  ];

  const campaigns = [
    {
      id: 1,
      title: "Plantio de Árvores",
      description: "Participe do mutirão no Parque Central",
      date: "15/11/2025",
      participants: 127,
    },
    {
      id: 2,
      title: "Limpeza de Praias",
      description: "Ação coletiva nas praias da cidade",
      date: "22/11/2025",
      participants: 89,
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-secondary to-accent p-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="relative">
          <Leaf className="w-12 h-12 mb-2" />
          <h1 className="text-2xl font-bold mb-2">Sustentabilidade</h1>
          <p className="text-white/90">Juntos por uma cidade mais verde</p>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Ranking - DESTAQUE PRINCIPAL */}
        <div className="relative">
          <div className="absolute -top-3 -left-3 w-20 h-20 bg-secondary/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
          
          <Card className="relative overflow-hidden border-2 border-secondary/30 shadow-lg bg-gradient-to-br from-secondary/5 to-accent/5">
            <div className="bg-gradient-to-r from-secondary to-accent p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Award className="w-6 h-6" />
                  <h2 className="font-bold text-xl">Ranking Eco</h2>
                </div>
                <Badge className="bg-white/20 text-white border-none">
                  Top 5
                </Badge>
              </div>
              <p className="text-white/90 text-sm mt-1">Compete e ajude a cidade a ser mais verde</p>
            </div>
            
            <div className="p-4 space-y-3">
              {ranking.map((user) => (
                <div
                  key={user.position}
                  className={`flex items-center justify-between p-3 rounded-lg transition-all ${
                    user.isCurrentUser
                      ? "bg-secondary/10 border-2 border-secondary shadow-md scale-105"
                      : "bg-card hover:bg-muted/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-3xl w-10 text-center ${user.position <= 3 ? 'scale-110' : ''}`}>
                      {user.badge || `${user.position}º`}
                    </span>
                    <div>
                      <p
                        className={`font-medium ${
                          user.isCurrentUser
                            ? "text-secondary font-bold text-lg"
                            : "text-foreground"
                        }`}
                      >
                        {user.name}
                        {user.isCurrentUser && <span className="ml-2 text-xs bg-secondary text-white px-2 py-0.5 rounded-full">Você</span>}
                      </p>
                      {user.isCurrentUser && (
                        <div className="mt-1">
                          <Progress value={65} className="w-32 h-2 bg-secondary/20" />
                          <p className="text-xs text-muted-foreground mt-1">65% até 3º lugar</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-xl text-secondary block">
                      {user.points}
                    </span>
                    <span className="text-xs text-muted-foreground">pontos</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 pt-0">
              <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 p-3">
                <p className="text-sm text-foreground font-medium text-center">
                  🎯 Ganhe pontos realizando ações sustentáveis!
                </p>
              </Card>
            </div>
          </Card>
        </div>

        {/* Eco Tips */}
        <div>
          <h2 className="font-semibold text-lg text-foreground mb-3 flex items-center gap-2">
            <Leaf className="w-5 h-5 text-secondary" />
            Dicas Sustentáveis
          </h2>
          <div className="space-y-3">
            {tips.map((tip) => {
              const Icon = tip.icon;
              return (
                <Card
                  key={tip.id}
                  className="p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="font-semibold text-foreground">
                          {tip.title}
                        </h3>
                        <Badge className="bg-secondary">+{tip.points} pts</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {tip.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Recycling Points */}
        <div>
          <h2 className="font-semibold text-lg text-foreground mb-3 flex items-center gap-2">
            <Recycle className="w-5 h-5 text-accent" />
            Pontos de Reciclagem
          </h2>
          <div className="space-y-3">
            {recyclingPoints.map((point) => (
              <Card
                key={point.id}
                className="p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-semibold text-foreground">
                        {point.name}
                      </h3>
                      <Badge variant="secondary">{point.distance}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {point.address}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {point.materials.map((material) => (
                        <Badge
                          key={material}
                          variant="outline"
                          className="text-xs"
                        >
                          {material}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Campaigns */}
        <div>
          <h2 className="font-semibold text-lg text-foreground mb-3">
            Campanhas Ambientais
          </h2>
          <div className="space-y-3">
            {campaigns.map((campaign) => (
              <Card
                key={campaign.id}
                className="p-4 bg-gradient-to-br from-secondary/5 to-accent/5 border-secondary/20"
              >
                <h3 className="font-semibold text-foreground mb-1">
                  {campaign.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {campaign.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{campaign.date}</span>
                  <span className="text-secondary font-medium">
                    {campaign.participants} participantes
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Sustentabilidade;
