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
      <div className="bg-gradient-to-r from-secondary to-accent p-6 text-white">
        <Leaf className="w-12 h-12 mb-2" />
        <h1 className="text-2xl font-bold mb-2">Sustentabilidade</h1>
        <p className="text-white/90">Juntos por uma cidade mais verde</p>
      </div>

      <div className="p-6 space-y-6">
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

        {/* Ranking */}
        <div>
          <h2 className="font-semibold text-lg text-foreground mb-3 flex items-center gap-2">
            <Award className="w-5 h-5 text-primary" />
            Ranking Eco
          </h2>
          <Card className="p-4">
            <div className="space-y-3">
              {ranking.map((user) => (
                <div
                  key={user.position}
                  className={`flex items-center justify-between py-2 ${
                    user.isCurrentUser
                      ? "bg-primary/5 -mx-4 px-4 rounded-lg border-l-4 border-primary"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl w-8 text-center">
                      {user.badge || `${user.position}º`}
                    </span>
                    <div>
                      <p
                        className={`font-medium ${
                          user.isCurrentUser
                            ? "text-primary font-semibold"
                            : "text-foreground"
                        }`}
                      >
                        {user.name}
                      </p>
                      {user.isCurrentUser && (
                        <Progress value={65} className="w-32 h-1 mt-1" />
                      )}
                    </div>
                  </div>
                  <span className="font-semibold text-secondary">
                    {user.points} pts
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Sustentabilidade;
