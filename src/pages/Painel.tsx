import { Activity, Wind, Zap, AlertCircle, TrendingUp, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Painel = () => {
  const stats = [
    {
      id: 1,
      title: "Qualidade do Ar",
      value: "Boa",
      description: "IQA: 42",
      icon: Wind,
      color: "bg-secondary",
      status: "good",
      trend: "down",
    },
    {
      id: 2,
      title: "Consumo de Energia",
      value: "3.2 GWh",
      description: "Últimas 24h",
      icon: Zap,
      color: "bg-primary",
      status: "normal",
      trend: "up",
    },
    {
      id: 3,
      title: "Ocorrências",
      value: "12",
      description: "Hoje",
      icon: AlertCircle,
      color: "bg-accent",
      status: "alert",
      trend: "down",
    },
  ];

  const airQualityData = [
    { time: "00h", iqa: 38 },
    { time: "04h", iqa: 35 },
    { time: "08h", iqa: 42 },
    { time: "12h", iqa: 48 },
    { time: "16h", iqa: 45 },
    { time: "20h", iqa: 40 },
  ];

  const energyData = [
    { day: "Seg", consumo: 2.8 },
    { day: "Ter", consumo: 3.1 },
    { day: "Qua", consumo: 2.9 },
    { day: "Qui", consumo: 3.4 },
    { day: "Sex", consumo: 3.2 },
    { day: "Sáb", consumo: 2.5 },
    { day: "Dom", consumo: 2.3 },
  ];

  const indicators = [
    {
      category: "Mobilidade",
      items: [
        { label: "Linhas de ônibus ativas", value: "32" },
        { label: "Tempo médio de espera", value: "8 min" },
        { label: "Taxa de ocupação", value: "67%" },
      ],
    },
    {
      category: "Meio Ambiente",
      items: [
        { label: "Coleta seletiva", value: "78%" },
        { label: "Árvores plantadas (mês)", value: "145" },
        { label: "Economia de água", value: "12%" },
      ],
    },
  ];

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      good: "text-secondary",
      normal: "text-primary",
      alert: "text-destructive",
    };
    return colors[status] || "text-muted-foreground";
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary-glow p-6 text-white">
        <Activity className="w-12 h-12 mb-2" />
        <h1 className="text-2xl font-bold mb-2">Painel da Cidade</h1>
        <p className="text-white/90">Dados e estatísticas em tempo real</p>
      </div>

      <div className="p-6 space-y-6">
        {/* Key Stats */}
        <div className="grid grid-cols-1 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            const TrendIcon = stat.trend === "up" ? TrendingUp : TrendingDown;
            return (
              <Card
                key={stat.id}
                className="p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {stat.title}
                        </p>
                        <p
                          className={`text-2xl font-bold ${getStatusColor(
                            stat.status
                          )}`}
                        >
                          {stat.value}
                        </p>
                      </div>
                      <TrendIcon
                        className={`w-5 h-5 ${
                          stat.trend === "up"
                            ? "text-destructive"
                            : "text-secondary"
                        }`}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Air Quality Chart */}
        <Card className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-foreground">
              Qualidade do Ar (24h)
            </h3>
            <Badge className="bg-secondary">IQA Bom</Badge>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={airQualityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis
                dataKey="time"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Line
                type="monotone"
                dataKey="iqa"
                stroke="hsl(var(--secondary))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--secondary))" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Energy Consumption Chart */}
        <Card className="p-4">
          <h3 className="font-semibold text-foreground mb-4">
            Consumo de Energia (Semanal)
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={energyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis
                dataKey="day"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Bar
                dataKey="consumo"
                fill="hsl(var(--primary))"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Indicators */}
        {indicators.map((indicator) => (
          <Card key={indicator.category} className="p-4">
            <h3 className="font-semibold text-foreground mb-3">
              {indicator.category}
            </h3>
            <div className="space-y-3">
              {indicator.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2 border-b border-border last:border-0"
                >
                  <span className="text-sm text-muted-foreground">
                    {item.label}
                  </span>
                  <span className="font-semibold text-foreground">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        ))}

        {/* Info Note */}
        <Card className="p-4 bg-muted/50">
          <p className="text-sm text-muted-foreground text-center">
            Dados atualizados a cada 5 minutos • Última atualização: há 2 min
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Painel;
