import { useState } from "react";
import { Calendar, Music, Trophy, GraduationCap, Heart, Filter } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

type EventCategory = "all" | "music" | "sports" | "education" | "volunteer";

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: EventCategory;
  interested: number;
  isInterested: boolean;
}

const Eventos = () => {
  const { toast } = useToast();
  const [activeFilter, setActiveFilter] = useState<EventCategory>("all");
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      title: "Festival de Música na Praça",
      description: "Shows de bandas locais com entrada gratuita",
      date: "18/11/2025",
      time: "19:00",
      location: "Praça Central",
      category: "music",
      interested: 234,
      isInterested: false,
    },
    {
      id: 2,
      title: "Corrida Solidária 5km",
      description: "Corrida beneficente para arrecadação de fundos",
      date: "20/11/2025",
      time: "07:00",
      location: "Parque Municipal",
      category: "sports",
      interested: 156,
      isInterested: true,
    },
    {
      id: 3,
      title: "Oficina de Programação",
      description: "Introdução ao desenvolvimento web para iniciantes",
      date: "22/11/2025",
      time: "14:00",
      location: "Centro Comunitário",
      category: "education",
      interested: 89,
      isInterested: false,
    },
    {
      id: 4,
      title: "Mutirão de Limpeza",
      description: "Ação voluntária de limpeza urbana",
      date: "25/11/2025",
      time: "08:00",
      location: "Bairro Norte",
      category: "volunteer",
      interested: 67,
      isInterested: false,
    },
    {
      id: 5,
      title: "Campeonato de Futebol",
      description: "Torneio comunitário entre bairros",
      date: "27/11/2025",
      time: "15:00",
      location: "Campo do Centro",
      category: "sports",
      interested: 312,
      isInterested: false,
    },
  ]);

  const categories = [
    { id: "all", label: "Todos", icon: Calendar },
    { id: "music", label: "Música", icon: Music },
    { id: "sports", label: "Esporte", icon: Trophy },
    { id: "education", label: "Educação", icon: GraduationCap },
    { id: "volunteer", label: "Voluntariado", icon: Heart },
  ];

  const filteredEvents =
    activeFilter === "all"
      ? events
      : events.filter((e) => e.category === activeFilter);

  const getCategoryColor = (category: EventCategory) => {
    const colors: Record<string, string> = {
      music: "bg-primary",
      sports: "bg-secondary",
      education: "bg-accent",
      volunteer: "bg-primary-glow",
    };
    return colors[category] || "bg-primary";
  };

  const handleInterest = (eventId: number) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === eventId
          ? {
              ...event,
              isInterested: !event.isInterested,
              interested: event.isInterested
                ? event.interested - 1
                : event.interested + 1,
            }
          : event
      )
    );

    const event = events.find((e) => e.id === eventId);
    if (event) {
      toast({
        title: event.isInterested ? "Interesse removido" : "Interesse marcado!",
        description: event.isInterested
          ? "Você não está mais interessado neste evento."
          : `Você marcou interesse em "${event.title}".`,
      });
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-accent p-6 text-white">
        <Calendar className="w-12 h-12 mb-2" />
        <h1 className="text-2xl font-bold mb-2">Eventos e Cultura</h1>
        <p className="text-white/90">Descubra o que acontece na cidade</p>
      </div>

      {/* Filters */}
      <div className="px-6 py-4 bg-card border-b border-border">
        <div className="flex items-center gap-2 mb-3">
          <Filter className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-medium text-foreground">Categorias</span>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeFilter === category.id;
            return (
              <Button
                key={category.id}
                variant={isActive ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category.id as EventCategory)}
                className="whitespace-nowrap"
              >
                <Icon className="w-4 h-4 mr-2" />
                {category.label}
              </Button>
            );
          })}
        </div>
      </div>

      {/* Events List */}
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-lg text-foreground">
            {filteredEvents.length} eventos
          </h2>
        </div>

        {filteredEvents.map((event) => {
          const categoryData = categories.find((c) => c.id === event.category);
          const Icon = categoryData?.icon || Calendar;

          return (
            <Card
              key={event.id}
              className="p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex gap-3">
                <div
                  className={`w-12 h-12 rounded-lg ${getCategoryColor(
                    event.category
                  )} flex items-center justify-center flex-shrink-0`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-semibold text-foreground">
                      {event.title}
                    </h3>
                    <Badge variant="secondary" className="text-xs whitespace-nowrap">
                      {categoryData?.label}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {event.description}
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-3">
                    <span>📅 {event.date}</span>
                    <span>•</span>
                    <span>🕐 {event.time}</span>
                    <span>•</span>
                    <span>📍 {event.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {event.interested} interessados
                    </span>
                    <Button
                      size="sm"
                      variant={event.isInterested ? "default" : "outline"}
                      onClick={() => handleInterest(event.id)}
                    >
                      {event.isInterested ? "✓ Interessado" : "Tenho interesse"}
                    </Button>
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

export default Eventos;
