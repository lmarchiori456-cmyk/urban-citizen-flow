import { useState } from "react";
import { MapPin, Bus, Trash2, Trees, ParkingCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type FilterType = "all" | "transport" | "waste" | "parks" | "parking";

const Mapa = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filters = [
    { id: "all", label: "Todos", icon: MapPin },
    { id: "transport", label: "Transporte", icon: Bus },
    { id: "waste", label: "Coleta", icon: Trash2 },
    { id: "parks", label: "Parques", icon: Trees },
    { id: "parking", label: "Estacionamento", icon: ParkingCircle },
  ];

  const points = [
    {
      id: 1,
      name: "Terminal Central",
      type: "transport",
      distance: "850m",
      status: "Ativo",
    },
    {
      id: 2,
      name: "Coleta Seletiva - Centro",
      type: "waste",
      distance: "320m",
      status: "Próxima: Terça",
    },
    {
      id: 3,
      name: "Parque Municipal",
      type: "parks",
      distance: "1.2km",
      status: "Aberto",
    },
    {
      id: 4,
      name: "Estacionamento Público",
      type: "parking",
      distance: "450m",
      status: "Disponível",
    },
  ];

  const filteredPoints =
    activeFilter === "all"
      ? points
      : points.filter((p) => p.type === activeFilter);

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      transport: "bg-primary",
      waste: "bg-secondary",
      parks: "bg-accent",
      parking: "bg-primary-glow",
    };
    return colors[type] || "bg-primary";
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary-glow p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Mapa Inteligente</h1>
        <p className="text-white/90">Explore pontos de interesse da cidade</p>
      </div>

      {/* Filters */}
      <div className="px-6 py-4 overflow-x-auto">
        <div className="flex gap-2 pb-2">
          {filters.map((filter) => {
            const Icon = filter.icon;
            const isActive = activeFilter === filter.id;
            return (
              <Button
                key={filter.id}
                variant={isActive ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter.id as FilterType)}
                className="whitespace-nowrap"
              >
                <Icon className="w-4 h-4 mr-2" />
                {filter.label}
              </Button>
            );
          })}
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="mx-6 mb-6 h-64 bg-muted rounded-lg border border-border flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
          <p className="text-sm text-muted-foreground">
            Mapa interativo será carregado aqui
          </p>
        </div>
      </div>

      {/* Points List */}
      <div className="px-6 space-y-3">
        <h2 className="font-semibold text-lg text-foreground mb-4">
          Pontos próximos ({filteredPoints.length})
        </h2>
        {filteredPoints.map((point) => {
          const Icon =
            filters.find((f) => f.id === point.type)?.icon || MapPin;
          return (
            <Card
              key={point.id}
              className="p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-10 h-10 rounded-lg ${getTypeColor(
                    point.type
                  )} flex items-center justify-center`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">
                    {point.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {point.distance}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {point.status}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Mapa;
