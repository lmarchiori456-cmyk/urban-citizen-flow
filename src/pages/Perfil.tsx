import { User, Mail, Phone, MapPin, Award, FileText, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const Perfil = () => {
  const user = {
    name: "João Silva",
    email: "joao.silva@email.com",
    phone: "(11) 99999-9999",
    address: "Centro, São Paulo",
    points: 450,
    level: 3,
    nextLevel: 500,
  };

  const achievements = [
    { id: 1, title: "Cidadão Ativo", icon: "🏆", earned: true },
    { id: 2, title: "Eco Warrior", icon: "🌱", earned: true },
    { id: 3, title: "Reporter", icon: "📝", earned: true },
    { id: 4, title: "Colaborador", icon: "🤝", earned: false },
  ];

  const recentReports = [
    {
      id: 1,
      title: "Buraco na Av. Central",
      status: "Em análise",
      date: "05/11/2025",
    },
    {
      id: 2,
      title: "Iluminação Rua das Flores",
      status: "Resolvido",
      date: "28/10/2025",
    },
    {
      id: 3,
      title: "Lixo acumulado",
      status: "Em andamento",
      date: "20/10/2025",
    },
  ];

  const progress = (user.points / user.nextLevel) * 100;

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-accent p-6 text-white">
        <div className="flex items-center gap-4 mb-4">
          <Avatar className="w-20 h-20 border-4 border-white">
            <AvatarFallback className="text-2xl bg-white text-primary">
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <Badge className="mt-1 bg-white/20 text-white border-white/30">
              Nível {user.level}
            </Badge>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20"
          >
            <Settings className="w-5 h-5" />
          </Button>
        </div>

        {/* Points Progress */}
        <div className="bg-white/10 rounded-lg p-3">
          <div className="flex justify-between text-sm mb-2">
            <span>Pontos de participação</span>
            <span className="font-semibold">
              {user.points} / {user.nextLevel}
            </span>
          </div>
          <Progress value={progress} className="h-2 bg-white/20" />
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Contact Info */}
        <Card className="p-4">
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <User className="w-5 h-5 text-primary" />
            Informações de Contato
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>{user.email}</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>{user.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{user.address}</span>
            </div>
          </div>
        </Card>

        {/* Achievements */}
        <Card className="p-4">
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <Award className="w-5 h-5 text-secondary" />
            Conquistas
          </h3>
          <div className="grid grid-cols-4 gap-3">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`text-center ${
                  achievement.earned ? "opacity-100" : "opacity-40"
                }`}
              >
                <div className="text-3xl mb-1">{achievement.icon}</div>
                <p className="text-xs text-muted-foreground">
                  {achievement.title}
                </p>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Reports */}
        <Card className="p-4">
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <FileText className="w-5 h-5 text-accent" />
            Solicitações Recentes
          </h3>
          <div className="space-y-3">
            {recentReports.map((report) => (
              <div
                key={report.id}
                className="flex items-center justify-between py-2 border-b border-border last:border-0"
              >
                <div className="flex-1">
                  <p className="font-medium text-sm text-foreground">
                    {report.title}
                  </p>
                  <p className="text-xs text-muted-foreground">{report.date}</p>
                </div>
                <Badge
                  variant={
                    report.status === "Resolvido" ? "default" : "secondary"
                  }
                  className="text-xs"
                >
                  {report.status}
                </Badge>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-3">
            Ver todos
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Perfil;
