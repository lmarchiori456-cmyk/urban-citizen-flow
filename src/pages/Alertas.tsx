import { Bell, AlertTriangle, Cloud, Calendar, Car } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const Alertas = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const alerts = [
    {
      id: 1,
      type: "traffic",
      icon: Car,
      title: "Trânsito intenso",
      description: "Congestionamento na Av. Principal devido a obra",
      time: "Há 15 min",
      priority: "high",
    },
    {
      id: 2,
      type: "weather",
      icon: Cloud,
      title: "Previsão de chuva",
      description: "Possibilidade de chuva forte para esta tarde",
      time: "Há 1 hora",
      priority: "medium",
    },
    {
      id: 3,
      type: "event",
      icon: Calendar,
      title: "Evento no centro",
      description: "Festival de cultura acontece no fim de semana",
      time: "Há 2 horas",
      priority: "low",
    },
    {
      id: 4,
      type: "alert",
      icon: AlertTriangle,
      title: "Manutenção programada",
      description: "Interrupção de água no bairro Norte amanhã das 8h às 12h",
      time: "Há 3 horas",
      priority: "high",
    },
  ];

  const getPriorityColor = (priority: string) => {
    const colors: Record<string, string> = {
      high: "bg-destructive",
      medium: "bg-primary",
      low: "bg-secondary",
    };
    return colors[priority] || "bg-primary";
  };

  const getPriorityBadge = (priority: string) => {
    const badges: Record<string, string> = {
      high: "Urgente",
      medium: "Importante",
      low: "Informativo",
    };
    return badges[priority] || "Info";
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Alertas e Notícias</h1>
        <p className="text-white/90">Fique informado sobre a cidade</p>
      </div>

      {/* Notifications Toggle */}
      <div className="p-6">
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-primary" />
              <div>
                <Label htmlFor="notifications" className="font-semibold">
                  Notificações Push
                </Label>
                <p className="text-sm text-muted-foreground">
                  Receba alertas importantes
                </p>
              </div>
            </div>
            <Switch
              id="notifications"
              checked={notificationsEnabled}
              onCheckedChange={setNotificationsEnabled}
            />
          </div>
        </Card>
      </div>

      {/* Alerts List */}
      <div className="px-6 space-y-3">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-lg text-foreground">
            Alertas recentes
          </h2>
          <Button variant="ghost" size="sm">
            Limpar
          </Button>
        </div>

        {alerts.map((alert) => {
          const Icon = alert.icon;
          return (
            <Card
              key={alert.id}
              className="p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-10 h-10 rounded-lg ${getPriorityColor(
                    alert.priority
                  )} flex items-center justify-center`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-semibold text-foreground">
                      {alert.title}
                    </h3>
                    <Badge
                      variant={
                        alert.priority === "high" ? "destructive" : "secondary"
                      }
                      className="text-xs"
                    >
                      {getPriorityBadge(alert.priority)}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {alert.description}
                  </p>
                  <span className="text-xs text-muted-foreground">
                    {alert.time}
                  </span>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Alertas;
