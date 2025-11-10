import { useState } from "react";
import { Clock, Calendar, Phone, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Servicos = () => {
  const { toast } = useToast();
  const [problemType, setProblemType] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!problemType || !description || !location) {
      toast({
        title: "Campos obrigatórios",
        description: "Preencha todos os campos para reportar o problema.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Problema reportado!",
      description: "Sua solicitação foi enviada à prefeitura.",
    });
    
    setProblemType("");
    setDescription("");
    setLocation("");
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-secondary to-accent p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Serviços Públicos</h1>
        <p className="text-white/90">Horários, contatos e reportes</p>
      </div>

      <div className="p-6">
        <Tabs defaultValue="info" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="info">Informações</TabsTrigger>
            <TabsTrigger value="report">Reportar</TabsTrigger>
          </TabsList>

          <TabsContent value="info" className="space-y-4 mt-4">
            {/* Bus Schedule */}
            <Card className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">
                    Horários de Ônibus
                  </h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Linha 101 - Centro/Bairro: 6:00 às 22:00</p>
                    <p>Linha 202 - Centro/Industrial: 5:30 às 23:00</p>
                    <p>Linha 303 - Circular: 6:00 às 20:00</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Waste Collection */}
            <Card className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">
                    Coleta de Lixo
                  </h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Coleta Regular: Seg, Qua, Sex</p>
                    <p>Coleta Seletiva: Terça-feira</p>
                    <p>Coleta Orgânica: Quinta-feira</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Contact */}
            <Card className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">
                    Contato da Prefeitura
                  </h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Telefone: (11) 3000-0000</p>
                    <p>Email: contato@prefeitura.gov.br</p>
                    <p>Horário: Segunda a Sexta, 8h às 17h</p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="report" className="mt-4">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">
                  Reportar Problema Urbano
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="problem-type">Tipo de Problema</Label>
                  <Select value={problemType} onValueChange={setProblemType}>
                    <SelectTrigger id="problem-type">
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="buraco">Buraco na via</SelectItem>
                      <SelectItem value="iluminacao">
                        Iluminação pública
                      </SelectItem>
                      <SelectItem value="lixo">Acúmulo de lixo</SelectItem>
                      <SelectItem value="calcada">Calçada danificada</SelectItem>
                      <SelectItem value="sinalizacao">Sinalização</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Localização</Label>
                  <Input
                    id="location"
                    placeholder="Ex: Rua Principal, 123"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Descrição</Label>
                  <Textarea
                    id="description"
                    placeholder="Descreva o problema em detalhes..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full">
                  Enviar Reporte
                </Button>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Servicos;
